# Frontend Mentor - Character counter solution

This is a solution to the [Character counter challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/character-counter-znSgeWs_i6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [Project Type](#project-type)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [What the App does](#what-the-app-does)
- [Built with](#built-with)
- [Features Implemented](#features-implemented)
  - [Core Features](#core-features)
  - [User Experience](#user-experience)
  - [Accessibility](#accessibility)
- [Development Setup](#development-setup)
- [How to Run / Deployment](#how-to-run-/-deployment)
- [Author](#author)


## Overview
Character Counter is a real-time text analysis web application that provides comprehensive statistics about your text input. Built with React, it offers instant feedback on character count, word count, sentence count, letter density, and estimated reading time.

## Project Type

Frontend Web Application

### The challenge

Users should be able to:

- Analyze the character, word, and sentence counts for their text
- Exclude/Include spaces in their character count
- Set a character limit
- Receive a warning message if their text exceeds their character limit
- See the approximate reading time of their text
- Analyze the letter density of their text
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## What the App Does

Character Counter analyzes text in real-time and provides:
- **Character Count**: Total characters with option to exclude spaces
- **Word Count**: Number of words in the text
- **Sentence Count**: Number of sentences detected
- **Letter Density Graph**: Visual representation of letter frequency distribution
- **Reading Time Estimation**: Approximate time needed to read the text (based on 200 WPM)
- **Character Limit**: Optional feature to set and enforce character limits

## Built With

- **React 18** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Custom styling with CSS variables
- **LocalStorage API** - Theme persistence

## Features Implemented

### Core Features
- Real-time character counting (with/without spaces)
- Word count calculation
- Sentence count detection
- Letter frequency analysis and density visualization
- Reading time estimation

### User Experience
- Dark/Light theme toggle with persistence
- Responsive design (mobile, tablet, desktop)
- Character limit setting with visual feedback
- Expandable/collapsible letter density graph
- Visual indicators for limit exceeded state

### Accessibility
- Screen reader labels
- Semantic HTML
- Keyboard navigation support

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd character-counter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## How to Run / Deployment

### Development Mode
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Production

The build output will be in the `dist/` folder. You can deploy this folder to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder or use Netlify CLI
- **GitHub Pages**: Push the `dist` folder to `gh-pages` branch
- **Other hosts**: Upload the contents of `dist/` to your web server

---

**Note**: Make sure all image assets are placed in the `/public/assets/images/` directory before building for production.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)








