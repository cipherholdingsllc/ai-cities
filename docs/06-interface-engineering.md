# Interface and Engineering Notes

**Status:** Interface implementation note

**Framework impact:** None; AI Cities remains at public framework v0.1.0

## Purpose

The Systems Observatory makes the existing framework explorable without claiming that a live city, empirical baseline, or intervention system exists. It is a static, read-only client over checked-in public definitions and synthetic examples.

## Information architecture

- **City map:** a bounded operational view of actors, substrate, governance, memory, and system signals. Each node exposes its civic metaphor, system analogue, truth state, source, freshness label, and conceptual confidence.
- **Model lab:** deterministic implementations of the five canonical models. The congestion panel discloses its illustrative cost-function parameterization because the canonical model does not prescribe one.
- **Evidence ledger:** the complete bounded ontology, model-variable register, baseline metric profile, econometric evaluation contract, and validation gates.

## Code boundaries

| Surface | Responsibility |
| --- | --- |
| `src/domain/` | Pure model functions and shared types; no DOM access |
| `src/data/` | Public-safe research definitions and synthetic map data |
| `src/ui/` | Semantic markup and interaction controllers |
| `src/styles.css` | Design tokens, layout, responsive behavior, and focus states |

The app intentionally uses the browser platform and a small TypeScript build instead of a component framework. The current product has one route, no remote state, and limited local interaction; a framework would add runtime and dependency surface without improving the domain model.

## Trust and safety boundary

- No live telemetry, user data, network requests, storage, or mutation controls.
- No metric is presented as observed or empirically validated.
- No one-number “city health” score.
- Software actors receive delegated authority; humans remain accountable.
- The first validated map remains read-only. Intervention is gated on preview, approval, receipts, rollback, and recovery.

## Quality gate

`npm run check` formats and lints the repository, executes domain and data-integrity tests, type-checks strict TypeScript, and produces the release build. CI runs the same locked command on pull requests and `main`.
