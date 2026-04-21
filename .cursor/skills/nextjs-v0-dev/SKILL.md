---
name: nextjs-v0-dev
description: Generates high-quality v0.dev prompts and integrates generated UI into Next.js apps using App Router, Tailwind, and shadcn/ui conventions. Use when the user mentions Next.js, v0, v0.dev, UI generation, App Router pages, component scaffolding, or converting v0 output into production-ready code.
---

# Next.js v0.dev Workflow

## When to Use

Use this skill when the task involves one or more of these:
- Creating or refining a v0.dev prompt for a new UI feature.
- Turning v0-generated code into production-ready Next.js code.
- Integrating generated components into an existing App Router project.
- Aligning generated UI with Tailwind and shadcn/ui patterns.

Do not use this skill for backend-only work with no UI/component scope.

## Default Workflow

Follow this sequence:

1. Define the target
   - Confirm page or component goal, data shape, and interaction states.
   - Identify the insertion point (route, layout segment, or reusable component path).

2. Draft a strong v0 prompt
   - Use the template in this file.
   - Specify constraints up front: App Router, TypeScript, accessibility, responsive behavior.

3. Evaluate v0 output before integration
   - Check component boundaries (`use client` only when needed).
   - Check assumptions about data fetching and API availability.
   - Check design consistency against project tokens/classes.

4. Integrate in small passes
   - Add or adapt components first.
   - Wire data and actions second.
   - Add loading, empty, and error states third.
   - Keep each pass easy to test.

5. Validate and polish
   - Run lint/type checks if available.
   - Verify keyboard navigation, labels, contrast, and mobile layout.
   - Ensure no generated placeholders remain in production paths.

## v0 Prompt Template

Use this template and fill all placeholders:

```markdown
Build a [page/component] for a Next.js App Router app.

Goal:
- [what the user should accomplish]

Tech and constraints:
- Next.js (App Router) + TypeScript
- Tailwind CSS for styling
- Use shadcn/ui primitives where appropriate
- Keep component boundaries explicit (Server Components by default; add `use client` only when interactive state/event handlers are needed)
- Accessible markup with proper labels, roles, and keyboard behavior
- Responsive layout for mobile and desktop

Data contract:
- Inputs: [list props or fetched fields]
- Actions: [create/update/delete or callbacks]
- States to handle: loading, empty, error, success

Output requirements:
- Return production-ready code (no placeholder lorem ipsum)
- Keep components modular and readable
- Include brief notes about where each file should live in an App Router project
```

## Integration Rules

- Preserve repository conventions first; adapt v0 output to local naming and folder structure.
- Never overwrite existing modules blindly; merge intentionally.
- Favor reusable components in `components/` when UI appears in multiple routes.
- Keep route-specific composition in `app/` segment files.
- Keep server/client boundaries deliberate:
  - Default to Server Components.
  - Add `use client` only for hooks, local state, browser-only APIs, or event-driven UI.
- Replace mock data with real typed interfaces as soon as integration starts.

## Quality Checklist

Before finishing, verify:

- [ ] TypeScript types are explicit for props and data models.
- [ ] Interactive controls are keyboard-usable and properly labeled.
- [ ] Mobile, tablet, and desktop layouts remain usable.
- [ ] Loading, empty, and error states are implemented.
- [ ] Styling matches existing Tailwind/shadcn patterns.
- [ ] No dead imports, unused state, or unreachable code remains.
- [ ] Generated text/content is intentional and domain-appropriate.

## Escalation Rules

Ask for clarification when any of these are missing:
- Design system choice or existing UI primitives.
- Required data contract (fields, nullability, pagination, sorting).
- Expected behavior for mutations and optimistic updates.
- Route placement when multiple App Router segments are plausible.

When unsure, propose one default path and one fallback.

## Additional Resources

- For advanced examples and App Router integration pitfalls, see [reference.md](reference.md).
