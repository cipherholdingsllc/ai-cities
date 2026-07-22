export interface CongestionInput {
  quantity: number;
  baseCost: number;
  slope: number;
  elasticity: number;
}

export interface CongestionResult {
  averageCost: number;
  totalCost: number;
  marginalExternalCost: number;
}

export function calculateCongestion(input: CongestionInput): CongestionResult {
  const { quantity, baseCost, slope, elasticity } = input;
  if (quantity < 0 || baseCost < 0 || slope < 0 || elasticity <= 0) {
    throw new RangeError("Congestion inputs must be non-negative and elasticity must be positive.");
  }

  const averageCost = baseCost + slope * quantity ** elasticity;
  const derivative = slope * elasticity * quantity ** (elasticity - 1);

  return {
    averageCost,
    totalCost: quantity * averageCost,
    marginalExternalCost: quantity * derivative,
  };
}

export function calculateBem(initialCost: number, downstreamCost: number): number {
  if (initialCost <= 0 || downstreamCost < 0) {
    throw new RangeError("Initial cost must be positive and downstream cost cannot be negative.");
  }
  return downstreamCost / initialCost;
}

export interface LeverageCosts {
  execution: number;
  coordination: number;
  context: number;
  verification: number;
  rework: number;
  risk: number;
}

export function calculateAgenticLeverage(verifiedValue: number, costs: LeverageCosts): number {
  const costValues = Object.values(costs);
  if (verifiedValue < 0 || costValues.some((cost) => cost < 0)) {
    throw new RangeError("Value and cost channels cannot be negative.");
  }

  const totalCost = costValues.reduce((sum, cost) => sum + cost, 0);
  if (totalCost === 0) {
    throw new RangeError("At least one cost channel must be positive.");
  }
  return verifiedValue / totalCost;
}

export interface AutonomyInput {
  capability: number;
  trust: number;
  reliability: number;
  externalityRisk: number;
  epsilon: number;
}

export function calculateRiskAdjustedAutonomy(input: AutonomyInput): number {
  const { capability, trust, reliability, externalityRisk, epsilon } = input;
  const normalizedInputs = [capability, trust, reliability, externalityRisk];
  if (normalizedInputs.some((value) => value < 0 || value > 1) || epsilon <= 0) {
    throw new RangeError("Scores must be in [0, 1] and epsilon must be positive.");
  }

  return Math.min(1, (capability * trust * reliability) / (externalityRisk + epsilon));
}

export interface ContextItem {
  readonly id: string;
  readonly utility: number;
  readonly externalityCost: number;
  readonly size: number;
}

export interface ContextAllocationResult {
  readonly selectedIds: readonly string[];
  readonly usedCapacity: number;
  readonly netUtility: number;
}

export function allocateContext(
  items: readonly ContextItem[],
  capacity: number,
): ContextAllocationResult {
  if (!Number.isInteger(capacity) || capacity < 0) {
    throw new RangeError("Context capacity must be a non-negative integer.");
  }
  if (
    items.some(
      (item) =>
        !Number.isInteger(item.size) ||
        item.size <= 0 ||
        item.utility < 0 ||
        item.externalityCost < 0,
    )
  ) {
    throw new RangeError("Context items require positive integer sizes and non-negative values.");
  }

  const best: Array<{ value: number; ids: readonly string[] }> = Array.from(
    { length: capacity + 1 },
    () => ({ value: 0, ids: [] }),
  );

  for (const item of items) {
    const netValue = item.utility - item.externalityCost;
    for (let remaining = capacity; remaining >= item.size; remaining -= 1) {
      const previous = best[remaining - item.size];
      const current = best[remaining];
      if (!previous || !current) continue;
      const candidate = previous.value + netValue;
      if (candidate > current.value) {
        best[remaining] = { value: candidate, ids: [...previous.ids, item.id] };
      }
    }
  }

  const optimum = best.reduce((leader, candidate) =>
    candidate.value > leader.value ? candidate : leader,
  );
  const selected = new Set(optimum.ids);
  const usedCapacity = items
    .filter((item) => selected.has(item.id))
    .reduce((sum, item) => sum + item.size, 0);

  return {
    selectedIds: optimum.ids,
    usedCapacity,
    netUtility: optimum.value,
  };
}
