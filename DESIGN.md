---
name: Monochrome Tech
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#988e90'
  outline-variant: '#4c4546'
  surface-tint: '#c6c6c6'
  primary: '#c6c6c6'
  on-primary: '#303030'
  primary-container: '#000000'
  on-primary-container: '#757575'
  inverse-primary: '#5e5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c6c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#000000'
  on-tertiary-container: '#757575'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Manrope
    fontSize: 72px
    fontWeight: '200'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is engineered to evoke a sense of absolute precision, luxury, and technological authority. By stripping away color, the focus shifts entirely to form, light, and motion. The aesthetic is a hybrid of **Minimalism** and **Glassmorphism**, creating a digital environment that feels like a high-end physical interface.

The target audience consists of innovators and enterprise leaders who value clarity over decoration. The emotional response should be one of "effortless power"—a UI that feels expensive, intentional, and highly reliable. Every pixel is calculated to convey a future-forward identity rooted in the binary nature of black and white.

## Colors

The palette is strictly binary, utilizing **Pure Black (#000000)** and **White (#FFFFFF)** as the primary drivers of the visual hierarchy. Depth is achieved not through color, but through the layering of shades and the use of transparency.

In Dark Mode (the default state for this design system), the primary background is Pure Black, with elevated surfaces using Near-Black to create a sense of tiered architecture. In Light Mode, the inverse applies. Grays are used sparingly, specifically for non-interactive text and low-priority borders to maintain the high-contrast "luxury" feel. Gradients should be used as subtle directional light sources (e.g., a 1% opacity white-to-transparent linear gradient) to simulate surface reflections.

## Typography

This design system leverages **Manrope** to bridge the gap between technical utility and premium elegance. To achieve the "Luxury AI" look, the system relies on extreme weight variance: ultra-light (200) for large display headers and semi-bold (600) for structural headlines.

Inspired by the logo's "AMAZONAS" and "SOLUTIONS" styling, labels and small navigation elements should use wide letter-spacing and uppercase transformations. This adds a "breathable" quality to the high-contrast interface. Line heights are generous in body text to ensure readability amidst the stark black-and-white contrast.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to maintain an editorial, structured feel typical of luxury brands. A 12-column grid is used for desktop environments, with significant margins to allow the content to "float" in the center of the viewport.

The spacing rhythm is strictly based on an **8px linear scale**. Use larger gaps (48px+) between major sections to emphasize the minimalist aesthetic. Tight spacing (4px-12px) should be reserved for related metadata or internal component elements. Negative space is treated as a functional element, used to group components without the need for visible dividers or boxes.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

- **Surface Levels:** The base layer is pure #000000. Each level of elevation is represented by a slight increase in lightness (using #0A0A0A or #1A1A1A) or by a glass effect.
- **Glassmorphism:** For overlays like modals, dropdowns, and navigation bars, use a backdrop blur (20px to 40px) combined with a semi-transparent fill (3% white). 
- **The "High-Tech Border":** Instead of shadows, use 1px borders. Elevated elements should have a "top-light" effect—a subtle 1px border that is slightly brighter on the top and left edges (0.15 opacity white) and darker/invisible on the bottom.
- **Micro-interactions:** When an element is hovered, its "glow" increases via a very soft, low-opacity white outer blur (not a shadow, but a light emission).

## Shapes

The shape language is **Soft (0.25rem)**, emphasizing precision and engineering. While sharp edges can feel aggressive, and rounded edges can feel too casual, the subtle 4px radius provides a sophisticated "machined" look.

- **Standard Elements:** Buttons and input fields use a 4px (0.25rem) radius.
- **Containers:** Large cards or sections may use an 8px (0.5rem) radius to feel slightly more approachable.
- **Interactive States:** Avoid "pill" shapes unless used for specialized status tags. The rectangular form factor reinforces the structural integrity of the design system.

## Components

- **Buttons:**
    - *Primary:* Pure White background with Black text. No border. On hover, the button should have a slight inner glow.
    - *Secondary:* Transparent background with a 1px White border. Text is White.
    - *Ghost:* No background or border. Text is White.
- **Input Fields:** Use a Dark Gray (#1A1A1A) background with a 1px border that shifts from Dark Gray to White upon focus. Text should be White, with Placeholder text in Mid-Gray.
- **Cards:** Use either a solid Near-Black fill (#0A0A0A) or a Glassmorphism effect. Borders should be a subtle 1px White at 10% opacity.
- **Chips/Tags:** Small, rectangular with a 2px radius. Use Black background with a White border for high-tech "metadata" look.
- **Checkboxes/Radios:** Pure White for "Checked" states with Black icons. Use a 1px White border for "Unchecked" states.
- **Scrollbars:** Custom-styled to be ultra-thin (4px) and Mid-Gray, fading out when not in use to avoid visual clutter.
- **Status Indicators:** Since no color is used, status (Success/Error) must be communicated via Icons and descriptive text, or by varying the stroke thickness of borders.