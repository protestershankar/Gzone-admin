# GZSphere CSS Architecture Guide

**Complete guide to how CSS, components, pages, and admin sections work together**

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Architecture Layers](#architecture-layers)
3. [Design Token System](#design-token-system)
4. [Component Hierarchy](#component-hierarchy)
5. [Page Structure](#page-structure)
6. [Admin Section](#admin-section)
7. [Styling Workflow](#styling-workflow)
8. [Best Practices](#best-practices)

---

## Overview

GZSphere uses a **strict design token architecture** built on Tailwind CSS v4. The system enforces consistency through:

- **Centralized tokens** in `index.css` via `@theme`
- **Reusable components** with prop-driven APIs
- **Zero arbitrary values** - all styling uses semantic tokens
- **Separation of concerns** - public vs admin styling

### Key Principles

1. **Token-First**: All styling uses design tokens, never hardcoded values
2. **Component Reusability**: Shared components are prop-driven
3. **Semantic Naming**: Class names describe purpose, not appearance
4. **Maintainability**: Changes to tokens cascade throughout the app

---

## Architecture Layers

```
┌─────────────────────────────────────────────────────┐
│                   index.css                         │
│  ┌───────────────────────────────────────────────┐  │
│  │ @theme - Design Tokens (Colors, Typography)   │  │
│  │ • --color-brand-black, --font-size-xs, etc.   │  │
│  └───────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │ @layer components - Custom CSS Classes        │  │
│  │ • .heading-lg, .admin-input, .btn-primary     │  │
│  └───────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │ Animations & Utilities                         │  │
│  │ • @keyframes, custom utilities                 │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│              Shared Components                      │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ Public Components│  │ Admin Components │        │
│  │ • Button.jsx     │  │ • AdminFormField │        │
│  │ • Card.jsx       │  │ • Sidebar.jsx    │        │
│  │ • Input.jsx      │  │                  │        │
│  │ • Select.jsx     │  │                  │        │
│  └──────────────────┘  └──────────────────┘        │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│                    Pages                            │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ Public Pages     │  │ Admin Pages      │        │
│  │ • Gamepost.jsx   │  │ • AdminGames.jsx │        │
│  │ • BlogPost.jsx   │  │ • AdminDash.jsx  │        │
│  │ • About.jsx      │  │ • Dash.jsx       │        │
│  └──────────────────┘  └──────────────────┘        │
└─────────────────────────────────────────────────────┘
```

---

## Design Token System

### Location: `src/index.css`

All design tokens are defined in the `@theme` block using CSS custom properties.

### Token Categories

#### 1. Colors

```css
@theme {
  /* Brand Colors */
  --color-brand-black: #000000;
  --color-brand-white: #ffffff;
  
  /* Background Tokens */
  --color-bg-primary: #000000;
  --color-bg-secondary: #0d0d0d;
  --color-bg-surface: #1a1a1a;
  
  /* Text Tokens */
  --color-text-primary: #ffffff;
  --color-text-secondary: #b3b3b3;
  --color-text-muted: #909090;
  
  /* Neutral Grays */
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  /* ... up to neutral-900 */
}
```

**Usage:**
```jsx
<div className="bg-bg-surface text-text-primary">
  <p className="text-text-muted">Muted text</p>
</div>
```

#### 2. Typography

```css
@theme {
  /* Font Sizes */
  --font-size-xs: 0.625rem;    /* 10px */
  --font-size-sm: 0.75rem;     /* 12px */
  --font-size-base: 0.875rem;  /* 14px */
  --font-size-heading-lg: 4rem; /* 64px */
  
  /* Font Families */
  --font-family-jetmono: 'JetBrains Mono', monospace;
  --font-family-inter: 'Inter', sans-serif;
}
```

**Usage:**
```jsx
<h1 className="text-heading-lg font-jetmono">TITLE</h1>
<p className="text-sm font-inter">Body text</p>
```

#### 3. Spacing

```css
@theme {
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-16: 4rem;     /* 64px */
  
  /* Semantic Spacing */
  --spacing-container: 4rem;
  --spacing-section: 6rem;
}
```

**Usage:**
```jsx
<div className="p-8 gap-4">
  <section className="space-y-16">...</section>
</div>
```

#### 4. Border Radius

```css
@theme {
  --radius-sm: 0.125rem;   /* 2px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-3xl: 2rem;      /* 32px */
  
  /* Semantic Radii */
  --radius-card: 0.25rem;
  --radius-button: 0.125rem;
  --radius-input: 0.125rem;
}
```

**Usage:**
```jsx
<div className="rounded-card">Card</div>
<button className="rounded-button">Button</button>
```

#### 5. Special Heights

```css
@theme {
  /* Edge Case Tokens */
  --height-divider: 1px;
  --height-viewport-60: 60vh;
}
```

**Usage:**
```jsx
<div className="h-divider bg-border-dark" />
<div className="h-viewport-60">Carousel</div>
```

---

## Component Hierarchy

### Public Components (`src/public/components/ui/`)

#### Button.jsx

**Prop-driven button with variants**

```jsx
<Button 
  variant="primary"  // primary | ghost | dark
  size="lg"          // sm | md | lg
  fullWidth={false}
  disabled={false}
>
  Click Me
</Button>
```

**Implementation:**
- Uses `.btn-primary`, `.btn-ghost`, `.btn-dark` from `index.css`
- No `className` prop override allowed
- All styling via design tokens

#### Card.jsx

**Container component with variants**

```jsx
<Card 
  variant="elevated"    // default | elevated | glass
  padding="lg"          // none | sm | md | lg
  borderStyle="default" // default | light | none
>
  Content
</Card>
```

#### Input.jsx

**Form input with variants**

```jsx
<Input 
  variant="default"  // default | admin
  size="md"          // sm | md | lg
  error={false}
  disabled={false}
  type="text"
  value={value}
  onChange={handleChange}
/>
```

#### Select.jsx

**Dropdown with variants**

```jsx
<Select 
  variant="default"  // default | admin | light
  size="md"
  options={["Option 1", "Option 2"]}
  // OR
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" }
  ]}
  value={value}
  onChange={handleChange}
/>
```

### Admin Components (`src/admin/components/`)

#### AdminFormField.jsx

**Unified form field wrapper**

```jsx
<AdminFormField 
  label="Game Title"
  type="text"        // text | email | date | textarea | select
  value={value}
  onChange={handleChange}
  placeholder="Enter title"
  options={[]}       // For select type
  rows={4}           // For textarea
  required={false}
/>
```

**Features:**
- Automatically uses `Input` or `Select` components
- Consistent label styling via `.admin-label`
- Textarea support for long-form content

#### Sidebar.jsx

**Admin navigation**

```jsx
<Sidebar 
  title="GZONESPHERE"
  menuItems={["DASHBOARD", "GAME POSTS"]}
  activeSection={activeSection}
  onSectionChange={setActiveSection}
/>
```

**Styling:**
- Uses `.admin-sidebar` and `.admin-nav-item` from `index.css`
- Hover states and transitions built-in

---

## Page Structure

### Public Pages

**Pattern: Token-based styling with inline components**

```jsx
// Example: Gamepost.jsx
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

// Inline components (page-specific)
const HeroSection = ({ game }) => (
  <section className="bg-bg-primary py-16">
    <div className="container-wide">
      <h1 className="heading-lg text-text-primary">{game.title}</h1>
      <Button variant="primary" size="lg">Play Now</Button>
    </div>
  </section>
);

const Gamepost = () => {
  return (
    <>
      <HeroSection game={game} />
      {/* More sections */}
    </>
  );
};
```

**Key Points:**
- Page-specific components defined inline
- All styling uses design tokens
- Shared components imported from `components/ui/`

### Admin Pages

**Pattern: Form-heavy with AdminFormField**

```jsx
// Example: AdminGames.jsx
import AdminFormField from '../../components/AdminFormField';

const BasicInformation = ({ data, setData }) => (
  <section>
    <h2 className="heading-lg text-text-primary">BASIC INFORMATION</h2>
    <p className="text-sm text-text-muted font-jetmono uppercase tracking-widest">
      Enter the core details
    </p>
    
    <section className="bg-bg-surface border border-border-dark rounded-card p-8">
      <AdminFormField 
        label="Game Title"
        type="text"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
    </section>
  </section>
);
```

**Key Points:**
- Heavy use of `AdminFormField` for consistency
- Admin-specific classes: `.admin-label`, `.admin-input`
- Same token system as public pages

---

## Admin Section

### Admin-Specific CSS Classes

Defined in `index.css` under `@layer components`:

```css
/* Admin Sidebar */
.admin-sidebar {
  @apply bg-bg-surface border-r border-border-dark px-6 py-10 
         fixed h-full w-60 z-50 transition-colors duration-500;
}

/* Admin Navigation */
.admin-nav-item {
  @apply w-full text-left px-4 py-3 text-xs font-black uppercase 
         tracking-widest text-text-secondary rounded-button 
         transition-all duration-300;
}

.admin-nav-item.active {
  @apply bg-brand-black text-brand-white;
}

/* Admin Form Elements */
.admin-label {
  @apply block text-xs font-black uppercase tracking-widest 
         text-text-secondary mb-2 font-jetmono;
}

.admin-input {
  @apply w-full px-4 py-3 bg-bg-surface border border-border-dark 
         text-text-primary text-sm rounded-input focus:outline-none 
         focus:border-brand-white transition-colors placeholder:text-text-muted;
}
```

### Admin Layout Structure

```jsx
<div className="flex">
  <Sidebar 
    menuItems={menuItems}
    activeSection={activeSection}
    onSectionChange={setActiveSection}
  />
  
  <main className="bg-neutral-100 min-h-screen px-12 py-10 w-full lg:ml-60">
    {/* Admin content */}
  </main>
</div>
```

---

## Styling Workflow

### 1. Adding New Styles

**❌ DON'T:**
```jsx
<div className="text-[14px] rounded-[2rem] bg-gray-100">
  Content
</div>
```

**✅ DO:**
```jsx
<div className="text-sm rounded-2xl bg-neutral-100">
  Content
</div>
```

### 2. Creating New Components

**Step 1:** Define in appropriate location
- Public: `src/public/components/ui/`
- Admin: `src/admin/components/`

**Step 2:** Use prop-driven API
```jsx
const MyComponent = ({ variant = 'default', size = 'md' }) => {
  const variantClasses = {
    default: 'bg-bg-surface',
    elevated: 'bg-bg-secondary'
  };
  
  return (
    <div className={variantClasses[variant]}>
      Content
    </div>
  );
};
```

**Step 3:** Export and use
```jsx
import MyComponent from './components/ui/MyComponent';

<MyComponent variant="elevated" />
```

### 3. Adding New Tokens

**Step 1:** Add to `index.css` `@theme` block
```css
@theme {
  --color-accent-orange: #ff6b35;
}
```

**Step 2:** Use immediately
```jsx
<div className="text-accent-orange">
  Orange text
</div>
```

---

## Best Practices

### ✅ DO

1. **Use semantic tokens**
   ```jsx
   <p className="text-text-muted">Muted text</p>
   ```

2. **Use shared components**
   ```jsx
   <Button variant="primary">Click</Button>
   ```

3. **Keep page-specific components inline**
   ```jsx
   // Inside Gamepost.jsx
   const HeroSection = () => { ... };
   ```

4. **Use AdminFormField in admin pages**
   ```jsx
   <AdminFormField label="Title" type="text" ... />
   ```

5. **Follow naming conventions**
   - Components: PascalCase (`Button.jsx`)
   - CSS classes: kebab-case (`.admin-input`)
   - Tokens: kebab-case (`--color-brand-black`)

### ❌ DON'T

1. **Use arbitrary values**
   ```jsx
   ❌ <div className="text-[14px]">
   ✅ <div className="text-sm">
   ```

2. **Override component className**
   ```jsx
   ❌ <Button className="py-5 text-xs">
   ✅ <Button size="lg">
   ```

3. **Use hardcoded colors**
   ```jsx
   ❌ <div className="bg-gray-100">
   ✅ <div className="bg-neutral-100">
   ```

4. **Create unnecessary shared components**
   - If used on one page only → inline it
   - If used on multiple pages → shared component

5. **Mix public and admin components**
   - Keep separation clear
   - Admin components in `src/admin/components/`
   - Public components in `src/public/components/`

---

## Token Reference Quick Guide

### Most Common Tokens

| Purpose | Token Class | Value |
|---------|-------------|-------|
| **Text Sizes** | `text-xs` | 10px |
| | `text-sm` | 12px |
| | `text-base` | 14px |
| | `text-heading-lg` | 64px |
| **Colors** | `bg-bg-surface` | #1a1a1a |
| | `text-text-primary` | #ffffff |
| | `text-text-muted` | #909090 |
| | `bg-neutral-100` | #F5F5F5 |
| **Spacing** | `p-4` | 16px |
| | `gap-8` | 32px |
| | `space-y-16` | 64px |
| **Radius** | `rounded-card` | 4px |
| | `rounded-2xl` | 24px |
| | `rounded-3xl` | 32px |
| **Heights** | `h-divider` | 1px |
| | `h-viewport-60` | 60vh |

---

## File Organization

```
src/
├── index.css                    # ⭐ ALL DESIGN TOKENS
│
├── public/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.jsx       # Shared button
│   │       ├── Card.jsx         # Shared card
│   │       ├── Input.jsx        # Shared input
│   │       └── Select.jsx       # Shared select
│   │
│   └── pages/
│       ├── Games/
│       │   ├── Gamepost.jsx     # Page + inline components
│       │   └── Games.jsx        # Page + inline components
│       └── Blogs/
│           └── BlogPostPage.jsx # Page + inline components
│
└── admin/
    ├── components/
    │   ├── AdminFormField.jsx   # Shared admin form field
    │   └── Sidebar.jsx          # Shared admin sidebar
    │
    └── pages/
        ├── AdminDash.jsx        # Admin dashboard
        ├── Dash.jsx             # Dashboard content
        └── Games/
            └── AdminGames.jsx   # Admin game form + inline components
```

---

## Summary

The GZSphere CSS architecture is built on:

1. **Centralized tokens** in `index.css` via `@theme`
2. **Prop-driven components** for reusability
3. **Zero arbitrary values** - strict token usage
4. **Clear separation** between public and admin
5. **Inline components** for page-specific UI
6. **Shared components** for cross-page reusability

This architecture ensures:
- ✅ **Consistency** - All pages use same tokens
- ✅ **Maintainability** - Change tokens, update everywhere
- ✅ **Scalability** - Easy to add new pages/components
- ✅ **Type Safety** - Prop-driven APIs prevent errors
- ✅ **Performance** - Minimal CSS bloat

---

**For more details, see:**
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Token reference
- [COMPONENTS.md](./COMPONENTS.md) - Component library
- [index.css](./src/index.css) - Token definitions
