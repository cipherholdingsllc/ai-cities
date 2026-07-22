export type TruthState =
  | "current-canon"
  | "working-extension"
  | "proposed-experiment"
  | "long-range-concept";

export type RiskZone = "safe" | "monitored" | "restricted" | "quarantine";

export type CityLayer = "actors" | "substrate" | "governance" | "memory" | "signals";

export interface CityNode {
  readonly id: string;
  readonly name: string;
  readonly civicMetaphor: string;
  readonly systemAnalogue: string;
  readonly layer: CityLayer;
  readonly zone: RiskZone;
  readonly truthState: TruthState;
  readonly x: number;
  readonly y: number;
  readonly description: string;
  readonly evidence: string;
  readonly freshness: string;
  readonly confidence: number;
}

export type RouteKind = "handoff" | "resource" | "evidence" | "oversight";

export interface CityRoute {
  readonly from: string;
  readonly to: string;
  readonly kind: RouteKind;
}

export interface OntologyEntry {
  readonly cityElement: string;
  readonly systemAnalogue: string;
  readonly category: "hierarchy" | "actor" | "infrastructure" | "governance" | "condition";
}

export interface MetricDefinition {
  readonly name: string;
  readonly meaning: string;
  readonly signal: "efficiency" | "safety" | "equity" | "evidence";
  readonly unit: string;
}

export interface EvaluationField {
  readonly name: string;
  readonly description: string;
}

export interface ValidationGate {
  readonly gate: number;
  readonly name: string;
  readonly output: string;
  readonly status: "defined" | "future";
}

export interface VariableDefinition {
  readonly symbol: string;
  readonly meaning: string;
  readonly model: string;
  readonly constraint: string;
}
