# Gzone-Sphere Component Library Documentation

**Reference for the application's component architecture**

> **📘 For complete architecture details, see [CSS_ARCHITECTURE.md](./CSS_ARCHITECTURE.md)**

This document reflects the "Hybrid Inlining" strategy adopted in Feb 2026, where page-specific components are inlined while truly reusable components are shared.

---

## 🏗️ Architecture Strategy

### The "Inlining" Philosophy

To improve maintainability and reduce file clutter, **components used on a single page are defined within that page's file**. This keeps related logic together (Code Locality).

*   **Example**: `BlogCard` and `FilterBar` are defined *inside* `BlogPostPage.jsx` because they are not used anywhere else.
*   **Example**: Admin forms like `BasicInformation` and `StoryandContent` are defined *inside* `AdminGames.jsx`.

### Shared Components

Only components that are **truly reusable across multiple pages** are kept in separate files in the `components` directories.

---

## 📂 Directory Structure

```
src/
├── public/
│   ├── components/            # Shared Public UI
│   │   ├── layouts/
│   │   │   ├── Section.jsx    # Standard page section wrapper
│   │   │   └── HeroSection.jsx# Standard page header
│   │   └── ui/
│   │       ├── Button.jsx     # Multi-variant button
│   │       ├── Card.jsx       # Multi-variant card
│   │       ├── Input.jsx      # Multi-variant input ✨ NEW
│   │       └── Select.jsx     # Multi-variant select ✨ NEW
│   │
│   └── pages/                 # Full Page Views (Self-Contained)
│       ├── Games/
│       │   ├── Gamepost.jsx   # Contains inline components
│       │   └── Games.jsx      # Contains inline components
│       ├── Blogs/
│       │   ├── BlogPostPage.jsx # Contains <FilterBar>, <BlogCard>, <CTABanner>
│       │   ├── BlogDescPage.jsx # Contains inline components
│       │   └── inputblog.jsx    # Contains inline components
│       ├── About/
│       │   └── About.jsx      # Contains inline components
│       └── Contact/
│           └── Contact.jsx    # Contains inline components
│
└── admin/
    ├── components/            # Shared Admin UI
    │   ├── AdminFormField.jsx # Reusable form field (uses Input/Select) ✨ UPDATED
    │   └── Sidebar.jsx        # Dashboard navigation
    │
    └── pages/
        ├── AdminDash.jsx      # Main admin layout
        ├── Dash.jsx           # Dashboard content
        └── Games/
            └── AdminGames.jsx # Contains 7 inline form components
```

---

## 🧩 Public Shared Components (`src/public/components`)

### 1. **Button** (`ui/Button.jsx`)

**Multi-variant button with strict prop-driven API**

**Props:**
- `variant`: `'primary'` | `'ghost'` | `'dark'` (default: `'primary'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `fullWidth`: `boolean` (default: `false`)
- `disabled`: `boolean` (default: `false`)
- `children`: React node
- `onClick`: Function
- `type`: `'button'` | `'submit'` | `'reset'` (default: `'button'`)

**Usage:**
```jsx
<Button variant="primary" size="lg">
  Click Me
</Button>

<Button variant="ghost" size="sm" fullWidth>
  Secondary Action
</Button>

<Button variant="dark" disabled>
  Disabled
</Button>
```

**Features:**
- ❌ No `className` prop override allowed
- ✅ All styling via design tokens
- ✅ Uses `.btn-primary`, `.btn-ghost`, `.btn-dark` from `index.css`

---

### 2. **Card** (`ui/Card.jsx`)

**Multi-variant container component**

**Props:**
- `variant`: `'default'` | `'elevated'` | `'glass'` (default: `'default'`)
- `padding`: `'none'` | `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `borderStyle`: `'default'` | `'light'` | `'none'` (default: `'default'`)
- `children`: React node

**Usage:**
```jsx
<Card variant="elevated" padding="lg">
  Content with elevated background
</Card>

<Card variant="glass" padding="md" borderStyle="none">
  Glass effect card
</Card>
```

**Features:**
- ❌ No `className` prop override allowed
- ✅ Uses design tokens for all styling
- ✅ Supports glassmorphism via `variant="glass"`

---

### 3. **Input** (`ui/Input.jsx`) ✨ NEW

**Multi-variant form input component**

**Props:**
- `variant`: `'default'` | `'admin'` (default: `'default'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `error`: `boolean` (default: `false`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'text'` | `'email'` | `'password'` | `'number'` | `'date'` | etc.
- `value`: string
- `onChange`: Function
- `placeholder`: string
- All standard input props

**Usage:**
```jsx
<Input 
  variant="default"
  size="md"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
/>

<Input 
  variant="admin"
  size="lg"
  error={hasError}
  disabled={isLoading}
/>
```

**Features:**
- ✅ Supports public and admin variants
- ✅ Error and disabled states
- ✅ All styling via design tokens

---

### 4. **Select** (`ui/Select.jsx`) ✨ NEW

**Multi-variant dropdown component**

**Props:**
- `variant`: `'default'` | `'admin'` | `'light'` (default: `'default'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `options`: Array of strings OR array of `{ value, label }` objects
- `value`: string
- `onChange`: Function
- `disabled`: `boolean` (default: `false`)
- All standard select props

**Usage:**
```jsx
// String array
<Select 
  variant="default"
  size="md"
  options={["Option 1", "Option 2", "Option 3"]}
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
/>

// Object array
<Select 
  variant="admin"
  options={[
    { value: "action", label: "Action" },
    { value: "rpg", label: "RPG" }
  ]}
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
/>
```

**Features:**
- ✅ Supports string arrays and object arrays
- ✅ Custom dropdown indicator
- ✅ Multiple variants for different contexts

---

### 5. **HeroSection** (`layouts/HeroSection.jsx`)

**High-impact page header**

**Props:**
- `title`: string
- `subtitle`: string
- `actions`: React node (optional)
- `align`: `'left'` | `'center'` (default: `'center'`)

**Usage:**
```jsx
<HeroSection 
  title="About Us" 
  subtitle="Learn more about our mission"
  actions={<Button variant="primary">Get Started</Button>}
/>
```

---

### 6. **Section** (`layouts/Section.jsx`)

**Standard page section wrapper**

**Props:**
- `padding`: `'none'` | `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `className`: string (for background colors, etc.)
- `containerClassName`: string (for container customization)
- `children`: React node

**Usage:**
```jsx
<Section className="bg-bg-primary" padding="lg">
  <h2 className="heading-lg">Section Title</h2>
  <p>Content</p>
</Section>
```

---

## 🛠️ Admin Shared Components (`src/admin/components`)

### 1. **Sidebar** (`Sidebar.jsx`)

**Persistent navigation drawer for admin dashboard**

**Props:**
- `title`: string (default: `'GZONESPHERE'`)
- `menuItems`: Array of strings
- `activeSection`: string
- `onSectionChange`: Function
- `className`: string (optional)

**Usage:**
```jsx
<Sidebar 
  menuItems={["DASHBOARD", "GAME POSTS", "NEWS"]}
  activeSection={activeSection}
  onSectionChange={setActiveSection}
/>
```

**Features:**
- ✅ Uses `.admin-sidebar` and `.admin-nav-item` from `index.css`
- ✅ Hover states and transitions built-in
- ✅ Active state highlighting

---

### 2. **AdminFormField** (`AdminFormField.jsx`) ✨ UPDATED

**Unified form field wrapper that uses Input/Select components**

**Props:**
- `label`: string
- `type`: `'text'` | `'email'` | `'date'` | `'number'` | `'textarea'` | `'select'` | etc.
- `value`: string
- `onChange`: Function
- `placeholder`: string (optional)
- `options`: Array (for select type)
- `rows`: number (for textarea, default: 4)
- `required`: boolean (default: `false`)
- `className`: string (optional)

**Usage:**
```jsx
// Text input
<AdminFormField 
  label="Game Title"
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Enter game title"
  required
/>

// Textarea
<AdminFormField 
  label="Description"
  type="textarea"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  rows={6}
/>

// Select dropdown
<AdminFormField 
  label="Genre"
  type="select"
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
  options={['Action', 'RPG', 'Strategy']}
/>
```

**Features:**
- ✅ Automatically uses `Input` or `Select` components
- ✅ Consistent label styling via `.admin-label`
- ✅ Textarea support for long-form content
- ✅ Required field indicator

---

## 📄 Page-Specific Inline Components

### Public Pages

#### Gamepost.jsx
- `HeroSection` - Game hero with title, platforms, developer
- `StorySection` - Storyline content
- `SpecsSection` - System requirements
- `GameplaySection` - Gameplay features
- `ControlsSection` - Control schemes
- `ModesSection` - Game modes
- `ReviewsSection` - Expert and community reviews
- `PurchaseBlock` - Buy now section
- `MoreGamesCarousel` - Related games
- `CommunityHub` - Community features

#### BlogPostPage.jsx
- `FilterBar` - Blog filtering controls
- `BlogCard` - Individual blog preview card
- `CTABanner` - Call-to-action banner

#### Games.jsx
- `GameCard` - Game preview card
- `FilterSection` - Game filtering
- `CarouselSection` - Featured games carousel

### Admin Pages

#### AdminGames.jsx
- `BasicInformation` - Game title, developer, platforms
- `StoryandContent` - Storyline and gameplay
- `Media` - YouTube and cloud media
- `QuickOverview` - Quick controls and modes
- `SystemRequirements` - Min/recommended specs
- `StoresandExtras` - Affiliate links, DLCs, achievements
- `Reviews` - Expert reviews and ratings

---

## 🔄 Recent Refactor Notes (Feb 2026)

### Components Created
- ✅ `Input.jsx` - Multi-variant input component
- ✅ `Select.jsx` - Multi-variant select component

### Components Updated
- ✅ `Button.jsx` - Strict prop-driven API (no className override)
- ✅ `Card.jsx` - Strict prop-driven API (no className override)
- ✅ `AdminFormField.jsx` - Now uses Input/Select components

### Files Refactored (16 total)
- ✅ All 7 public pages - Zero arbitrary values
- ✅ All 3 admin pages - Zero arbitrary values
- ✅ All 5 shared components - Strict token usage
- ✅ `index.css` - 47+ tokens added

### Deletions
*   **Deleted**: `src/public/pages/Games/components` (Merged into `Gamepost.jsx`)
*   **Deleted**: `src/public/pages/Contact/components` (Merged into `Contact.jsx`)
*   **Deleted**: `src/public/pages/Blogs/components` (Merged into `BlogPostPage.jsx`)
*   **Deleted**: `src/admin/pages/Games/*` subfiles (Merged into `AdminGames.jsx`)

This refactor reduced the total file count by ~15 files, significantly simplifying the project tree.

---

## 📊 Component Usage Statistics

| Component | Used In | Type |
|-----------|---------|------|
| **Button** | All pages | Shared |
| **Card** | Gamepost, Games, BlogPost, About | Shared |
| **Input** | Contact, AdminGames (via AdminFormField) | Shared |
| **Select** | BlogPost, AdminGames (via AdminFormField) | Shared |
| **AdminFormField** | AdminGames | Shared |
| **Sidebar** | AdminDash | Shared |
| **Section** | Multiple pages | Shared |
| **HeroSection** | About, Contact | Shared |

---

## ✅ Best Practices

### Component Creation

**When to create a shared component:**
- ✅ Used on 2+ pages
- ✅ Has clear, reusable purpose
- ✅ Benefits from prop-driven API

**When to inline a component:**
- ✅ Used on only 1 page
- ✅ Tightly coupled to page logic
- ✅ Improves code locality

### Component Usage

**DO:**
```jsx
// Use shared components with props
<Button variant="primary" size="lg">Click</Button>

// Use AdminFormField in admin forms
<AdminFormField label="Title" type="text" ... />

// Inline page-specific components
const HeroSection = () => { ... };
```

**DON'T:**
```jsx
// Override component className
<Button className="py-5">Click</Button>  ❌

// Create unnecessary shared components
// (If only used once, inline it)

// Use arbitrary values
<div className="text-[14px]">  ❌
```

---

## 📚 Related Documentation

- **[CSS_ARCHITECTURE.md](./CSS_ARCHITECTURE.md)** - Complete architecture guide
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Token reference
- **[src/index.css](./src/index.css)** - Token definitions

---

## 🎯 Summary

The GZSphere component library follows these principles:

1. **Hybrid Inlining** - Page-specific components are inlined
2. **Shared Components** - Only truly reusable components are shared
3. **Prop-Driven APIs** - No className overrides
4. **Token-Based Styling** - All styling uses design tokens
5. **Type Safety** - Props prevent styling errors

This approach ensures:
- ✅ **Code Locality** - Related code stays together
- ✅ **Reusability** - Shared components work everywhere
- ✅ **Maintainability** - Easy to find and update
- ✅ **Consistency** - Design tokens enforce uniformity
- ✅ **Simplicity** - Fewer files, clearer structure
