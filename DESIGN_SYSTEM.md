# Gzone-Sphere Design System

**Centralized design token system for visual consistency**

> **📘 For complete architecture details, see [CSS_ARCHITECTURE.md](./CSS_ARCHITECTURE.md)**

This design system is defined in **`src/index.css`** (using Tailwind v4 `@theme`) and enforces strict visual consistency across the entire application.

---

## 🎨 Token Reference

All styling uses semantic class names. **Never use arbitrary values or hardcoded hex values.**

### 1. Colors

Defined in `src/index.css` under the `@theme` block.

| Semantic Name | Token Class | Hex Value | Usage |
| :--- | :--- | :--- | :--- |
| **Brand** | `text-brand-black` | `#000000` | Core black (Logo/Inverse) |
| | `text-brand-white` | `#ffffff` | Core white (Logo/Inverse) |
| **Backgrounds** | `bg-bg-primary` | `#000000` | Main Page Background |
| | `bg-bg-secondary` | `#0d0d0d` | Secondary Sections/Cards |
| | `bg-bg-surface` | `#1a1a1a` | Card & Input Backgrounds |
| | `bg-bg-glass` | `rgba(255,255,255,0.05)` | Glassmorphism overlays |
| **Text** | `text-text-primary` | `#ffffff` | Main Headings/Body |
| | `text-text-secondary`| `#b3b3b3` | Subtitles |
| | `text-text-muted` | `#909090` | Metadata/Tags |
| | `text-text-inverse` | `#000000` | Text on white buttons |
| **Neutral Grays** | `bg-neutral-50` | `#FAFAFA` | Lightest gray |
| | `bg-neutral-100` | `#F5F5F5` | Very light gray |
| | `bg-neutral-200` | `#E5E5E5` | Light gray |
| | `text-neutral-400` | `#A3A3A3` | Medium gray text |
| | `bg-neutral-800` | `#262626` | Dark gray |
| | `bg-neutral-900` | `#171717` | Darkest gray |
| **Border** | `border-border-light` | `#e0e0e0` | Light borders (rare) |
| | `border-border-dark` | `rgba(255,255,255,0.15)` | Standard dark mode borders |
| **Accent** | `text-accent-cyan` | `#00ccff` | Highlights/Links |
| | `text-accent-purple` | `#9d00ff` | Special states |
| | `text-accent-green` | `#39ff14` | Success/Status |

### 2. Typography

Defined in `src/index.css` under the `@theme` block.

| Size | Token Class | Value | Usage |
| :--- | :--- | :--- | :--- |
| **Extra Small** | `text-xs` | `10px` | Pills, metadata, small labels |
| **Small** | `text-sm` | `12px` | Body text, descriptions |
| **Base** | `text-base` | `14px` | Standard body text |
| **Medium** | `text-md` | `16px` | Larger body text |
| **Large** | `text-lg` | `18px` | Subheadings |
| **Heading Small** | `text-heading-sm` | `32px` | Small section headers |
| **Heading Medium** | `text-heading-md` | `48px` | Medium headers |
| **Heading Large** | `text-heading-lg` | `64px` | Large page titles |
| **Heading XL** | `text-heading-xl` | `96px` | Hero titles |

| Family | Token Class | Font Stack | Usage |
| :--- | :--- | :--- | :--- |
| **Technical** | `font-jetmono` | JetBrains Mono | Metadata, Pills, Dates, Forms, Subtitles |
| **Body** | `font-inter` | Inter | Long-form reading (Storylines) |

### 3. Spacing

Defined in `src/index.css` under the `@theme` block.

| Token Class | Value | Usage |
| :--- | :--- | :--- |
| `p-1` / `gap-1` | `4px` | Tight spacing |
| `p-2` / `gap-2` | `8px` | Small spacing |
| `p-4` / `gap-4` | `16px` | Standard spacing |
| `p-8` / `gap-8` | `32px` | Medium spacing |
| `p-12` / `gap-12` | `48px` | Large spacing |
| `p-16` / `gap-16` | `64px` | Extra large spacing |
| `p-24` / `gap-24` | `96px` | Section spacing |

### 4. Border Radius

Defined in `src/index.css` under the `@theme` block.

| Name | Token Class | Value | Usage |
| :--- | :--- | :--- | :--- |
| **Small** | `rounded-sm` | `2px` | Tight corners |
| **Medium** | `rounded-md` | `4px` | Standard corners |
| **Large** | `rounded-lg` | `8px` | Soft corners |
| **2XL** | `rounded-2xl` | `24px` | Very round corners |
| **3XL** | `rounded-3xl` | `32px` | Extra round corners |
| **Card** | `rounded-card` | `4px` | Cards and Containers |
| **Button** | `rounded-button` | `2px` | Buttons and Inputs |
| **Input** | `rounded-input` | `2px` | Form fields |

### 5. Special Heights

Defined in `src/index.css` under the `@theme` block.

| Token Class | Value | Usage |
| :--- | :--- | :--- |
| `h-divider` | `1px` | Divider lines |
| `h-viewport-60` | `60vh` | Viewport-relative heights |

---

## 🧩 Component CSS Classes

These classes are injected via `@layer components` in `src/index.css` for global consistency.

### Headings

*   **`.heading-xl`**: For main page titles (About, Gamepost). Includes responsive scaling (`clamp`), uppercase, and strict tracking.
*   **`.heading-lg`**: For section titles (e.g., "RELATED BLOGS").

### Containers

*   **`.container-wide`**: Max-width `1920px`. Handles responsive padding (1.5rem mobile → 4rem desktop).
*   **`.container-content`**: Max-width `1440px`. Used for text-heavy content blocks.

### Buttons

*   **`.btn-primary`**: Primary action button (white background, black text)
*   **`.btn-ghost`**: Transparent button with border
*   **`.btn-dark`**: Dark button (black background, white text)

### Cards

*   **`.card`**: Base card styling
*   **`.card-hover`**: Card with hover effect
*   **`.glass-surface`**: Glass effect with backdrop blur

### Admin UI

*   **`.admin-sidebar`**: Fixed sidebar navigation
*   **`.admin-main`**: Main content area with left margin
*   **`.admin-nav-item`**: Navigation item with hover states
*   **`.admin-label`**: Form label styling
*   **`.admin-input`**: Form input styling

### Navbar

*   **`.nav-link`**: Navbar link with hover transition

---

## 🚀 How to Use

### 1. New Section

Always wrap new content in a container:

```jsx
<section className="bg-bg-primary py-24">
  <div className="container-wide">
    ...content
  </div>
</section>
```

### 2. Headings

Use standardized classes instead of arbitrary text sizes:

```jsx
<h2 className="heading-lg text-text-primary mb-8">
  MY SECTION TITLE
</h2>
```

### 3. Cards

Use semantic tokens for consistent layering:

```jsx
<div className="bg-bg-surface border border-border-dark rounded-card p-6">
  ...
</div>
```

### 4. Buttons

Use the Button component with variants:

```jsx
import Button from './components/ui/Button';

<Button variant="primary" size="lg">
  Click Me
</Button>
```

### 5. Forms

Use Input/Select components or admin classes:

```jsx
// Public forms
<Input variant="default" size="md" />

// Admin forms
<input className="admin-input" />
```

---

## ✅ Best Practices

### DO

✅ Use semantic tokens:
```jsx
<p className="text-text-muted">Muted text</p>
```

✅ Use shared components:
```jsx
<Button variant="primary">Click</Button>
```

✅ Use proper spacing tokens:
```jsx
<div className="p-8 gap-4">...</div>
```

### DON'T

❌ Use arbitrary values:
```jsx
<div className="text-[14px]">  // Wrong
<div className="text-sm">      // Correct
```

❌ Use hardcoded colors:
```jsx
<div className="bg-gray-100">    // Wrong
<div className="bg-neutral-100"> // Correct
```

❌ Override component className:
```jsx
<Button className="py-5">  // Wrong
<Button size="lg">         // Correct
```

---

## 📚 Related Documentation

- **[CSS_ARCHITECTURE.md](./CSS_ARCHITECTURE.md)** - Complete architecture guide
- **[COMPONENTS.md](./COMPONENTS.md)** - Component library reference
- **[src/index.css](./src/index.css)** - Token definitions

---

## 🔄 Recent Updates (Feb 2026)

- ✅ Added 47+ design tokens
- ✅ Created Input and Select components
- ✅ Refactored all 16 files to use tokens
- ✅ Eliminated all arbitrary values
- ✅ Added special height tokens (h-divider, h-viewport-60)
- ✅ Refactored AdminFormField to use new components
- ✅ Zero CSS bloat - strict token usage throughout
