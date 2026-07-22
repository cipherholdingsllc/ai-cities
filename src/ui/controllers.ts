import { CITY_NODES } from "../data/city";
import {
  allocateContext,
  type ContextItem,
  calculateAgenticLeverage,
  calculateBem,
  calculateCongestion,
  calculateRiskAdjustedAutonomy,
} from "../domain/models";
import type { RiskZone } from "../domain/types";
import { LAYER_LABELS, TRUTH_LABELS } from "./template";

function requireElement<T extends Element>(selector: string, root: ParentNode = document): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Required UI element not found: ${selector}`);
  return element;
}

function inputValue(id: string): number {
  return Number(requireElement<HTMLInputElement>(`#${id}`).value);
}

function setText(selector: string, value: string): void {
  requireElement<HTMLElement>(selector).textContent = value;
}

function showView(viewName: string): void {
  document.querySelectorAll<HTMLElement>("[data-view]").forEach((view) => {
    view.hidden = view.dataset.view !== viewName;
  });
  document.querySelectorAll<HTMLButtonElement>("[data-view-target]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.viewTarget === viewName));
  });
  window.history.replaceState(null, "", `#${viewName}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupViews(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.viewTarget ?? "overview"));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-jump-view]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.jumpView ?? "overview"));
  });

  const initialView = window.location.hash.slice(1);
  if (["overview", "models", "evidence"].includes(initialView)) showView(initialView);
}

function selectNode(nodeId: string): void {
  const node = CITY_NODES.find((candidate) => candidate.id === nodeId);
  if (!node) return;

  document.querySelectorAll<HTMLButtonElement>("[data-node-id]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.nodeId === node.id);
  });
  setText("#node-layer", LAYER_LABELS[node.layer]);
  setText("#node-confidence", `${Math.round(node.confidence * 100)}% confidence`);
  setText("#node-truth", TRUTH_LABELS[node.truthState]);
  const truthBadge = requireElement<HTMLElement>("#node-truth");
  truthBadge.className = `truth-badge truth-badge--${node.truthState}`;
  setText("#node-name", node.name);
  setText("#node-metaphor", `${node.civicMetaphor} → ${node.systemAnalogue}`);
  setText("#node-description", node.description);
  setText("#node-zone", node.zone);
  setText("#node-evidence", node.evidence);
  setText("#node-freshness", node.freshness);
}

function setupMap(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-node-id]").forEach((button) => {
    button.addEventListener("click", () => selectNode(button.dataset.nodeId ?? ""));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-layer-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const layer = button.dataset.layerFilter ?? "all";
      document.querySelectorAll<HTMLButtonElement>("[data-layer-filter]").forEach((candidate) => {
        candidate.classList.toggle("is-active", candidate === button);
      });
      document.querySelectorAll<HTMLButtonElement>("[data-node-id]").forEach((nodeButton) => {
        const visible = layer === "all" || nodeButton.dataset.layer === layer;
        nodeButton.classList.toggle("is-muted", !visible);
      });
    });
  });
  const first = CITY_NODES[0];
  if (first) selectNode(first.id);
}

function setupSliders(): void {
  document.querySelectorAll<HTMLInputElement>('input[type="range"]').forEach((input) => {
    const updateOutput = () => {
      const output = document.querySelector<HTMLOutputElement>(`#${input.id}-value`);
      if (output) output.value = `${input.value}${input.dataset.suffix ?? ""}`;
    };
    input.addEventListener("input", updateOutput);
    updateOutput();
  });
}

function updateCongestion(): void {
  const result = calculateCongestion({
    quantity: inputValue("congestion-q"),
    baseCost: inputValue("congestion-base"),
    slope: inputValue("congestion-slope"),
    elasticity: inputValue("congestion-elasticity"),
  });
  setText("#congestion-result", result.marginalExternalCost.toFixed(2));
  setText("#congestion-average", result.averageCost.toFixed(2));
  setText("#congestion-total", result.totalCost.toFixed(2));
}

function updateBem(): void {
  const result = calculateBem(inputValue("bem-initial"), inputValue("bem-downstream"));
  setText("#bem-result", `${result.toFixed(0)}×`);
  setText('[data-top-metric="bem"]', `${result.toFixed(0)}×`);
}

function updateLeverage(): void {
  const costs = {
    execution: inputValue("leverage-exec"),
    coordination: inputValue("leverage-coord"),
    context: inputValue("leverage-context"),
    verification: inputValue("leverage-verify"),
    rework: inputValue("leverage-rework"),
    risk: inputValue("leverage-risk"),
  };
  const totalCost = Object.values(costs).reduce((sum, value) => sum + value, 0);
  const result = calculateAgenticLeverage(inputValue("leverage-value"), costs);
  setText("#leverage-result", result.toFixed(2));
  setText("#leverage-cost", totalCost.toFixed(0));
  setText('[data-top-metric="leverage"]', result.toFixed(2));
}

function autonomyZone(value: number): { label: string; zone: RiskZone } {
  if (value >= 0.75) return { label: "Safe-zone ceiling", zone: "safe" };
  if (value >= 0.45) return { label: "Monitored-zone ceiling", zone: "monitored" };
  if (value >= 0.15) return { label: "Restricted-zone ceiling", zone: "restricted" };
  return { label: "Quarantine-zone ceiling", zone: "quarantine" };
}

function updateAutonomy(): void {
  const result = calculateRiskAdjustedAutonomy({
    capability: inputValue("autonomy-capability"),
    trust: inputValue("autonomy-trust"),
    reliability: inputValue("autonomy-reliability"),
    externalityRisk: inputValue("autonomy-risk"),
    epsilon: 0.01,
  });
  const zone = autonomyZone(result);
  setText("#autonomy-result", result.toFixed(2));
  setText("#autonomy-zone", zone.label);
  setText('[data-top-metric="autonomy"]', result.toFixed(2));
  const meter = requireElement<HTMLElement>("#autonomy-meter");
  meter.style.setProperty("--meter", `${result * 100}%`);
  meter.dataset.zone = zone.zone;
}

const CONTEXT_ITEMS: readonly ContextItem[] = [
  { id: "Policy", utility: 9, externalityCost: 1, size: 6 },
  { id: "Task evidence", utility: 12, externalityCost: 1, size: 8 },
  { id: "Prior result", utility: 8, externalityCost: 2, size: 5 },
  { id: "Raw transcript", utility: 5, externalityCost: 4, size: 9 },
  { id: "Stale memo", utility: 3, externalityCost: 5, size: 4 },
];

function updateContext(): void {
  const capacity = inputValue("context-capacity");
  const result = allocateContext(CONTEXT_ITEMS, capacity);
  setText("#context-result", result.netUtility.toFixed(0));
  setText("#context-used", `${result.usedCapacity} / ${capacity} units`);
  const container = requireElement<HTMLElement>("#context-selected");
  container.replaceChildren(
    ...result.selectedIds.map((id) => {
      const element = document.createElement("span");
      element.textContent = id;
      return element;
    }),
  );
}

function setupModels(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-model-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.modelTarget;
      document.querySelectorAll<HTMLButtonElement>("[data-model-target]").forEach((candidate) => {
        candidate.setAttribute("aria-selected", String(candidate === button));
      });
      document.querySelectorAll<HTMLElement>("[data-model-panel]").forEach((panel) => {
        panel.hidden = panel.dataset.modelPanel !== target;
      });
    });
  });

  const updates = [updateCongestion, updateBem, updateLeverage, updateAutonomy, updateContext];
  document.querySelectorAll<HTMLInputElement>('input[type="range"]').forEach((input) => {
    input.addEventListener("input", () => {
      updates.forEach((update) => {
        update();
      });
    });
  });
  updates.forEach((update) => {
    update();
  });
}

function setupSearch(): void {
  const search = requireElement<HTMLInputElement>("#ledger-search");
  search.addEventListener("input", () => {
    const query = search.value.trim().toLocaleLowerCase();
    let matches = 0;
    document.querySelectorAll<HTMLElement>("[data-searchable]").forEach((entry) => {
      const visible =
        !query || (entry.dataset.searchable ?? "").toLocaleLowerCase().includes(query);
      entry.hidden = !visible;
      if (visible) matches += 1;
    });
    requireElement<HTMLElement>("#search-empty").hidden = matches > 0;
  });
}

export function setupControllers(): void {
  setupViews();
  setupMap();
  setupSliders();
  setupModels();
  setupSearch();
}
