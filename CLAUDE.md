# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Tidjani Salah built with React, Vite, and Tailwind CSS. The portfolio showcases professional experience, services, projects, achievements, and provides contact information. It features a modern, responsive design with dark/light theme support and smooth animations.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Architecture

### Tech Stack
- **Frontend Framework**: React 19.1.0 with JSX
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 3.4.3 with custom design system
- **Icons**: Lucide React
- **Animations**: Framer Motion 12.23.6
- **Forms**: EmailJS for contact functionality
- **Notifications**: React Hot Toast

### Component Structure
The application follows a modular component architecture:

- **App.jsx**: Main application component with theme management and page sections
- **Layout Components**:
  - `Header.jsx`: Navigation with glassmorphism design, responsive mobile menu, and scroll effects
  - `Footer.jsx`: Site footer
  - `ThemeToggle.jsx`: Dark/light mode switcher
- **Page Sections**: Hero, About, Experience, Services, Projects, Achievements, Contact
- **UI Components**: Reusable components in `src/components/ui/` (Button, Card, Container, etc.)

### Theme System
- Custom Tailwind color palette with primary (green), secondary (purple), and accent (orange) colors
- Dark mode implementation using CSS classes and localStorage persistence
- Custom animations and typography scale
- Glassmorphism design elements with backdrop blur effects

### State Management
- Local component state using React hooks
- Theme preference stored in localStorage
- No external state management library used

## Styling Guidelines

The project uses a custom Tailwind configuration with:
- Extended color palette with semantic naming (primary, secondary, accent, dark, light)
- Custom fonts using Inter font family
- Premium design elements (shadows, animations, glassmorphism effects)
- Responsive design with mobile-first approach

Key design patterns:
- Glassmorphism with `backdrop-blur` and transparency
- Gradient text and backgrounds
- Custom animations (fade-in, slide-up, float, shimmer)
- Premium shadow effects (`shadow-premium`, `shadow-glow`)

## Contact Form
Uses EmailJS for sending emails directly from the client-side without a backend server.

## File Organization
- `src/components/` - All React components
- `src/components/layout/` - Layout-specific components
- `src/components/ui/` - Reusable UI components
- `src/index.css` - Global styles and Tailwind imports
- `public/` - Static assets

## Development Notes
- The project uses React 19.1.0 with latest JSX transform
- ESLint configured for React hooks and refresh
- Vite for fast development and optimized builds
- No TypeScript - uses JSX with PropTypes for type checking where needed