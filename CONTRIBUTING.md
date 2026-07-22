# Contributing to AI Cities

AI Cities is a public research framework and a read-only interface for exploring it. Contributions should make the framework more testable, legible, or technically sound without converting metaphor into unsupported fact.

## Before opening a pull request

1. Read the [thesis](docs/00-thesis.md), [limitations](docs/04-limitations.md), and [canonical roadmap](docs/05-canonical-origin-evolution-and-roadmap.md).
2. Keep current canon, working extensions, proposed experiments, and long-range concepts explicitly separated.
3. For model changes, define units, assumptions, observable proxies, uncertainty, and a falsification condition.
4. For interface changes, preserve keyboard access, visible focus, responsive layout, synthetic-data labels, and source traceability.
5. Run the full local gate:

   ```bash
   npm ci
   npm run check
   ```

## Engineering standards

- Prefer direct, typed functions over speculative abstractions.
- Keep calculations deterministic and test domain behavior rather than implementation details.
- Never place secrets, private operating data, employee-level rankings, or sensitive task content in this repository.
- Do not present a dashboard correlation as causal evidence.
- Update the relevant docs whenever a user-facing behavior, variable, or model interpretation changes.

## Scope

Good contributions include clearer model definitions, reproducible examples, uncertainty treatment, accessibility improvements, and small research tools. Production control planes, destructive actions, opaque health scores, and private infrastructure belong outside this public repository.
