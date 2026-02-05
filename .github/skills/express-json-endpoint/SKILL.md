---
name: express-json-endpoint
description: Use this skill when adding or modifying Express JSON endpoints. Keep routing minimal, validate input, and return consistent status codes and JSON.
---

When implementing an Express JSON endpoint:

- Keep endpoints minimal (prefer a single route over multiple routes when feasible).
- Always add `app.use(express.json())` before JSON routes.
- Validate required inputs early and return `400` with `{ error: string }`.
- Separate concerns lightly:
  - validate inputs
  - run core logic
  - return JSON
- Status codes:
  - `200` for success
  - `400` for invalid input
  - `500` for unexpected failures
- Error payload shape:
  - `{ error: "Human-readable message" }`
- Do not leak sensitive details to the client; log details server-side.

Output expectations:
- Provide the minimal code changes needed.
- Avoid introducing frameworks, databases, or extra layers unless asked.
