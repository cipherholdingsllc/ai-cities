import { describe, expect, it } from "vitest";
import { CITY_NODES, CITY_ROUTES, ONTOLOGY, VARIABLES } from "./city";

describe("city research data", () => {
  it("uses unique, stable node identifiers", () => {
    const identifiers = CITY_NODES.map((node) => node.id);
    expect(new Set(identifiers).size).toBe(identifiers.length);
  });

  it("does not contain orphaned routes", () => {
    const identifiers = new Set(CITY_NODES.map((node) => node.id));
    for (const route of CITY_ROUTES) {
      expect(identifiers.has(route.from), `missing route origin: ${route.from}`).toBe(true);
      expect(identifiers.has(route.to), `missing route destination: ${route.to}`).toBe(true);
    }
  });

  it("covers the complete bounded ontology and model variable register", () => {
    expect(ONTOLOGY).toHaveLength(23);
    expect(VARIABLES).toHaveLength(25);
    expect(new Set(ONTOLOGY.map((entry) => entry.cityElement))).toContain("Quality of life");
    expect(new Set(VARIABLES.map((entry) => entry.symbol))).toContain("Xᵢ");
  });
});
