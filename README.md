# Varosync Interactive Website - React & TypeScript

A modern, interactive website built with React, TypeScript, and Three.js featuring stunning 3D animations, glassmorphism design, and responsive layouts.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Interactive 3D Graphics**: Three.js powered 3D hero animations with mouse tracking
- **Glassmorphism Design**: Beautiful translucent UI elements with backdrop filters
- **Responsive Layout**: Mobile-first design that works on all devices
- **React Router**: Client-side routing for seamless navigation
- **Form Validation**: Real-time form validation with TypeScript
- **Performance Optimized**: Code splitting and optimized build process

## 📁 Project Structure

```
Varosync-Website/
├── public/
│   ├── index.html          # Main HTML entry point
│   └── assets/             # Static assets (images, fonts, 3D models)
│       ├── images/
│       ├── fonts/
│       └── 3d/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero3D.tsx
│   │   └── ContactForm.tsx
│   ├── pages/             # Page components
│   │   ├── Landing.tsx
│   │   ├── Technology.tsx
│   │   ├── Company.tsx
│   │   ├── News.tsx
│   │   └── Contact.tsx
│   ├── styles/            # CSS modules
│   │   ├── global.css
│   │   ├── landing.css
│   │   ├── technology.css
│   │   ├── company.css
│   │   ├── news.css
│   │   └── contact.css
│   ├── hooks/             # Custom React hooks (future use)
│   ├── App.tsx            # Main app component with routing
│   └── main.tsx           # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Pages & Design

### 1. Landing Page (`/`)
- **Background**: Light purple gradients with faint variations
- **Features**: Interactive 3D hero section, feature cards, welcome content
- **3D Element**: Animated icosahedron with particle effects and mouse interaction

### 2. Technology Page (`/technology`)
- **Background**: Light blue gradients with faint variations
- **Features**: Technology showcase with feature lists and descriptions

### 3. Company Page (`/company`)
- **Background**: Lime green gradients with faint variations
- **Features**: Mission, vision, values, team statistics

### 4. News Page (`/news`)
- **Background**: Reddish pink gradients with faint variations
- **Features**: News grid layout with featured articles

### 5. Contact Page (`/contact`)
- **Background**: Orange gradients with faint variations
- **Features**: Contact form with validation, contact information, social links

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Varosync-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The development server supports hot reload

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🏗️ Build & Deployment

### Production Build
```bash
npm run build
```

This creates a `dist/` directory with optimized production files.

### Deployment
The built files can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

## 🎯 Key Components

### Hero3D Component
- **Technology**: Three.js with React hooks
- **Features**: Interactive 3D icosahedron, wireframe overlay, floating particles
- **Interaction**: Mouse/touch tracking for rotation control
- **Performance**: Optimized animation loop with cleanup

### ContactForm Component
- **Validation**: Real-time form validation with TypeScript
- **Features**: Character counter, success/error states, loading states
- **UX**: Smooth animations and visual feedback

### Routing
- **Technology**: React Router v6
- **Features**: Client-side routing, active link highlighting, smooth transitions

## 🎨 Design System

### Color Scheme
- **Landing**: Purple variations (#7b1fa2, #8e24aa, #f3e5f5)
- **Technology**: Blue variations (#1976d2, #1e88e5, #e3f2fd)
- **Company**: Green variations (#689f38, #7cb342, #f1f8e9)
- **News**: Pink variations (#c2185b, #d81b60, #fce4ec)
- **Contact**: Orange variations (#f57c00, #ff9800, #fff3e0)

### Typography
- **Headings**: Inter/System fonts with various weights
- **Body**: Optimized for readability across devices

### Effects
- **Glassmorphism**: Backdrop blur effects throughout
- **Gradients**: Subtle background variations
- **Animations**: Smooth hover and interaction effects

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px
- **Features**: Adaptive layouts, optimized touch interactions

## 🔧 Technical Features

### TypeScript Integration
- **Type Safety**: Full TypeScript support with strict mode
- **Interfaces**: Well-defined component and data types
- **Development**: Enhanced IDE support and error checking

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Vite-powered build optimizations
- **Tree Shaking**: Unused code elimination
- **Lazy Loading**: Component-level lazy loading where applicable

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: Progressive enhancement for older browsers

## 🚀 Future Enhancements

- [ ] Add animation libraries (Framer Motion)
- [ ] Implement dark mode toggle
- [ ] Add blog functionality
- [ ] Integrate headless CMS
- [ ] Add unit and integration tests
- [ ] Implement PWA features
- [ ] Add internationalization (i18n)

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please contact:
- Email: support@varosync.com
- Website: [varosync.com](https://varosync.com)

---

**Built with ❤️ by the Varosync Team** 