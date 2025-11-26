# TRECO Design Guidelines

## Design Approach
**Reference-Based: Modern Professional Consultancy**
Drawing inspiration from premium consultancy firms (Deloitte Digital, McKinsey, Accenture) combined with modern agency aesthetics. Focus on establishing trust, credibility, and professionalism through refined visuals and purposeful 3D depth effects.

## Typography System
**Primary Font:** Inter or DM Sans (Google Fonts)
- Hero Headlines: 56-72px, Bold (700)
- Section Headlines: 40-48px, Semibold (600)
- Subheadings: 24-28px, Medium (500)
- Body Text: 16-18px, Regular (400)
- Captions: 14px, Regular (400)

**Secondary Font (Accent):** Playfair Display or Merriweather for quote callouts

## Layout & Spacing System
**Tailwind Spacing Units:** 4, 8, 12, 16, 20, 24 (p-4, h-8, py-12, gap-16, py-20, py-24)

**Container Strategy:**
- Full-width hero sections with max-w-7xl inner content
- Content sections: max-w-6xl centered
- Text-heavy sections: max-w-4xl for readability

**Vertical Rhythm:** py-20 for desktop sections, py-12 for mobile

## Component Library

### Navigation Header
- Fixed/sticky header with backdrop blur effect
- Logo placement: top-left (reserved space 180px × 60px)
- Horizontal navigation menu (right-aligned)
- Subtle shadow on scroll: shadow-lg with opacity transition
- Mobile: Hamburger menu with slide-in overlay

### Hero Section (Homepage)
- Full-width background image with gradient overlay (dark gradient from bottom)
- Height: 85vh on desktop, 70vh on mobile
- Centered content with hero headline + subheading + dual CTAs
- Text on image with semi-transparent backdrop blur on button containers
- Parallax scroll effect on background image
- Floating/animated subtle particles or geometric shapes for depth

### Section Structures

**About Us Modal:**
- Full-screen overlay modal with smooth scale-in animation
- Two-column layout: company story text (left) + mission image (right)
- Close button top-right, escape key functionality
- Backdrop blur with semi-transparent overlay

**Team Members Section:**
- 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card design with team photo, name, role, brief bio
- Hover effect: subtle lift (translateY) + shadow enhancement
- Photo treatment: circular or rounded-lg with depth shadow

**Core Values & Vision Modal:**
- Full-screen modal similar to About Us
- Icon-driven value cards in 2-column grid
- Vision statement as featured typography block
- Animated entrance for each value card (stagger effect)

**Projects Completed Showcase:**
- Masonry or card grid layout (2-3 columns)
- Each card: project image, title, category tag, brief description
- Hover: image zoom + overlay reveal with project details
- Filter tabs for project categories
- Shadow depth: shadow-xl on cards

**Contact Us Section:**
- Two-column split: Contact form (left, 60%) + Info/Map placeholder (right, 40%)
- Form fields with floating labels and validation states
- Submit button with loading state animation
- Company details: address, phone, email with icons

### 3D & Animation Features

**Depth & Shadows:**
- Cards: shadow-lg default, shadow-2xl on hover
- Layered shadows for premium depth (combine multiple shadow values)
- Inset shadows on input fields

**Animations:**
- Scroll-triggered entrance animations (fade-up, fade-in)
- Smooth parallax on hero images (subtle, not aggressive)
- Card hover: transform scale(1.02) + translateY(-8px)
- Modal entrance: scale(0.95) to scale(1) with fade
- Button hovers: subtle glow effect
- Page transitions: smooth fade between sections

**3D Effects:**
- Perspective transforms on hover for project cards (rotateY slight tilt)
- Gradient mesh backgrounds with animated movement
- Floating geometric shapes with slow rotation
- Glass morphism effects (backdrop-filter blur) on overlays

## Images

### Required Images:

1. **Hero Background (Homepage):**
   - Professional corporate environment or abstract technology visualization
   - High-resolution, 1920×1080 minimum
   - Placement: Full-width hero section background
   - Treatment: Dark gradient overlay for text readability

2. **About Us Section:**
   - Office environment or team collaboration image
   - Placement: Modal right side or inline section
   - Size: 800×600px minimum

3. **Team Member Photos:**
   - Professional headshots (8-12 team members)
   - Consistent style: Same background, lighting, framing
   - Placement: Team member cards
   - Size: 400×400px square, circular crop

4. **Project Showcase Images:**
   - 6-9 project thumbnails showing completed work
   - Varied content demonstrating project diversity
   - Placement: Project cards in showcase grid
   - Size: 600×400px landscape

5. **Values/Vision Section:**
   - Abstract or inspirational imagery
   - Placement: Modal background or accent
   - Optional: Icon illustrations instead

6. **Contact Section:**
   - Office location or map placeholder
   - Placement: Right side of contact section
   - Size: 500×400px

## Accessibility
- Minimum contrast ratio 4.5:1 for all text
- Focus states visible on all interactive elements
- Keyboard navigation for modals (tab order, escape to close)
- ARIA labels for icons and image-based navigation
- Form validation with clear error messages

## Key Principles
- **Professional Authority:** Refined, sophisticated, trustworthy
- **Purposeful Depth:** 3D effects enhance, not distract
- **Visual Hierarchy:** Clear content organization and flow
- **Performance:** Optimized images, smooth 60fps animations
- **Engagement:** Interactive elements invite exploration