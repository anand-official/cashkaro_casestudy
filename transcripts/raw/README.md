# Raw exports: drop-in location

Place verbatim exports here. Files in this folder are **not** published to the public site. They are bundled for the review panel as a private package.

Four records are outstanding. Each is listed in the [manifest](../README.md).

## Naming

Use `<model>-<yyyy-mm-dd>-<topic>.<ext>`, for example `chatgpt-2026-09-11-problem-framing.md`. Chronology matters more than completeness of formatting.

## How to export, by tool

| Tool | Route |
| --- | --- |
| ChatGPT | Settings → Data controls → Export data. The archive arrives by email and contains `conversations.json` plus an HTML rendering. Include both. |
| Claude | Settings → Privacy → Export data, or use the share link for a single conversation and save the page. |
| Gemini | Google Takeout → select "My Activity" → Gemini Apps. |
| DeepSeek / Qwen | No bulk export. Copy the full conversation to a Markdown file and note in the header that it is a manual copy. |
| Claude Code | Session transcripts are stored locally under `~/.claude/projects/`. Copy the relevant `.jsonl` files. |

## Rules for this folder

1. Do not edit turns. If something must be redacted, replace it with `[REDACTED: reason]` rather than deleting it silently.
2. Do not reconstruct a session from memory and file it here. Reconstructions belong in the manifest as tier C, labelled as such.
3. Note any attachments that were supplied to a model but are not included in the export.
4. Record the fingerprint of anything received as a paste: `sha256sum <file>`.
