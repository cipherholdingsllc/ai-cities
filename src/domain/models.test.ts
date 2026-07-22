import { describe, expect, it } from "vitest";
import {
  allocateContext,
  calculateAgenticLeverage,
  calculateBem,
  calculateCongestion,
  calculateRiskAdjustedAutonomy,
} from "./models";

describe("calculateCongestion", () => {
  it("keeps average, total, and external costs dimensionally distinct", () => {
    expect(calculateCongestion({ quantity: 10, baseCost: 1, slope: 0.01, elasticity: 1 })).toEqual({
      averageCost: 1.1,
      totalCost: 11,
      marginalExternalCost: 0.1,
    });
  });

  it("rejects an invalid functional form", () => {
    expect(() =>
      calculateCongestion({ quantity: 10, baseCost: 1, slope: 0.01, elasticity: 0 }),
    ).toThrow(RangeError);
  });
});

describe("calculateBem", () => {
  it("measures downstream amplification", () => {
    expect(calculateBem(0.02, 20)).toBe(1000);
  });

  it("rejects a zero denominator", () => {
    expect(() => calculateBem(0, 20)).toThrow(RangeError);
  });
});

describe("calculateAgenticLeverage", () => {
  it("includes every declared friction channel", () => {
    expect(
      calculateAgenticLeverage(100, {
        execution: 10,
        coordination: 10,
        context: 10,
        verification: 10,
        rework: 5,
        risk: 5,
      }),
    ).toBe(2);
  });

  it("rejects a cost-free denominator", () => {
    expect(() =>
      calculateAgenticLeverage(100, {
        execution: 0,
        coordination: 0,
        context: 0,
        verification: 0,
        rework: 0,
        risk: 0,
      }),
    ).toThrow(RangeError);
  });
});

describe("calculateRiskAdjustedAutonomy", () => {
  it("caps the candidate autonomy ceiling at one", () => {
    expect(
      calculateRiskAdjustedAutonomy({
        capability: 1,
        trust: 1,
        reliability: 1,
        externalityRisk: 0,
        epsilon: 0.01,
      }),
    ).toBe(1);
  });

  it("falls as externality risk increases", () => {
    const lowRisk = calculateRiskAdjustedAutonomy({
      capability: 0.8,
      trust: 0.8,
      reliability: 0.8,
      externalityRisk: 0.2,
      epsilon: 0.01,
    });
    const highRisk = calculateRiskAdjustedAutonomy({
      capability: 0.8,
      trust: 0.8,
      reliability: 0.8,
      externalityRisk: 0.8,
      epsilon: 0.01,
    });
    expect(highRisk).toBeLessThan(lowRisk);
  });
});

describe("allocateContext", () => {
  const items = [
    { id: "policy", utility: 9, externalityCost: 1, size: 6 },
    { id: "evidence", utility: 12, externalityCost: 1, size: 8 },
    { id: "history", utility: 8, externalityCost: 2, size: 5 },
    { id: "stale", utility: 3, externalityCost: 5, size: 4 },
  ] as const;

  it("finds the highest net-utility discrete allocation", () => {
    expect(allocateContext(items, 14)).toEqual({
      selectedIds: ["policy", "evidence"],
      usedCapacity: 14,
      netUtility: 19,
    });
  });

  it("does not allocate a negative-net-value item", () => {
    expect(allocateContext([items[3]], 4)).toEqual({
      selectedIds: [],
      usedCapacity: 0,
      netUtility: 0,
    });
  });
});
