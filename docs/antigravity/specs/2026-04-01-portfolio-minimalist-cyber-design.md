# Portfolio "Cyber-Minimalist 2026" - Design Specification

**Status:** Approved (Waiting for final confirmation)
**Author:** Antigravity (Design AI)
**Project:** Adam Hammouche Portfolio
**Date:** 2026-04-01

## 1. Vision & Strategy
The goal is to transform the current portfolio into a high-end, futuristic, and professional interface. The "Minimalist Cyber" aesthetic focuses on deep blacks, sharp typography, glassmorphism, and subtle high-tech accents (cyan glows, thin borders).

## 2. Visual Identity (Design System)

### 2.1 Color Palette
- **Background (Base):** `#030303` (Deep Black)
- **Surface (Cards/Overlays):** `#111111` (Slate) with `backdrop-filter: blur(20px)` and `opacity: 0.8`
- **Primary Accent:** `#00E5FF` (Electric Cyan) - Used for borders, icons, and CTA highlights.
- **Secondary Accent:** `#FFFFFF` (Pure White) - High contrast text.
- **Muted Text:** `#888888` (Medium Gray) - For labels and secondary info.
- **Gradient Hint:** `linear-gradient(135deg, #00E5FF 0%, #002233 100%)` (Subtle)

### 2.2 Typography
- **Heading 1-3:** `Space Grotesk` (Google Fonts) - Technical, modern, geometric.
- **Body:** `Inter` (Google Fonts) - Clean, neutral, high readability.
- **Technical Tags:** `JetBrains Mono` - Monospaced for tech stack labels.

### 2.3 Borders & Shadows
- **Border-width:** `0.5px` to `1px` max.
- **Border-color:** `rgba(255, 255, 255, 0.1)` (default), `#00E5FF` (hover).
- **Glow:** `box-shadow: 0 0 20px rgba(0, 229, 255, 0.15)` (only on active/hover).

## 3. UI Components Architecture

### 3.1 Hero Section
- Large title with `Space Grotesk`.
- Subtle "Aurora" glow moving in the background.
- Magnetic buttons for "Discover" and "Contact".

### 3.2 Projects (Works)
- Transition from vertical cards to a clean masonry or bento grid-inspired layout.
- Images with a subtle grayscale-to-color filter on hover.

### 3.3 Multi-purpose Bento Grid (Skills/Experience)
- A non-uniform grid layout for Skills and Formation.
- Interactive cards that light up when hovered.

### 3.4 Navigation (Navbar)
- Floating top bar, ultra-thin, high blur.
- Minimal icons and text.

## 4. Animations & Micro-interactions
- **Entry:** Smooth staggered fade-in for all sections.
- **Hover:** Border glow intensity increase + 2% scale up.
- **Scanline:** A thin horizontal line passing through borders to indicate loading or activity.
- **Transitions:** 300ms cubic-bezier transitions for all states.

## 5. Technical Requirements
- Framework: Vite + React
- Styling: Vanilla CSS (Custom properties for the design system)
- Fonts: Dynamic import via Google Fonts
- Responsiveness: Targeted break-points at 375px, 768px, 1024px, 1440px.
