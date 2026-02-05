---
name: vanilla-localstorage-preferences
description: Use this skill when adding simple user preferences in vanilla JS. Store settings in localStorage safely with defaults, validation, and a versioned key.
---

When implementing user preferences in vanilla JS with `localStorage`:

- Use a single, versioned storage key (do not scatter multiple keys).
  - Default: `standupGenerator.settings.v1`
- Store a small JSON object. Example shape:
  - `{ "rememberRepoPath": boolean, "repoPath": string }`
- Read path (on page load):
  - Wrap `JSON.parse` in `try/catch`.
  - If parsing fails or the shape is invalid, fall back to defaults.
  - Validate types:
    - `rememberRepoPath` must be boolean (default `false`).
    - `repoPath` must be a string (default empty string).
  - Trim `repoPath`.
- Write path:
  - Only persist `repoPath` when `rememberRepoPath` is true.
  - If the user disables remembering, clear the saved `repoPath` (or remove the key entirely).
- UX requirements:
  - Add a checkbox labeled “Remember this repo path”.
  - If a saved repoPath exists, prefill the input on load.
  - Refreshing the page should not wipe the repo path when remembering is enabled.
- Keep the implementation minimal:
  - No frameworks.
  - No backend changes unless explicitly requested.
  - Keep DOM updates small and readable.

Output expectations:
- Provide the smallest set of HTML/JS changes.
- Use clear function names like `loadSettings()` and `saveSettings()`.
- Do not store sensitive data in localStorage.
