# VibeCheck.cv

> **Professional identity, re-engineered.** Burn down your old resume and rise from the ashes with a high-fidelity professional brand.

VibeCheck.cv is a dual-mode career identity engine designed to help professionals understand how他们 appear to the world—and how they _should_ appear. Built for the modern, faceless digital economy, it transforms raw experience into a premium identity.

---

## The Core Experience

### 1. The Roast (Gordo Mode)

A brutal, toxic Silicon Valley recruiter/Gordon Ramsay hybrid analyzes your professional history. No flaw is left unmentioned. It’s savage, funny, and highlights exactly where your narrative is weak.

- **Vibe:** Cyberpunk, terminal-inspired, high-contrast.
- **Goal:** Brutal honesty through humor.

### 2. The Glow-Up (Executive Mode)

We take the wreckage of your roast and rebuild it. Using top-tier Executive Brand Strategist logic, we rewrite your bio into a clean, impactful, Apple-style professional brand.

- **Vibe:** Minimalist, premium, glassmorphism, airy.
- **Goal:** High-fidelity career storytelling.

### 3. Identity Agent

While you enjoy the UI, our underlying "Identity Agent" extracts structured data from your input, including:

- Core Skills & Tech Stack
- Experience Quantization (Years & Impact)
- Role Alignment
- Key Achievements

---

## Features

- **Smart Input**: Paste your bio text, resume, or profile URL (LinkedIn, Dribbble, etc.). Gemini analyzes it directly.
- **Terminal-Grade Input**: A high-fidelity command-line interface for text entry.
- **Structured Export**: Download your refined identity as a `profile.json` (Ready for .cv platforms).
- **Responsive Aesthetics**: Seamlessly transitions from a dark, gritty "Roast" environment to a sleek, professional "Glow-Up" canvas.

---

## Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) (Animations), [Lucide React](https://lucide.dev/) (Icons)
- **AI/LLM**: [Google Gemini 3 Flash Preview](https://ai.google.dev/gemini-api/docs) (Integrated via high-performance edge routes)
- **Intelligence**: Custom prompts for Dual-Mode Analysis (Roast/Glow-up)
- **Hosting/Dev**: [Daytona](https://www.daytona.io/)

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Google Gemini API Key ([Get one free here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shlokarth911/vibe_check.git
   cd vibe_check
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` or `.env.local` file in the root:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run development mode**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to start the scan.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with and for the AI Hackathon.
