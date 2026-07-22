# Security Policy

## Reporting a vulnerability

Use the repository’s private **Security → Report a vulnerability** flow on GitHub. Do not open a public issue containing exploit details, sensitive data, credentials, or private system information.

Include the affected version or commit, reproduction steps, likely impact, and any safe mitigation you have identified. Maintainers will acknowledge a complete report before discussing public disclosure.

## Security boundary

The interface is a static, client-side research explorer. It has no authentication, server-side data store, analytics pipeline, or live agent connection. Demonstration values are synthetic. Any future connection to operational data requires a separate threat model, data-governance review, access controls, retention policy, and tested incident path before implementation.
