# Boys Gotta Run - Parent Portal

Parent/Athlete experience portal for Boys Gotta Run program. Lightweight onboarding and "Coach's Corner" view for parents to see what workouts their kids are doing each week.

## Overview

This is a **Pattern 2 (Demo/Scaffold)** application following GoFast Frontend Build Standards. Demo-only build with mock data, ready for backend integration.

**Deployment**: `parent.gofast.com`

## Features

- Site/Program Selection
- Parent Registration & Payment (demo)
- Dashboard with weekly workout banner
- RSVP functionality
- Weekly survey forms
- Lesson detail pages
- Coach feedback view (24h delay)

## Tech Stack

- **React** 18.3.1
- **Vite** 5.4.10
- **React Router** 6.28.0
- **Tailwind CSS** 3.4.15
- **Lucide React** (icons)
- **shadcn/ui** patterns

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_API_BASE=https://api.gofast.com/api
VITE_PROJECT_KEY=bgr
```

## Project Structure

```
src/
├── pages/           # Page components
│   ├── Home.jsx     # Landing, choose site
│   ├── Register.jsx # Parent signup
│   ├── Success.jsx  # Confirmation
│   ├── Dashboard.jsx # Main parent view
│   ├── Lesson.jsx   # Workout detail
│   └── Feedback.jsx # Coach feedback
├── components/      # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LessonBanner.jsx
│   ├── RSVPCard.jsx
│   ├── SurveyForm.jsx
│   └── FeedbackCard.jsx
├── hooks/           # Custom hooks
│   └── useHydrateParent.js
├── data/            # Mock data (demo)
│   └── lessons.json
└── lib/             # Utilities
    └── utils.js
```

## Routes

- `/` - Welcome + choose site
- `/register` - Parent + child registration
- `/success` - Thank-you page
- `/dashboard` - Main parent view
- `/lesson/:id` - Workout detail
- `/feedback` - Coach notes

## Backend Integration

Currently using mock data. Ready to connect to GoFast Backend:

- `GET /api/bgr/parent/:parentId/hydrate`
- `GET /api/bgr/parent/:parentId/athletes`
- `GET /api/bgr/lesson/:lessonId`
- `GET /api/bgr/feedback?athleteId=:athleteId`

See `useHydrateParent.js` hook for integration points.

## Logo

Place `logo.jpg` in the `public/` folder (from `gofastfrontend-demo/public/logo.jpg`).

## Documentation

See `gofastfrontend-demo/RunProgramBuild.md` for complete build documentation.

---

**Pattern**: Demo/Scaffold  
**Status**: ✅ Ready for demo, backend integration pending

