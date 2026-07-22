import {
  CITY_NODES,
  CITY_ROUTES,
  EVALUATION_FIELDS,
  METRICS,
  ONTOLOGY,
  VALIDATION_GATES,
  VARIABLES,
} from "../data/city";
import type { CityLayer, TruthState } from "../domain/types";

const TRUTH_LABELS: Record<TruthState, string> = {
  "current-canon": "Current canon",
  "working-extension": "Working extension",
  "proposed-experiment": "Proposed experiment",
  "long-range-concept": "Long-range concept",
};

const LAYER_LABELS: Record<CityLayer, string> = {
  actors: "Actors",
  substrate: "Substrate",
  governance: "Governance",
  memory: "Memory",
  signals: "Signals",
};

function renderMap(): string {
  const routes = CITY_ROUTES.map((route) => {
    const from = CITY_NODES.find((node) => node.id === route.from);
    const to = CITY_NODES.find((node) => node.id === route.to);
    if (!from || !to) return "";
    return `<line class="route route--${route.kind}" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" />`;
  }).join("");

  const nodes = CITY_NODES.map(
    (node) => `
      <button
        class="map-node map-node--${node.layer}"
        type="button"
        style="--node-x:${node.x}%; --node-y:${node.y}%"
        data-node-id="${node.id}"
        data-layer="${node.layer}"
        aria-label="Inspect ${node.name}"
      >
        <span class="map-node__pulse" aria-hidden="true"></span>
        <span class="map-node__label">${node.name}</span>
      </button>`,
  ).join("");

  return `
    <div class="map-shell">
      <div class="map-toolbar" aria-label="City map layers">
        <button class="filter-chip is-active" type="button" data-layer-filter="all">All layers</button>
        ${Object.entries(LAYER_LABELS)
          .map(
            ([layer, label]) =>
              `<button class="filter-chip" type="button" data-layer-filter="${layer}">${label}</button>`,
          )
          .join("")}
      </div>
      <div class="map-stage" aria-label="Interactive map of the AI City ontology">
        <div class="map-grid" aria-hidden="true"></div>
        <svg class="route-layer" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          ${routes}
        </svg>
        ${nodes}
        <div class="district-label district-label--north">OPERATIONS</div>
        <div class="district-label district-label--east">CIVIC CORE</div>
        <div class="district-label district-label--south">MEMORY + SIGNALS</div>
      </div>
      <div class="map-legend" aria-label="Route legend">
        <span><i class="legend-line legend-line--resource"></i>Resource</span>
        <span><i class="legend-line legend-line--handoff"></i>Handoff</span>
        <span><i class="legend-line legend-line--evidence"></i>Evidence</span>
        <span><i class="legend-line legend-line--oversight"></i>Oversight</span>
      </div>
    </div>`;
}

function renderMetrics(): string {
  return METRICS.map(
    (metric) => `
      <article class="ledger-card" data-searchable="${metric.name} ${metric.meaning} ${metric.signal}">
        <div class="ledger-card__topline">
          <span class="signal signal--${metric.signal}">${metric.signal}</span>
          <span class="mono">${metric.unit}</span>
        </div>
        <h3>${metric.name}</h3>
        <p>${metric.meaning}</p>
      </article>`,
  ).join("");
}

function renderOntology(): string {
  return ONTOLOGY.map(
    (entry) => `
      <tr data-searchable="${entry.cityElement} ${entry.systemAnalogue} ${entry.category}">
        <td><span class="ontology-dot ontology-dot--${entry.category}" aria-hidden="true"></span>${entry.cityElement}</td>
        <td>${entry.systemAnalogue}</td>
        <td><span class="table-tag">${entry.category}</span></td>
      </tr>`,
  ).join("");
}

function renderVariables(): string {
  return VARIABLES.map(
    (variable) => `
      <tr data-searchable="${variable.symbol} ${variable.meaning} ${variable.model}">
        <td class="formula-cell">${variable.symbol}</td>
        <td>${variable.meaning}</td>
        <td>${variable.model}</td>
        <td class="mono">${variable.constraint}</td>
      </tr>`,
  ).join("");
}

function renderEvaluationContract(): string {
  return EVALUATION_FIELDS.map(
    (field, index) => `
      <li>
        <span class="contract-index">${String(index + 1).padStart(2, "0")}</span>
        <span><strong>${field.name}</strong>${field.description}</span>
      </li>`,
  ).join("");
}

function renderGates(): string {
  return VALIDATION_GATES.map(
    (gate) => `
      <li class="gate gate--${gate.status}">
        <span class="gate__number">${String(gate.gate).padStart(2, "0")}</span>
        <span class="gate__content"><strong>${gate.name}</strong><small>${gate.output}</small></span>
        <span class="gate__status">${gate.status}</span>
      </li>`,
  ).join("");
}

function slider(
  id: string,
  label: string,
  symbol: string,
  min: number,
  max: number,
  step: number,
  value: number,
  suffix = "",
): string {
  return `
    <label class="control" for="${id}">
      <span><b>${symbol}</b>${label}</span>
      <output for="${id}" id="${id}-value">${value}${suffix}</output>
      <input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-suffix="${suffix}" />
    </label>`;
}

function renderModelLab(): string {
  return `
    <div class="model-selector" role="tablist" aria-label="Economic models">
      <button role="tab" aria-selected="true" data-model-target="congestion">01 <span>Congestion</span></button>
      <button role="tab" aria-selected="false" data-model-target="bem">02 <span>BEM</span></button>
      <button role="tab" aria-selected="false" data-model-target="leverage">03 <span>Leverage</span></button>
      <button role="tab" aria-selected="false" data-model-target="autonomy">04 <span>Autonomy</span></button>
      <button role="tab" aria-selected="false" data-model-target="context">05 <span>Context</span></button>
    </div>

    <article class="model-workbench" data-model-panel="congestion">
      <header>
        <div><span class="eyebrow">Model 01 · Shared substrate</span><h2>Congestion externality</h2></div>
        <div class="formula">TCₛ(q) = q · cₛ(q)<br />MECₛ(q) = q · c′ₛ(q)</div>
      </header>
      <p class="model-intro">One additional request can impose delay, contention, or verification work on every other user of a shared substrate.</p>
      <div class="workbench-grid">
        <div class="controls">
          ${slider("congestion-q", "Concurrent requests", "q", 1, 100, 1, 38)}
          ${slider("congestion-base", "Uncongested average cost", "α", 0, 10, 0.1, 1.2)}
          ${slider("congestion-slope", "Congestion slope", "β", 0.001, 0.05, 0.001, 0.012)}
          ${slider("congestion-elasticity", "Cost elasticity", "γ", 1, 2.5, 0.1, 1.4)}
        </div>
        <div class="result-panel">
          <span class="result-panel__label">Marginal external cost</span>
          <strong id="congestion-result">—</strong>
          <dl><div><dt>Average cost cₛ(q)</dt><dd id="congestion-average">—</dd></div><div><dt>Total cost TCₛ(q)</dt><dd id="congestion-total">—</dd></div></dl>
          <p>Demo parameterization: cₛ(q) = α + βqᵞ. The canonical model does not prescribe a functional form.</p>
        </div>
      </div>
    </article>

    <article class="model-workbench" data-model-panel="bem" hidden>
      <header>
        <div><span class="eyebrow">Model 02 · Downstream consequences</span><h2>Behavioral Externality Multiplier</h2></div>
        <div class="formula">BEMᵢ,ₕ = Dᵢ,ₕ / Iᵢ</div>
      </header>
      <p class="model-intro">A cheap action can be behaviorally expensive after review, correction, cleanup, coordination, and trust repair.</p>
      <div class="workbench-grid">
        <div class="controls">
          ${slider("bem-initial", "Initial execution cost ($)", "Iᵢ", 0.01, 2, 0.01, 0.08)}
          ${slider("bem-downstream", "Attributed downstream cost ($)", "Dᵢ,ₕ", 0, 100, 1, 24)}
        </div>
        <div class="result-panel">
          <span class="result-panel__label">Externality multiplier</span>
          <strong id="bem-result">—</strong>
          <p>Always report the ratio with absolute cost, horizon H, and attribution method. Tiny denominators can create misleadingly large ratios.</p>
        </div>
      </div>
    </article>

    <article class="model-workbench" data-model-panel="leverage" hidden>
      <header>
        <div><span class="eyebrow">Model 03 · Verified productivity</span><h2>Agentic leverage</h2></div>
        <div class="formula">ALₕ = V✓ₕ / ΣC</div>
      </header>
      <p class="model-intro">Output volume is not value. This ratio includes every declared friction channel and counts only verified value.</p>
      <div class="workbench-grid">
        <div class="controls controls--dense">
          ${slider("leverage-value", "Verified value", "V✓ₕ", 0, 300, 1, 145)}
          ${slider("leverage-exec", "Execution", "Cexec", 0, 50, 1, 10)}
          ${slider("leverage-coord", "Coordination", "Ccoord", 0, 50, 1, 12)}
          ${slider("leverage-context", "Context", "Cctx", 0, 50, 1, 8)}
          ${slider("leverage-verify", "Verification", "Cverify", 0, 50, 1, 22)}
          ${slider("leverage-rework", "Rework", "Crework", 0, 50, 1, 16)}
          ${slider("leverage-risk", "Risk mitigation", "Crisk", 0, 50, 1, 7)}
        </div>
        <div class="result-panel">
          <span class="result-panel__label">Verified value / total friction</span>
          <strong id="leverage-result">—</strong>
          <dl><div><dt>Total declared cost</dt><dd id="leverage-cost">—</dd></div></dl>
          <p>Numerator and denominator need a commensurable valuation basis; channels must not be double-counted.</p>
        </div>
      </div>
    </article>

    <article class="model-workbench" data-model-panel="autonomy" hidden>
      <header>
        <div><span class="eyebrow">Model 04 · Delegated authority</span><h2>Risk-adjusted autonomy</h2></div>
        <div class="formula">A*ᵢ = min(1, KᵢTᵢRᵢ / (Xᵢ + ε))</div>
      </header>
      <p class="model-intro">Capability alone does not determine authority. Trust, reliability, reversibility, and downstream risk bound autonomy.</p>
      <div class="workbench-grid">
        <div class="controls">
          ${slider("autonomy-capability", "Capability", "Kᵢ", 0, 1, 0.01, 0.84)}
          ${slider("autonomy-trust", "Trust", "Tᵢ", 0, 1, 0.01, 0.78)}
          ${slider("autonomy-reliability", "Reliability", "Rᵢ", 0, 1, 0.01, 0.91)}
          ${slider("autonomy-risk", "Externality risk", "Xᵢ", 0, 1, 0.01, 0.42)}
        </div>
        <div class="result-panel">
          <span class="result-panel__label">Candidate autonomy ceiling</span>
          <strong id="autonomy-result">—</strong>
          <div class="zone-readout"><span id="autonomy-zone">—</span><i id="autonomy-meter"></i></div>
          <p>This is a policy heuristic, not automatic authorization. Hard permissions and human-approved policy remain authoritative.</p>
        </div>
      </div>
    </article>

    <article class="model-workbench" data-model-panel="context" hidden>
      <header>
        <div><span class="eyebrow">Model 05 · Cognitive land</span><h2>Context allocation</h2></div>
        <div class="formula">max Σxⱼ(uⱼ − nⱼ)<br />s.t. Σxⱼsⱼ ≤ K</div>
      </header>
      <p class="model-intro">Place high-value evidence close to active attention; exclude, compress, archive, or quarantine low-value and risky material.</p>
      <div class="workbench-grid">
        <div class="controls">
          ${slider("context-capacity", "Available context capacity", "K", 5, 30, 1, 18, "u")}
          <div class="context-inventory" aria-label="Candidate context items">
            <span><b>Policy</b> u=9 · n=1 · s=6</span>
            <span><b>Task evidence</b> u=12 · n=1 · s=8</span>
            <span><b>Prior result</b> u=8 · n=2 · s=5</span>
            <span><b>Raw transcript</b> u=5 · n=4 · s=9</span>
            <span><b>Stale memo</b> u=3 · n=5 · s=4</span>
          </div>
        </div>
        <div class="result-panel">
          <span class="result-panel__label">Optimal net utility</span>
          <strong id="context-result">—</strong>
          <dl><div><dt>Capacity used</dt><dd id="context-used">—</dd></div></dl>
          <div id="context-selected" class="selected-context" aria-live="polite"></div>
        </div>
      </div>
    </article>`;
}

export function pageTemplate(): string {
  const initialNode = CITY_NODES[0];
  if (!initialNode) throw new Error("The city map requires at least one node.");

  return `
    <header class="site-header">
      <a class="brand" href="#overview" aria-label="AI Cities home">
        <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>AI CITIES<small>Systems Observatory</small></span>
      </a>
      <nav class="primary-nav" aria-label="Primary navigation">
        <button type="button" data-view-target="overview" aria-selected="true">City map</button>
        <button type="button" data-view-target="models" aria-selected="false">Model lab</button>
        <button type="button" data-view-target="evidence" aria-selected="false">Evidence ledger</button>
      </nav>
      <a class="github-link" href="https://github.com/cipherholdingsllc/ai-cities" target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
    </header>

    <main id="main-content">
      <section class="view" data-view="overview" id="overview">
        <div class="hero">
          <div class="hero-copy">
            <div class="status-line"><span class="live-dot"></span>Read-only research interface <span>·</span> Synthetic demonstration data</div>
            <h1>See the costs your<br />agents leave <em>behind.</em></h1>
            <p>AI systems are becoming environments, not tools. AI Cities applies urban economics to the congestion, externalities, scarce context, memory, and governance inside shared agentic systems.</p>
            <div class="hero-actions">
              <button class="button button--primary" type="button" data-jump-view="models">Open model lab <span aria-hidden="true">→</span></button>
              <a class="button button--secondary" href="https://github.com/cipherholdingsllc/ai-cities/blob/main/docs/05-canonical-origin-evolution-and-roadmap.md" target="_blank" rel="noreferrer">Read the research</a>
            </div>
          </div>
          <div class="hero-statements" aria-label="Framework principles">
            <span>01</span><p>Local actions create system-level consequences.</p>
            <span>02</span><p>Execution cost is not total cost.</p>
            <span>03</span><p>The city must tell the truth before it looks beautiful.</p>
          </div>
        </div>

        <div class="metric-strip" aria-label="Synthetic model snapshot">
          <article><span>Behavioral externality</span><strong data-top-metric="bem">300×</strong><small>downstream / initial cost</small></article>
          <article><span>Agentic leverage</span><strong data-top-metric="leverage">1.93</strong><small>verified value / friction</small></article>
          <article><span>Autonomy ceiling</span><strong data-top-metric="autonomy">1.00</strong><small>candidate policy heuristic</small></article>
          <article><span>Evidence state</span><strong>0 / 9</strong><small>gates empirically passed</small></article>
        </div>

        <section class="observatory" aria-labelledby="map-title">
          <header class="section-header">
            <div><span class="eyebrow">Bounded city ontology</span><h2 id="map-title">Operating environment</h2></div>
            <p>Explore a public-safe, conceptual map. Every symbol discloses its source, truth state, and confidence.</p>
          </header>
          <div class="observatory-grid">
            ${renderMap()}
            <aside class="node-inspector" aria-live="polite">
              <div class="inspector-topline"><span id="node-layer">${LAYER_LABELS[initialNode.layer]}</span><span id="node-confidence">${Math.round(initialNode.confidence * 100)}% confidence</span></div>
              <span class="truth-badge truth-badge--${initialNode.truthState}" id="node-truth">${TRUTH_LABELS[initialNode.truthState]}</span>
              <h3 id="node-name">${initialNode.name}</h3>
              <p class="node-metaphor" id="node-metaphor">${initialNode.civicMetaphor} <span aria-hidden="true">→</span> ${initialNode.systemAnalogue}</p>
              <p id="node-description">${initialNode.description}</p>
              <dl>
                <div><dt>Autonomy zone</dt><dd id="node-zone">${initialNode.zone}</dd></div>
                <div><dt>Evidence</dt><dd id="node-evidence">${initialNode.evidence}</dd></div>
                <div><dt>Freshness</dt><dd id="node-freshness">${initialNode.freshness}</dd></div>
              </dl>
              <p class="inspector-note">Conceptual map only. No live operating data is represented.</p>
            </aside>
          </div>
        </section>
      </section>

      <section class="view" data-view="models" id="models" hidden>
        <div class="page-intro">
          <span class="eyebrow">Interactive mathematical spine</span>
          <h1>Five models.<br /><em>One accountable system.</em></h1>
          <p>Change the inputs and inspect the consequences. Calculations are deterministic and client-side; values are illustrative, not empirical findings.</p>
        </div>
        ${renderModelLab()}
        <aside class="method-note">
          <span>Method note</span>
          <p>These models are working formalizations, not settled laws. Serious use requires declared units, observable proxies, uncertainty, an evaluation boundary, and a falsification condition.</p>
        </aside>
      </section>

      <section class="view" data-view="evidence" id="evidence" hidden>
        <div class="page-intro page-intro--ledger">
          <div><span class="eyebrow">Source, assumption, limit, truth state</span><h1>Evidence before<br /><em>architecture.</em></h1></div>
          <label class="search-field" for="ledger-search"><span>Search the framework</span><input id="ledger-search" type="search" placeholder="Try “routing”, “risk”, or “Kᵢ”" /></label>
        </div>

        <section class="ledger-section" aria-labelledby="metrics-title">
          <header class="section-header"><div><span class="eyebrow">Baseline profile</span><h2 id="metrics-title">What the city measures</h2></div><p>Metrics remain a profile until weighting, coverage, incentives, and failure behavior are validated.</p></header>
          <div class="ledger-grid">${renderMetrics()}</div>
        </section>

        <section class="ledger-section split-section" aria-labelledby="contract-title">
          <div><span class="eyebrow">Econometric discipline</span><h2 id="contract-title">Evaluation contract</h2><p class="section-copy">Dashboard correlations do not establish causation. Externalities create spillovers, so assignment and comparison need to account for interference.</p></div>
          <ol class="contract-list">${renderEvaluationContract()}</ol>
        </section>

        <section class="ledger-section" aria-labelledby="variables-title">
          <header class="section-header"><div><span class="eyebrow">Complete variable dictionary</span><h2 id="variables-title">Mathematical register</h2></div><p>Every symbol currently used across the five canonical models, with its interpretation and constraint.</p></header>
          <div class="table-wrap"><table><thead><tr><th>Symbol</th><th>Meaning</th><th>Model</th><th>Constraint</th></tr></thead><tbody>${renderVariables()}</tbody></table></div>
        </section>

        <section class="ledger-section" aria-labelledby="ontology-title">
          <header class="section-header"><div><span class="eyebrow">All bounded metaphors</span><h2 id="ontology-title">City ↔ system ontology</h2></div><p>The metaphor is a design aid. Humans remain accountable; software actors receive delegated authority.</p></header>
          <div class="table-wrap"><table><thead><tr><th>City element</th><th>AI-system analogue</th><th>Class</th></tr></thead><tbody>${renderOntology()}</tbody></table></div>
        </section>

        <section class="ledger-section" aria-labelledby="gates-title">
          <header class="section-header"><div><span class="eyebrow">Observation before control</span><h2 id="gates-title">Validation gates</h2></div><p>This GUI demonstrates interface architecture. It does not claim that private telemetry, intervention, or validation gates have passed.</p></header>
          <ol class="gate-list">${renderGates()}</ol>
        </section>
        <p class="empty-state" id="search-empty" hidden>No framework entries match that search.</p>
      </section>
    </main>

    <footer class="site-footer">
      <div class="brand brand--footer"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>AI CITIES<small>Urban economics for agentic AI infrastructure</small></span></div>
      <p>Framework v0.1.0 · Interface preview · MIT License</p>
      <p>Built for falsifiable research, not decorative certainty.</p>
    </footer>`;
}

export { LAYER_LABELS, TRUTH_LABELS };
