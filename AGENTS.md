# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Build Commands
- Uses **pnpm** (not npm) - check pnpm-lock.yaml exists
- Dev server runs with `pnpm run dev` (uses --host flag for external access)
- Build requires: `pnpm run build` (includes astro check before build)

## Non-Obvious Code Patterns
- **GSAP Animation Classes**: Components must use specific classes (.Fade_Stagger, .Spring_Up, .Hero_Trail) - animations break without exact names
- **Theme System**: Dual avatar system requires both `avatar-dark` and `avatar-light` classes with corresponding image sources
- **3D Model Loading**: DRACO decoder path hardcoded to `/draco/` in ComputersCanvas.tsx - files must exist in public/draco/
- **Custom CSS Variables**: Theme system uses HSL pattern (--pH, --pS, --pL) not standard color names
- **Font Loading**: Uses astro-font with process.cwd() path joining - requires fonts in public/fonts/
- **Smooth Scrolling**: Uses Lenis + GSAP ScrollTrigger - never use CSS scroll-behavior: smooth

## Project-Specific Requirements
- **Contact Form**: Currently mocked (logs to console) - needs real email service integration
- **Project Data**: Uses placeholder TechInfo objects in src/utils/ProjectsList.ts with Mock* assets
- **Icon System**: Mixed SVG/WebP exports from src/assets/Icons/index.ts - follow existing naming convention
- **Mobile Navigation**: Complex clip-path animation system - avoid modifying menuTl timeline structure
- **Responsive Design**: Custom breakpoints xs:410px and 4xl:1800px defined in tailwind.config.mjs

## Critical CSS Classes
- Animation triggers: .Fade_Stagger, .Fade_Up, .Fade_Down, .Spring_Up, .Project_Stagger
- Theme variants: .avatar-dark, .avatar-light (controlled by html.light class)
- Navigation: .MobileHeader_Nav, .Header_ActionBtn (with specific pseudo-element styling)

## File Structure Conventions
- Components export from index.ts files (src/components/, src/layouts/, etc.)
- Assets organized by type (Icons/, SVGs/, Videos/) with barrel exports
- Utilities in src/utils/ (ProjectsList.ts, SkillStack.ts) follow specific data structures