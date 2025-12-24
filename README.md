# CloudNoise Sleep Quiz

A beautiful, interactive sleep quiz application built with Next.js, TypeScript, and Tailwind CSS. The design is based on Figma mockups and provides a personalized sleep improvement plan.

## Features

- 🎨 Beautiful gradient UI with dark theme
- 📱 Mobile-first responsive design (375px width)
- 🎯 Multi-phase quiz system (Demographics, Insomnia, Psycho-emotional, Sound Sensitivity, Habits)
- 💡 Educational information cards between sections
- 📊 Personalized results with comparison tables
- 🌐 English localization support
- ⚡ Built with Next.js 14 and TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the quiz.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── quiz/
│   │   ├── gender/           # Phase 1: Gender selection
│   │   ├── age/              # Phase 1: Age slider
│   │   ├── workday/          # Phase 1: Workday type
│   │   ├── devices/          # Phase 1: Device usage
│   │   ├── bedtime/          # Phase 1: Bedtime
│   │   ├── info1/            # Info: Why it matters
│   │   ├── goal/             # Phase 2: Primary goal
│   │   ├── time-to-sleep/    # Phase 2: Time to fall asleep
│   │   ├── night-waking/     # Phase 2: Night wakings
│   │   ├── triggers/         # Phase 2: Wakefulness triggers
│   │   ├── afternoon-crash/  # Phase 2: Afternoon energy
│   │   ├── racing-thoughts/  # Phase 3: Racing thoughts
│   │   ├── stress/           # Phase 3: Stress level
│   │   ├── switch-off/       # Phase 3: Work-life balance
│   │   ├── anxiety/          # Phase 3: Anxiety
│   │   ├── wired-tired/      # Phase 3: Wired but tired
│   │   ├── info2/            # Info: Binaural beats
│   │   ├── silence/          # Phase 4: Silence preference
│   │   ├── sharp-noises/     # Phase 4: Sharp noises
│   │   ├── tv-podcasts/      # Phase 4: TV/Podcasts
│   │   ├── natural-sounds/   # Phase 4: Sound preferences
│   │   ├── earplugs/         # Phase 4: Earplugs usage
│   │   ├── coffee/           # Phase 5: Coffee habits
│   │   ├── exercise/         # Phase 5: Exercise timing
│   │   ├── naps/             # Phase 5: Daytime naps
│   │   ├── bedroom-use/      # Phase 5: Bedroom usage
│   │   ├── ritual/           # Phase 5: Sound ritual
│   │   ├── info3/            # Info: Testimonial
│   │   ├── info4/            # Info: Productivity
│   │   ├── analysis/         # Analysis results
│   │   └── results/          # Final results page
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── QuizContainer.tsx     # Main quiz container with image
│   ├── QuestionHeader.tsx    # Phase title + question
│   ├── QuestionButton.tsx    # Option button with emoji
│   ├── GenderCard.tsx        # Gender selection card
│   ├── Slider.tsx            # Slider for age/stress
│   ├── InfoCard.tsx          # Information/quote card
│   └── ContinueButton.tsx    # Continue/Next button
└── locales/
    └── en.json               # English translations
```

## Quiz Flow

1. **Phase 1: Demographics & Lifestyle**
   - Gender, Age, Workday type, Device usage, Bedtime

2. **Info Section 1**
   - Educational content about sound therapy

3. **Phase 2: Diving into Insomnia**
   - Primary goal, Time to sleep, Night wakings, Triggers, Afternoon crash

4. **Phase 3: Psycho-emotional State**
   - Racing thoughts, Stress level, Work-life balance, Anxiety, Wired/tired feeling

5. **Info Section 2**
   - Binaural beats and doctor recommendations

6. **Phase 4: Sound Sensitivity & Environment**
   - Silence preference, Sharp noises, TV/Podcasts, Natural sounds, Earplugs

7. **Phase 5: Habits & Rituals**
   - Coffee habits, Exercise timing, Naps, Bedroom usage, Sound ritual readiness

8. **Info Sections 3 & 4**
   - User testimonials and productivity benefits

9. **Analysis & Results**
   - Personalized match percentage
   - Comparison table (with/without CloudNoise)
   - Personal plan with features

## Design System

### Colors
- **Primary Dark**: `#10044d` - Background for cards
- **Primary**: `#19067e` - Active states
- **Primary Light**: `#3f2ead` - Gradient end
- **Gradient Start**: `#1a1347`
- **Gradient Middle**: `#003a58`
- **Border**: `#4e557e` - Default borders
- **Border Active**: `#f5f7ff` - Selected state
- **Text Primary**: `#f5f5f5` - Main text
- **Text Secondary**: `#796fac` - Disabled/muted text

### Typography
- Font: **Noto Sans**
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Noto Sans** - Typography

## License

This project is for demonstration purposes.

