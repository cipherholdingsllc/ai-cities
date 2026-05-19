# Behavioral Externality Multiplier

Behavioral Externality Multiplier measures how much downstream cost an AI action creates relative to its initial execution cost.

## Source model

This model adapts externality logic from congestion and pollution models. In urban economics, private actions can impose costs that are paid by the broader system. BEM applies the same accounting logic to AI actions, where cheap execution can create expensive downstream review, rework, trust repair, or memory cleanup.

## Equation

```text
BEM_{i,H} = D_{i,H} / I_i
```

* i = initial AI action
* H = evaluation horizon
* I_i = initial execution cost of action i
* D_{i,H} = downstream cost attributable to action i over horizon H

## Intuition

Cheap AI actions can create expensive system consequences.

A generated answer, code edit, memory write, tool call, or recommendation may cost almost nothing to produce. But if it creates review burden, rework, polluted memory, user confusion, unsafe downstream action, or trust loss, the real cost is much larger than the initial execution cost.

BEM makes that amplification visible.

## Example

If an AI action costs $0.02 to execute but creates $20 of review, correction, and coordination cost:

BEM = 20 / 0.02 = 1,000

The action was computationally cheap but behaviorally expensive.

## Design implication

Systems should not optimize only for low execution cost or high output volume.

They should minimize high-BEM actions through:

- risk zoning
- verification gates
- memory write controls
- rollback paths
- human approval for high-impact actions

## Assumptions

BEM assumes downstream costs can be reasonably attributed to an initial action over a defined horizon.

It does not require perfect attribution, but it does require observable review, rework, correction, escalation, or trust-repair costs.

## Falsifiability

The model weakens if downstream costs cannot be attributed, measured, or meaningfully estimated.

It strengthens if high-BEM actions reliably predict review load, rework, incident rates, memory cleanup, or trust loss.

## Integration

Cognitive pollution is treated as a downstream cost channel inside D_{i,H} rather than as a standalone v0 model.
