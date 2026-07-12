# AI Cities: Canonical Origin, Evolution, and Roadmap

> AI systems are becoming environments, not tools; environments need civic architecture.

- **Document status:** Canonical working draft
- **Document version:** 0.2-draft; this is not an AI Cities framework release
- **Date:** July 12, 2026
- **Repository baseline:** AI Cities v0.1.0 at [commit `7332fd0`](https://github.com/cipherholdingsllc/ai-cities/commit/7332fd07fd8a398bc9f68635bba04e20d0d32f02)
- **Scope:** Public-safe synthesis of the framework's origin, current public canon, proposed research extensions, private validation strategy, and long-range product direction.

This document deliberately separates four truth states:

| Status | Meaning |
| --- | --- |
| **Current public canon** | Already defined by the v0.1.0 repository baseline. |
| **Working extension** | New doctrine introduced by this document for further review. |
| **Proposed experiment** | A testable implementation or validation direction, not a measured result. |
| **Long-range concept** | Product or interface direction gated on earlier evidence. |

Nothing labeled as a working extension, proposed experiment, or long-range concept should be read as an implemented capability, empirical result, or release commitment.

## 1. Executive Summary

AI Cities began with a question from urban economics:

> What if shared agentic AI systems are better understood as environments with congestion, externalities, scarce resources, public goods, records, zoning, and governance?

Earlier AI products were mostly discrete tools. A user asked a question, received an answer, and decided what happened next. Agentic systems increasingly route work, call tools, write persistent memory, coordinate across workflows, consume scarce context and human attention, modify shared environments, and influence downstream decisions.

That changes the design problem. The question is no longer only whether an output was good. It is also:

> What happened to the wider system because this action occurred?

The current public framework answers that question with a tool-to-environment thesis, five initial mathematical models, risk zoning, memory records and maps, and the VIGIL civic-safeguard loop. It remains a public design framework, not an implementation or simulator. See the [README](../README.md), [thesis](00-thesis.md), [concept map](01-concept-map.md), and [limitations](04-limitations.md).

This document introduces a separate validation direction: use a private operating environment as a living lab, instrument it before changing it, test governance interventions, and allow an evidence-backed visual representation to emerge from measured state. The city must tell the truth before it looks beautiful.

## 2. Naming and System Hierarchy

| Name | Canonical role | Status |
| --- | --- | --- |
| **Behavioral Intelligence** | Proposed publishing and research umbrella for AI, incentives, cognitive systems, behavior, and measurable downstream consequences. | Working extension |
| **AI Cities** | Public, math-first design and research framework for externalities in shared agentic environments. | Current public canon |
| **CipherOS** | Proposed private reference environment for testing selected AI Cities hypotheses against real work. It is separate from the public framework. | Proposed experiment |
| **Cipher City** | Proposed read-only, evidence-backed representation of a measured operating environment. | Long-range concept |
| **Governor's Office** | Proposed operator surface for reviewing system health, evidence, budgets, risks, and human-approved interventions. | Long-range concept |
| **Executive View** | Possible future high-level visual client for observing and planning against the same evidence layer. | Long-range concept |
| **Federation layer** | Possible coordination model for multiple independently governed AI environments; already listed as a future direction in the public roadmap. | Long-range concept |

The hierarchy is intentionally simple:

**Behavioral Intelligence** is the proposed intellectual umbrella. **AI Cities** is the public framework. **CipherOS** is a proposed private validation lane. **Cipher City** and the **Governor's Office** are possible clients of validated telemetry, never the source of truth.

## 3. Origin and Evolution

### 3.1 Origin

This origin account is supplied by the author and is not itself a result of the repository's models.

Nate Liu Roberts traces the idea to his study of urban economics at UC Berkeley. Urban economics was compelling because it used mathematical models to reason about messy human systems: traffic, pollution, land scarcity, prices, public goods, congestion, zoning, incentives, and externalities.

The triggering observation was that modern AI systems increasingly display related structural properties. As agents, tools, memory, APIs, humans, permissions, incentives, and verification systems share infrastructure, individual actions can create consequences for everyone else using the environment.

That observation produced the public thesis, "AI is not just a tool. It is becoming a city," and the essay [*AI Systems Are Becoming Digital Cities*](https://nateliuroberts.substack.com/p/ai-systems-are-becoming-digital-cities). The claim is not that AI systems are literally cities. The claim is that urban economics offers useful primitives for reasoning about shared AI environments.

### 3.2 Evolution of the thesis

1. **Tool to environment — current public canon.** Persistent agents, memory, permissions, workflows, and downstream effects turn isolated interactions into shared operating environments.
2. **Externalities — current public canon.** Cheap local actions can create expensive review, correction, coordination, memory, safety, and trust costs elsewhere in the system.
3. **Mathematical spine — current public canon.** Congestion Externality, Behavioral Externality Multiplier, Agentic Leverage, Risk-Adjusted Autonomy, and Context Allocation make assumptions visible and generate testable questions.
4. **Architecture, substrate, and governance — working extension.** The visible workflow, its shared resource base, and its governance controls should be analyzed separately because failures can appear in one layer while accumulating in another.
5. **Memory urbanism — working extension.** Persistent artifacts need addresses, provenance, retrieval paths, ownership, maintenance, and lifecycle policy. Low connectivity is a classification question, not automatic proof of bloat.
6. **Econometric validation — proposed experiment.** Causal and quasi-experimental methods may help estimate whether observed effects are attributable and whether interventions create enough benefit to justify their cost.
7. **Private living lab — proposed experiment.** A real operating environment can supply baseline observations and intervention data without turning the public repository into a production implementation.
8. **Evidence-backed city — long-range concept.** A visual digital twin becomes useful only after its symbols map to observable, governed, and sufficiently accurate evidence.

## 4. Current Thesis and Working Extensions

AI Cities rests on eight principles. Principles 1–5 synthesize current public canon. Principles 6–8 are working extensions built from the current memory, safeguard, and limitations material.

1. **Agentic AI systems are becoming shared environments.** They increasingly contain multiple actors, persistent memory, tools, permissions, workflows, and downstream effects.
2. **Local actions can create system-level consequences.** An output, memory write, tool call, or autonomous action can impose costs on the wider environment.
3. **Execution cost is not total cost.** Total cost may include execution, coordination, context, verification, rework, risk, memory cleanup, and trust repair.
4. **Context behaves like scarce cognitive land.** Context windows, memory, compute, permissions, attention, and human review capacity require allocation.
5. **Autonomy should be zoned by externality risk.** Capability alone should not determine authority. Trust, reliability, reversibility, sensitivity, and downstream impact matter.
6. **Memory requires civic infrastructure.** Persistent knowledge needs stable identifiers, provenance, maps, ownership, maintenance, access controls, and cleanup policies.
7. **Governance should be measurable and adaptive.** Verification, approval, quarantine, rollback, and oversight should respond to observed system behavior while accounting for their own cost.
8. **The framework must remain falsifiable.** A model is useful only where its proposed dynamics can be observed, compared, challenged, or rejected.

## 5. Bounded City Ontology

The ontology is a design aid, not a claim of literal equivalence.

| City element | AI-system analogue |
| --- | --- |
| Federation | Enterprise or portfolio of separately governed environments |
| Region or state | Business line, subsidiary, geography, or regulated boundary |
| City | Major AI operating environment, department, or business unit |
| District | Project, workflow family, function, or risk domain |
| Building | Artifact, workflow, agent, memory cluster, repository, or service |
| Parcel | Smallest governed unit of memory, action, data, or ownership |
| Software actor | AI agent or service acting under delegated permissions |
| Human owner | Accountable person who sets objectives, grants authority, and owns consequences |
| Company | Coordinated group of humans, agents, tools, and workflows producing value |
| Roads and transit | APIs, links, queues, dependencies, handoffs, and retrieval paths |
| Address | Stable identifier, path, owner, and metadata |
| Zoning | Permission boundary and autonomy level |
| Utilities | Compute, data, context, search, identity, and permissions |
| Public records | Receipts, logs, provenance, decisions, and audit trails |
| City hall | Canonical policies, schemas, and governance records |
| Inspectors | Tests, evaluations, reviewers, and source checks |
| Traffic controls | Rate limits, approval gates, throttles, and stop conditions |
| Pollution | Hallucinations, stale context, conflicting memory, misinformation, and low-quality output |
| Congestion | Queue pressure, latency, coordination overload, and verification bottlenecks |
| Blight | Abandoned, duplicated, stale, or untrusted artifacts |
| Emergency services | Rollback, quarantine, escalation, incident response, and restoration |
| Budget | Tokens, compute, storage, human attention, time, and risk capacity |
| Quality of life | Trust, usability, reliability, cognitive burden, and operator confidence |

Humans and software agents are not interchangeable citizens. Software actors receive delegated authority; human owners remain accountable. The metaphor must never erase that distinction.

### Risk-zone vocabulary

The current public framework defines four autonomy zones: **Safe**, **Monitored**, **Restricted**, and **Quarantine**. See [Risk Zoning](../frameworks/risk-zoning.md).

Task or domain classes such as public, business-sensitive, healthcare, or regulatory are separate classification dimensions. They can inform placement into an autonomy zone, but they do not replace the canonical four-zone vocabulary.

## 6. Mathematical Spine

These models are working formalizations, not settled laws. Each requires defined units, an evaluation boundary, observable proxies, and uncertainty reporting.

### 6.1 Congestion Externality

```text
TC_s(q) = q · c_s(q)
MEC_s(q) = q · c'_s(q)
```

One additional agent, request, workflow, or tool call can impose latency, contention, verification load, or coordination burden on other users of a shared substrate. Under the model's average-cost convention, `MEC_s(q)` captures the incremental spillover component; broader applications should distinguish marginal social cost from marginal private cost explicitly.

Source: [Congestion Externality](../models/01-congestion-externality.md).

### 6.2 Behavioral Externality Multiplier

```text
BEM_{i,H} = D_{i,H} / I_i
```

Where `i` is the initial action, `H` is the evaluation horizon, `I_i > 0` is the initial execution cost, and `D_{i,H}` is the downstream cost attributed to that action over the horizon.

If an action costs $0.02 to execute and creates $20 of review, correction, cleanup, or coordination cost, then `BEM = 1,000`. The ratio should always be reported with the absolute downstream cost and attribution method; a large ratio alone can be misleading when the denominator is tiny.

Source: [Behavioral Externality Multiplier](../models/02-behavioral-externality-multiplier.md).

### 6.3 Agentic Leverage

```text
AL_H = V^✓_H /
       (C_exec + C_coord + C_ctx + C_verify + C_rework + C_risk)
```

Here `H` denotes the human-agent hybrid system. The model compares verified value with total system friction. Numerator and denominator must use a commensurable valuation basis, cost channels must not be double-counted, and output volume is not a substitute for verified value.

Source: [Agentic Leverage](../models/03-agentic-leverage.md).

### 6.4 Risk-Adjusted Autonomy

```text
A*_i = min(1, (K_i · T_i · R_i) / (X_i + ε))
```

The current model defines `K_i` as capability, `T_i` as trust, `R_i` as reliability, `X_i` as externality risk, and `ε` as a small positive constant. Inputs should be normalized and documented. Reversibility, sensitivity, and potential downstream harm belong inside a transparent composite definition of `X_i`; they are not separate variables in the current equation.

`A*_i` is a candidate policy heuristic, not a proven optimum or automatic authorization rule. Human-approved policy and hard permission boundaries remain authoritative.

Source: [Risk-Adjusted Autonomy](../models/04-risk-adjusted-autonomy.md).

### 6.5 Context Allocation

```text
maximize  Σ x_j(u_j - n_j)
subject to Σ x_j s_j ≤ K
           x_j ∈ {0,1}
```

High-value context should occupy scarce active attention. Low-value, stale, noisy, redundant, or risky context can be excluded, compressed, archived, quarantined, or placed farther from active reasoning. Relaxed or fractional variants should state their domain explicitly.

Source: [Context Allocation](../models/05-context-allocation.md).

## 7. Measurement and Falsifiability

### 7.1 Data-governance gate

Instrumentation begins only after defining:

- data minimization and purpose
- notice or consent where applicable
- access controls and ownership
- retention and deletion rules
- redaction and sensitive-content exclusions
- provenance and collection method
- threat model and incident path
- aggregate reporting boundaries

The default unit of measurement should be a system, workflow, or task class, not an employee ranking. Store identifiers and counts where possible rather than raw task content.

### 7.2 Baseline metric profile

Do not collapse these metrics into one city-health score until weighting, coverage, and failure behavior are validated.

| Metric | Initial meaning |
| --- | --- |
| Artifact inventory | Count of governed artifacts, repositories, memories, workflows, sources, and software actors. |
| Addressability gap | Important artifacts without a useful identifier, owner, metadata, or retrieval path. |
| Staleness | Time since modification, reference, verification, or continuing-relevance review. |
| Connectivity quality | Reliable retrieval paths, not raw link volume. |
| Evidence coverage | Share of material actions and decisions with durable provenance, observed result, and next state. |
| Verification burden | Human time and steps required to move from claimed to observed and verified. |
| Rework rate | Repair turns, reverted edits, duplicated work, and wrong-lane outputs. |
| Routing accuracy | Whether work reaches the intended model, agent, tool, repository, and sensitivity class. |
| Memory issue rate | Missing context, stale assumptions, conflicting records, and polluted retrieval. |
| Autonomy-zone distribution | Share of work in Safe, Monitored, Restricted, and Quarantine zones. |

Every metric needs a dictionary entry specifying its formula, owner, collection cadence, missing-data behavior, acceptable error, and known incentives for gaming.

### 7.3 Minimal task record

```text
date:
workstream_id:
task_class:
autonomy_zone:
artifact_ids:
initial_output_accepted: yes | no
repair_turns:
verification_steps:
rework_required: yes | no
memory_issue: yes | no
routing_issue: yes | no
evidence_record_created: yes | no
estimated_human_minutes:
estimated_compute_or_tool_cost:
notes_redacted:
```

### 7.4 Evaluation contract

Every serious model or intervention should state:

- unit of analysis
- treatment or policy change
- outcome variable and observable proxy
- evaluation horizon
- comparison or counterfactual
- confounders and contamination risks
- uncertainty and missing-data treatment
- falsification or rejection condition

Methods such as randomized tests, matched comparisons, panel analysis, event studies, difference-in-differences, regression discontinuity, or heterogeneous treatment analysis should be used only when their assumptions hold. Externalities create spillovers, so individual-level randomization may violate independence. Prefer workflow- or cluster-level assignment, explicit interference modeling, or another justified design when contamination is plausible.

Dashboard correlations alone do not establish causation.

## 8. Gate-Driven Validation and Implementation Roadmap

AI Cities remains the public framework. Any CipherOS work described below belongs to a separate private validation lane and does not change the public repo into an implementation.

| Gate | Output | Exit condition |
| --- | --- | --- |
| **0. Publication and data boundary** | Public/private classification, evidence register, data-governance policy, and threat model. | No unresolved sensitive-data or public-claim boundary. |
| **1. Ontology and schema** | Minimum definitions for environments, districts, artifacts, actors, routes, records, zones, incidents, and ownership. | Schema is versioned, testable, and maps to observable data. |
| **2. Baseline** | Snapshot of artifacts, memory, evidence coverage, verification, rework, routing, zones, and cost. | Coverage is measured and known gaps are disclosed. |
| **3. Instrumentation** | Read-only sensors for use, freshness, connectivity, verification, rework, cost, risk, retrieval, and provenance. | Collection accuracy and failure behavior are tested. |
| **4. Data-quality validation** | Coverage, freshness, accuracy, confidence, and missing-data report. | Thresholds for a truthful map are defined and met. |
| **5. Static map** | Simple two-dimensional, read-only representation of districts, artifacts, routes, isolation, risk zones, and metric profiles. | Every symbol exposes its source, freshness, coverage, confidence, and classification rationale. |
| **6. Drill-down** | Evidence view for owner, dependencies, observed health signals, current risk, and rationale. | A reviewer can trace each displayed claim to source evidence. |
| **7. Reversible intervention experiment** | Human-approved previews for adding provenance, connecting records, archiving, quarantining, rerouting, changing verification, or modifying permissions. | Approval, receipt, rollback, and recovery paths are tested before mutation. |
| **8. Comparative result** | Measurement of whether selected controls reduce downstream friction enough to justify their cost. | Assumptions, uncertainty, spillovers, and adverse effects are reported. |
| **9. Governor's Office** | Operator control surface built on validated observation and intervention contracts. | Read-only observability and at least one intervention class are proven useful. |
| **10. Federation and immersive clients** | Multiple-city coordination and optional higher-dimensional renderers. | One environment has stable ontology, trustworthy telemetry, and measured intervention value. |

### Observation before control

The first map is read-only. Deletion, quarantine, permission changes, rollback, and autonomy changes require a preview, explicit human approval, durable evidence, reversibility, and a tested recovery path. There should be no one-click destructive control from an unvalidated visualization.

### GUI quality gate

Once Gate 5 has truthful data, the interface should receive a separate high-intensity design and usability pass. Visual ambition is welcome at that point, but no polish may hide missing evidence, low coverage, stale data, or uncertain classification. Any two-dimensional, three-dimensional, or immersive renderer remains a replaceable client over telemetry, schemas, records, logs, and provenance.

## 9. Memory Urbanism

Memory urbanism is a working extension of the current [Memory Records and Maps](../frameworks/memory-records-and-maps.md) framework.

An isolated artifact is not automatically bloat. It may be a valid standalone record, preserved evidence, a latent asset awaiting connection, an important record with a broken retrieval path, stale or conflicting memory, duplicated generated material, or true bloat.

The governing principle is:

> Not every artifact needs to be downtown, but every important artifact needs an address, a zone, an owner, and at least one reliable road.

Candidate lifecycle actions are:

- **keep** a valid standalone record
- **connect** it to a reliable retrieval path
- **promote** it to canonical status through review
- **archive** stale but historically useful material
- **quarantine** conflicting or untrusted material
- **merge** duplicates while preserving provenance
- **delete** confirmed bloat only through an approved, reversible process

This extension should be tested against retrieval success, maintenance burden, conflict rate, and downstream rework rather than link count alone.

## 10. Product and Enterprise Direction

The possible product category is not knowledge visualization alone. It is **AI operations as urban management**: helping organizations observe, govern, measure, and improve shared AI operating environments.

Potential layers, in order of evidence dependence, are:

1. AI-system inventory
2. knowledge and memory health
3. agent and workflow observability
4. risk zoning and autonomy governance
5. externality, rework, and verification measurement
6. human-reviewed intervention planning
7. budget and scenario analysis
8. historical comparison and playback
9. multi-environment federation

The defensible system would be the ontology, telemetry, evidence, governance mechanisms, intervention history, and accumulated operational learning—not the city aesthetic.

### Multi-city hierarchy

```text
Enterprise / Federation
└── Region or regulated boundary
    └── City / operating environment
        └── District / workflow family
            └── Artifact / service / agent / memory cluster
```

Sensitive environments should remain isolated unless a governed federation contract explicitly permits coordination. Multi-city architecture follows successful validation of one city, not the other way around.

## 11. Public Research and Content Roadmap

### Published foundation

[*AI Systems Are Becoming Digital Cities*](https://nateliuroberts.substack.com/p/ai-systems-are-becoming-digital-cities) introduced the tool-to-environment thesis.

### Proposed follow-on pieces

1. **The Hidden Cost of Cheap AI Actions** — externalities, BEM, review burden, rework, trust cost, and memory pollution.
2. **Context Windows Are Digital Land** — scarcity, centrality, memory placement, allocation, and cognitive sprawl.
3. **Autonomy Needs Zoning** — permission boundaries, reversibility, human checkpoints, and dynamic oversight.
4. **The Architecture, the Substrate, and the Government** — visible workflows, shared resources, and civic safeguards.
5. **Memory Urbanism** — records, retrieval paths, stale memory, canonical institutions, and abandoned structures.
6. **Can Econometrics Measure an AI City?** — identification, treatment effects, measurement error, spillovers, and falsifiability.
7. **From Framework to Living City** — baseline measurement, private validation, evidence-backed visualization, and comparative results.

### Existing repository version roadmap

This document does not replace [ROADMAP.md](../ROADMAP.md):

- **v0.1, current:** five core models, four framework modules, examples, diagrams, and templates.
- **v0.2, Q3 2026:** Trust Decay, extended VIGIL with trust metrics, and additional financial and transportation examples.
- **v1.0, 2027:** simulation-framework integration, empirical validation studies, and framework-only implementation templates.
- **Future directions:** multi-city federation, cross-domain externality analysis, and regulatory-integration frameworks.

## 12. Status Ledger

| Layer | Status | Evidence or boundary |
| --- | --- | --- |
| Tool-to-environment thesis | Current public canon | [Thesis](00-thesis.md) |
| Urban-economics concept map | Current public canon | [Concept Map](01-concept-map.md) and [Sources](../SOURCES.md) |
| Five initial models | Current public canon | [`models/`](../models/) |
| Four autonomy zones | Current public canon | [Risk Zoning](../frameworks/risk-zoning.md) |
| Memory Records and Maps | Current public canon | [Memory framework](../frameworks/memory-records-and-maps.md) |
| VIGIL: Vet, Inspect, Gate, Isolate, Log | Current public canon | [Verification and Civic Safeguards](../frameworks/verification-and-civic-safeguards.md) |
| Architecture / substrate / governance split | Working extension | Introduced in this document |
| Memory urbanism and artifact lifecycle | Working extension | Introduced in this document |
| Econometric validation program | Proposed experiment | Method selected only when assumptions hold |
| CipherOS baseline instrumentation | Proposed experiment | Private lane; separate from the public framework |
| Cipher City read-only map | Long-range concept | Gated on data quality and traceability |
| Governor's Office | Long-range concept | Gated on validated observation and reversible intervention contracts |
| Multi-city federation | Long-range concept | Listed in the public roadmap; one-city-first sequencing is a working extension |
| Immersive executive client | Long-range concept | Replaceable renderer; never source of truth |

## 13. Non-Goals and Guardrails

AI Cities should not become:

- a literal claim that AI systems are cities
- a decorative metaphor with fabricated or opaque metrics
- a forced analogy for every technical problem
- a substitute for distributed-systems, security, economics, governance, or domain research
- a simulator or control plane built before trustworthy telemetry exists
- a public leak of private architecture, sensitive content, or operating data
- a claim of empirical proof before validation
- a system that blindly rewards maximum oversight
- a system that confuses surveillance with governance
- a ranking system for individual employees or teams
- a destructive action plane without explicit approval and recovery paths

Public language should favor civic safeguards, inspections, governance, risk management, and incident response. Every model, metric, and visual signal should disclose its source, assumptions, limits, and truth state.

## 14. Canonical Decisions

1. AI Cities remains the public framework and v0.1.0 remains the current framework-version baseline.
2. This document's 0.2-draft version does not advance the framework release number.
3. Behavioral Intelligence is a proposed publishing and research umbrella.
4. CipherOS is a proposed private validation lane, not the public product or implementation of this repository.
5. Instrumentation and data governance come before visualization.
6. Every city element must map to observable evidence before it appears as fact.
7. Isolated artifacts are classified before they are connected, archived, quarantined, merged, or deleted.
8. Architecture, substrate, and governance are separate but interacting analytical layers.
9. Econometrics is a candidate validation layer, not evidence by itself.
10. Governance should optimize risk-adjusted value and account for its own cost.
11. The framework must remain falsifiable.
12. The first map is read-only; control follows validated observation.
13. Human owners remain accountable for delegated software actors.
14. One truthful environment must be validated before federation.
15. Any immersive interface remains separate from the source of truth.
16. The city must tell the truth before it looks beautiful.

## 15. Final Statement

AI Cities began as a thought experiment from urban economics. The public repository turned that thought experiment into a bounded thesis, a five-model mathematical spine, and initial frameworks for zoning, memory, and civic safeguards.

The next step is not to declare a city built. It is to test whether the framework helps measure and improve a real shared AI environment without hiding uncertainty, leaking private context, or creating more governance cost than value.

Urban economics supplied the primitives. Careful measurement can supply the test. A private living lab may supply the evidence. Only then should a visual city supply the interface.

## Source Register

- [AI Cities README](../README.md)
- [Thesis: AI Systems as Environments](00-thesis.md)
- [Concept Map](01-concept-map.md)
- [Civic Agent Stack](03-civic-agent-stack.md)
- [Limitations](04-limitations.md)
- [Congestion Externality](../models/01-congestion-externality.md)
- [Behavioral Externality Multiplier](../models/02-behavioral-externality-multiplier.md)
- [Agentic Leverage](../models/03-agentic-leverage.md)
- [Risk-Adjusted Autonomy](../models/04-risk-adjusted-autonomy.md)
- [Context Allocation](../models/05-context-allocation.md)
- [Risk Zoning](../frameworks/risk-zoning.md)
- [Memory Records and Maps](../frameworks/memory-records-and-maps.md)
- [Verification and Civic Safeguards](../frameworks/verification-and-civic-safeguards.md)
- [Roadmap](../ROADMAP.md)
- [Sources](../SOURCES.md)
