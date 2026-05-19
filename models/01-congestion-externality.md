# Congestion Externality

Quantifies resource contention in agentic systems using urban economics congestion models.

## Source model

This model adapts freeway congestion logic from urban economics. In the urban model, one more driver can impose delay on other drivers, making marginal social cost higher than private commuting cost. In AI Cities, one more agent, tool call, prompt, or workflow can impose latency, contention, verification load, or coordination burden on the broader system.

## Model

In agentic ecosystems, shared resources (compute, memory, bandwidth) experience congestion as agent count increases.

Total Cost: TC_s(q) = q · c_s(q)

Where:
- q: agent quantity
- c_s(q): average cost per agent
- TC_s: total system cost

Marginal External Cost: MEC_s(q) = q · c'_s(q)

Where c'(q) is the derivative of c_s(q), representing incremental congestion cost.

## Interpretation

As q increases:
- c_s(q) rises due to queuing delays
- MEC_s(q) captures spillover costs to other agents
- Optimal q balances marginal benefits against congestion costs

## Agentic Application

In AI cities:
- Compute resources as urban roads
- Agent requests as traffic volume
- Congestion externalities reduce system efficiency

## Healthcare Example

Medical diagnosis agents sharing GPU clusters. As agent count grows, inference latency increases, delaying patient care. MEC quantifies this externality for optimal agent provisioning.

## Mitigation

- Resource zoning
- Pricing mechanisms
- Capacity planning

## Mathematical Properties

- MEC_s(q) ≥ 0 for increasing marginal costs
- Optimal q where marginal benefit = MEC_s(q)
