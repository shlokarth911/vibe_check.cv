# VibeCheck.cv

A dual-mode professional identity analyzer built for the AI Hackathon (Daytona).
Featuring **Roast Mode** (Cyberpunk/Toxic) and **Glow-Up Mode** (Professional/Clean).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4, Shadcn/UI
- **AI**: OpenAI SDK (Compatible with Siray.ai/CometAPI)

- **Infra**: Daytona

## Setup

1. **Clone & Install**

   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file:

   ```env
   OPENAI_API_KEY=your_key_here
   OPENAI_BASE_URL=https://api.openai.com/v1 # or Siray/Comet URL

   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Features

- **Terminal Input**: Paste your raw bio.
- **Roast Mode**: Savage critique.
- **Glow-Up Mode**: Professional rewrite and Ola.cv identity extraction.
- **Export**: Download `profile.json` for .cv deployment.
