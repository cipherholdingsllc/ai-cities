# Risk-Adjusted Autonomy

Balances agent autonomy with safety constraints.

## Source model

This model adapts governance logic from zoning, land-use controls, enforcement, and public safeguards. Cities do not grant every activity equal access to every location because some uses create larger externalities than others. In AI Cities, autonomy should depend on capability, trust, reversibility, and externality risk, not capability alone.

## Model

Autonomy level adjusted for risk factors.

A*_i = min(1, (K_i · T_i · R_i) / (X_i + ε))

Where:
- i: agent instance
- K_i: capability score
- T_i: trust score
- R_i: reliability score
- X_i: externality risk
- ε: small positive constant
- A*_i: adjusted autonomy (0-1)

## Interpretation

A*_i = 1: Full autonomy
A*_i < 1: Constrained autonomy
A*_i = 0: No autonomy

## Agentic Application

In AI cities:
- High-capability agents in low-risk zones get full autonomy
- Untrusted agents require oversight
- Externality-prone tasks reduce autonomy

## Healthcare Example

AI prescription agent: high capability (K=0.9), moderate trust (T=0.7), high reliability (R=0.8), significant externality risk (X=0.5). Autonomy = min(1, (0.9*0.7*0.8)/0.5) ≈ 1.0, but requires verification.

## Implementation

- Dynamic adjustment based on performance
- Zone-specific autonomy levels
- Human override mechanisms

## Safety Integration

Works with VIGIL framework for runtime enforcement.
