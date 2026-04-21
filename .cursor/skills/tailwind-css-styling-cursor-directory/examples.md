# Tailwind Styling Examples (cursor.directory)

## Prompt: Polish Existing Component

```text
Restyle this React component using Tailwind CSS with a clean cursor.directory-like look.

Goals:
- Improve spacing and visual hierarchy
- Keep behavior unchanged
- Mobile-first responsive layout
- Add accessible focus-visible and disabled states
- Keep class names composable and easy to maintain
```

## Prompt: Build New Card Section

```text
Create a reusable Tailwind card section for a dashboard.

Requirements:
- Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Subtle surface style with rounded corners and light border
- Clear title, metric, and helper text hierarchy
- Include loading and empty visual states
- Use semantic utility classes and avoid arbitrary values
```

## Prompt: Refactor Utility Sprawl

```text
Refactor these long Tailwind class strings into consistent, reusable patterns.

Requirements:
- Preserve exact visual behavior
- Group class order by intent (layout, spacing, typography, visuals, states)
- Extract repeated class groups into shared component wrappers or helpers
- Keep output easy to scan and modify
```

## Quick Patterns

### Surface Container

```tsx
<section className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
  {/* content */}
</section>
```

### Responsive Two-Column Layout

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
  {/* column A */}
  {/* column B */}
</div>
```

### Accessible Primary Button

```tsx
<button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
  Save
</button>
```
