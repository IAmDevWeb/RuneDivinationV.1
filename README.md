# ᚠ Rune Divination V.1

An interactive web application for ancient Norse Elder Futhark rune readings. This modern interpretation brings the wisdom of Nordic mysticism to the digital age with an elegant, intuitive interface.

## ✨ Features

- **Multiple Spread Formats**
  - 1 Rune: Quick answers for immediate guidance
  - 3 Rune: Classic Past-Present-Future reading
  - 5 Rune: Cross of Rune for comprehensive insight with obstacles and outcomes

- **Interactive Rune Library**
  - Browse all 24 Elder Futhark runes
  - Complete meanings and interpretations (in Thai)
  - Real-time search functionality
  - Detailed descriptions of each rune's significance

- **User-Friendly Experience**
  - Beautiful dark theme with golden accents
  - Smooth animations and transitions
  - Responsive design for all devices
  - Optional question input for personalized readings

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16.3.3
- **Runtime**: React 19.2.8
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React 1.38.0
- **Package Manager**: pnpm 11.25.0
- **Language**: TypeScript 5

## 📦 Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

## 🚀 Getting Started

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build for production
- `pnpm start` - Start the production server
- `pnpm run lint` - Run ESLint

## 📁 Project Structure

```
app/
├── page.tsx          # Main application component
├── layout.tsx        # Root layout with global styles
├── data.ts           # Rune data, spreads, and configurations
├── globals.css       # Global styles
└── favicon.ico

public/              # Static assets
```

## 🎴 How It Works

### Rune Reading Process

1. Select a spread type (1, 3, or 5 runes)
2. Optionally enter a question or topic
3. Click the "สุ่มเสี่ยงทายรูน" (Draw Runes) button
4. View your personalized reading with:
   - Individual rune symbols
   - Position meanings (Past, Present, Future, etc.)
   - Rune names and interpretations
   - Detailed descriptions for guidance

### Rune Library

Browse all Elder Futhark runes with their symbolic meanings and practical interpretations, searchable by name or meaning.

## 🎨 Design Highlights

- **Color Scheme**: Dark professional interface with golden highlights
- **Typography**: Serif fonts for mystical feel with sans-serif for readability
- **Animations**: Subtle fade-in effects for visual polish
- **Accessibility**: Proper semantic HTML and contrast ratios

## 📖 About Elder Futhark

The Elder Futhark is an ancient Germanic alphabet consisting of 24 runes, each carrying profound symbolic meaning rooted in Norse mythology and natural phenomena. Each rune represents not just a sound, but a complete concept or force of nature.

## 🌐 Browser Compatibility

Works on all modern browsers supporting ES2020+ and CSS Grid.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Inspiration

Inspired by ancient Norse traditions and the timeless wisdom of the Elder Futhark rune system.
