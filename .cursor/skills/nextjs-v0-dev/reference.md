# Next.js v0.dev Reference

## Advanced Prompt Examples

### 1) Landing Page Section

```markdown
Build a reusable marketing hero section for a Next.js App Router project.

Requirements:
- TypeScript + Tailwind CSS
- Use shadcn/ui Button for primary/secondary actions
- Include headline, supporting copy, CTA buttons, and trust badges
- Mobile-first responsive layout
- Accessible heading hierarchy and focus-visible states

Deliverables:
- `components/marketing/HeroSection.tsx`
- Example usage in `app/(marketing)/page.tsx`
```

### 2) Dashboard Widget

```markdown
Create a dashboard KPI widget grid for a Next.js App Router app.

Requirements:
- Cards for revenue, orders, conversion, and churn
- Optional sparkline area for each metric
- Support loading skeleton and empty fallback
- Keep cards reusable and data-driven via typed props
- No hardcoded API calls inside presentational widget component

Deliverables:
- `components/dashboard/KpiGrid.tsx`
- `components/dashboard/KpiCard.tsx`
- Usage example in `app/dashboard/page.tsx`
```

### 3) CRUD Form with Validation

```markdown
Generate a product form UI for Next.js App Router.

Requirements:
- Client component only where form interactivity is needed
- Use react-hook-form + zod schema validation
- Fields: name, SKU, price, status, description
- Inline errors and disabled submit while pending
- Success and error feedback messages

Deliverables:
- `components/products/ProductForm.tsx`
- `lib/validation/productSchema.ts`
- Integration snippet for create/edit flow
```

## App Router Integration Notes

- Keep data fetching in Server Components when possible.
- Pass serialized data into Client Components through typed props.
- Place route composition inside `app/**/page.tsx` and shared UI under `components/`.
- If server actions are used, keep action signatures explicit and typed.
- For API routes, keep handlers in `app/api/**/route.ts` and avoid calling internal routes from server components when direct data access is available.

## Styling Consistency

- Map generated spacing, typography, and color usage to existing Tailwind utility patterns.
- Replace ad hoc class combinations with project-standard primitives when available.
- Keep class names readable: structure -> spacing -> typography -> color -> state.
- Prefer existing shadcn/ui components over custom duplicates.

## Common Pitfalls and Fixes

### Hydration mismatch
- Cause: Non-deterministic render values or browser-only APIs in server-rendered paths.
- Fix: Move browser-dependent logic to a Client Component, guard with effects, and keep server output deterministic.

### Missing providers or layout wrappers
- Cause: Generated component expects theme/toast/query providers not present in route segment.
- Fix: Install required provider at the nearest shared layout level and verify children are wrapped once.

### Type drift between generated and project models
- Cause: v0 output assumes simplified field shapes.
- Fix: Align with domain types early; create adapter mappers where backend and UI contracts differ.

## Integration Pass Template

Use this pass order to reduce regressions:

1. **Structure pass**: create files and place components in final paths.
2. **Data pass**: replace mock data with typed real data.
3. **State pass**: handle loading/empty/error/success.
4. **Quality pass**: a11y, responsive checks, lint/type fixes.
