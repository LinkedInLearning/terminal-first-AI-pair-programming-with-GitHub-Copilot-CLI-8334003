---
name: safe-git-exec
description: Use this skill when running git from Node.js. Avoid shell injection, use argument arrays, set timeouts, and surface helpful errors.
---

When running `git` from Node.js:

- Prefer `execFileSync`/`spawn` with an argument array (do not interpolate user input into a shell string).
- Treat any user-provided repo path as untrusted input.
- Normalize and validate paths before use:
  - resolve to an absolute real path
  - confirm it exists
  - confirm it is a git repo (handle `.git` being a file in worktrees)
- Use a delimiter-safe format for parsing git output.
  - Prefer `--pretty=format:%s\t%an` and split on `\t`.
- Set a reasonable timeout for git operations.
- Error handling:
  - log the underlying error server-side
  - return a clear, user-friendly error message to the caller
  - do not silently return empty results on command failure

Output expectations:
- Show the exact API you’re using (`execFileSync`/`spawn`) and the argument array.
- Keep changes minimal and aligned with the existing app structure.
