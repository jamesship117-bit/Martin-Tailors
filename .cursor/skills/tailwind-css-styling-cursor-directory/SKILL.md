---
name: tailwind-css-styling-cursor-directory
description: Apply Tailwind CSS styling for cursor.directory-style UI with consistent utility patterns, responsive layouts, and accessible interaction states. Use when the user asks for Tailwind classes, UI polish, utility-first refactors, design consistency, or mentions cursor.directory styling.
---

# Tailwind CSS Styling (cursor.directory)

## When To Use This Skill

Use this skill when the user wants to:
- style or restyle UI using Tailwind utilities
- improve layout, spacing, and readability
- make components responsive across breakpoints
- standardize class patterns for maintainability
- add or improve hover, focus, and disabled states
- match a clean cursor.directory-like utility style

## Core Rules

1. Preserve behavior while changing styling.
2. Keep utilities composable and easy to move between components.
3. Stay mobile-first and add breakpoints only when necessary.
4. Include accessible interaction states for all interactive elements.
5. Prefer project tokens and semantic color classes over arbitrary values.

## Workflow

Copy and track this checklist:

```md
Tailwind Styling Progress
- [ ] Step 1: Inspect component structure and behavior states
- [ ] Step 2: Establish container, layout, and spacing baseline
- [ ] Step 3: Apply typography and visual hierarchy
- [ ] Step 4: Add responsive behavior and wrapping resilience
- [ ] Step 5: Add interaction and accessibility states
- [ ] Step 6: Refactor repeated class groups and verify
```

### Step 1: Inspect component structure and behavior states

- Identify semantic blocks (container, content, actions, metadata).
- Capture dynamic states before edits (loading, selected, disabled, error).

### Step 2: Establish container, layout, and spacing baseline

- Start with layout primitives (`flex`, `grid`, `gap-*`, `items-*`, `justify-*`).
- Set stable container bounds (`mx-auto`, `max-w-*`, `px-*`, `py-*`).
- Keep spacing on the Tailwind scale; avoid one-off jumps.

### Step 3: Apply typography and visual hierarchy

- Set clear type levels (`text-sm` to `text-lg`, `font-medium`/`font-semibold`).
- Use muted text and subtle surfaces for secondary details.
- Apply borders, background, and shadows only when they improve separation.

### Step 4: Add responsive behavior and wrapping resilience

- Build default mobile layout first.
- Add `sm`/`md`/`lg` variants only where layout truly changes.
- Ensure long text, tags, and action groups wrap gracefully.

### Step 5: Add interaction and accessibility states

- Use `focus-visible` styles for keyboard navigation.
- Add `hover:*` only to interactive elements.
- Keep disabled states explicit (`disabled:opacity-*`, `disabled:cursor-not-allowed`).

### Step 6: Refactor repeated class groups and verify

- Extract repeated utility groups into shared components/helpers when repeated.
- Keep class order readable by intent.
- Run lint/typecheck after substantial styling updates.

## Default Utility Order

For long class strings, prefer this order:
1. Layout and position
2. Sizing
3. Spacing
4. Typography
5. Visuals
6. Effects/transitions
7. State and responsive variants

## cursor.directory Styling Notes

- Prefer clean, low-entropy class strings over highly coupled combinations.
- Keep sections modular so generated snippets can be relocated easily.
- Use a small set of repeatable surface patterns rather than many near-duplicates.

## Response Format

When using this skill, report:
1. What styling changed and where
2. Why those utility decisions were made
3. Any follow-up for accessibility, token alignment, or visual QA

## Additional Resources

- For ready-to-use prompt examples, see [examples.md](examples.md).
