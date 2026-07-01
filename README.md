# FabricLens AI

**Know Your Clothes Before You Wear Them.**

A premium AI-powered mobile application for Android and iPhone that analyzes clothing fabric using advanced image recognition technology. Built with professional-grade UI/UX, smooth animations, and comprehensive fabric intelligence.

## Features

### Core Functionality
- 📸 **Camera Capture** - Take photos with auto-focus, flash, and crop capabilities
- 🖼️ **Gallery Upload** - Upload existing photos for analysis
- 🤖 **AI Fabric Analysis** - Detailed fabric composition and properties
- 💾 **Scan History** - Automatic saving with search, filter, and favorites
- 🌍 **Multi-Language** - English, Hindi, Arabic with instant switching
- 🎨 **Theme Support** - Light, Dark, and System themes

### Analysis Metrics
- Fabric type identification
- Confidence percentage
- Fabric blend analysis
- Breathability, comfort, softness ratings
- Durability and stretch levels
- Water & wrinkle resistance
- Skin-friendliness and sustainability scores
- Quality level assessment
- Care instructions (washing, drying, ironing, storage)
- Estimated lifespan
- Environmental impact
- Weather suitability recommendations
- Occasion suggestions

### Premium UI
- Material Design 3 components
- Glassmorphism effects
- Smooth animations and transitions
- Beautiful gradient designs
- Rounded card layouts
- Professional typography

### User Management
- Google Sign-In
- Apple Sign-In
- Email authentication
- User profiles

### Monetization
- Google AdMob banner ads
- Rewarded ads integration
- Premium version (ad-free)

## Tech Stack

### Frontend
- **Mobile Frameworks**: React Native / Flutter with TypeScript
- **UI Library**: Material Design 3
- **State Management**: Redux / Provider
- **Navigation**: React Navigation / GetX
- **Animations**: Reanimated / Lottie

### Backend
- **Runtime**: Node.js with Express
- **Database**: MongoDB / Firebase
- **Authentication**: Firebase Auth / JWT
- **Image Processing**: Sharp / ImageMagick
- **AI/ML**: TensorFlow.js / Custom Models

### Services
- **Cloud Storage**: Firebase Storage / AWS S3
- **Notifications**: Firebase Cloud Messaging
- **Analytics**: Firebase Analytics / Mixpanel
- **Ads**: Google Mobile Ads SDK

## Project Structure

```
fabriclens-ai/
├── mobile/
│   ├── ios/                    # iOS native code
│   ├── android/                # Android native code
│   ├── src/
│   │   ├── screens/            # Screen components
│   │   ├── components/         # Reusable components
│   │   ├── navigation/         # Navigation structure
│   │   ├── store/              # State management
│   │   ├── services/           # API & services
│   │   ├── utils/              # Utilities & helpers
│   │   ├── assets/             # Images, fonts, animations
│   │   ├── localization/       # i18n configuration
│   │   └── theme/              # Theme definitions
│   ├── package.json
│   └── app.json
├── backend/
│   ├── src/
│   │   ├── controllers/        # Route controllers
│   │   ├── models/             # Database models
│   │   ├── middleware/         # Middleware functions
│   │   ├── routes/             # API routes
│   │   ├── services/           # Business logic
│   │   ├── config/             # Configuration
│   │   └── utils/              # Utilities
│   ├── package.json
│   └��─ server.js
├── ml/
│   ├── models/                 # ML models
│   ├── preprocessing/          # Image preprocessing
│   └── inference/              # Model inference
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│   └── SETUP.md
└── .github/
    └── workflows/              # CI/CD pipelines
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- React Native CLI / Flutter SDK
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

1. Clone the repository
```bash
git clone https://github.com/gjhgjbb129-source/My-first-app.git
cd My-first-app
```

2. Install dependencies
```bash
cd mobile && npm install
cd ../backend && npm install
```

3. Configure environment variables
```bash
cp .env.example .env
```

4. Start development
```bash
# Mobile
cd mobile && npm start

# Backend
cd backend && npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/google` - Google Sign-In
- `POST /api/auth/apple` - Apple Sign-In
- `POST /api/auth/logout` - User logout

### Fabric Analysis
- `POST /api/analyze` - Analyze fabric from image
- `GET /api/history` - Get scan history
- `GET /api/history/:id` - Get specific scan
- `DELETE /api/history/:id` - Delete scan
- `POST /api/history/:id/favorite` - Toggle favorite

### User Settings
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile
- `PUT /api/user/preferences` - Update preferences
- `DELETE /api/user/data` - Delete all user data

## Screens

1. **Splash Screen** - Animated introduction
2. **Auth Screens** - Sign-in / Sign-up
3. **Home Screen** - Main interface with scan button
4. **Camera Screen** - Photo capture with enhancements
5. **Analysis Screen** - Detailed fabric information
6. **History Screen** - Scan history with filters
7. **Settings Screen** - App configuration
8. **Profile Screen** - User information

## Localization

Supported languages:
- English (en)
- Hindi (hi)
- Arabic (ar)

Switch languages instantly in settings without restarting the app.

## Theme Support

- Light Mode
- Dark Mode
- System Theme (follows device settings)

## Security

- End-to-end encrypted authentication
- Secure image storage with user consent
- HTTPS for all API communications
- Regular security audits
- Privacy compliance (GDPR, CCPA)

## Performance

- Lazy loading of screens
- Image optimization before upload
- Efficient caching strategies
- Optimized database queries
- Code splitting and bundling

## Testing

```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Ensure all tests pass

## Deployment

### iOS
```bash
cd mobile/ios && pod install
xcode-build archive -scheme FabricLensAI -archivePath ./build/FabricLensAI.xcarchive
```

### Android
```bash
cd mobile/android && ./gradlew assembleRelease
```

### Backend
```bash
npm run build && npm run deploy
```

## License

MIT License - See LICENSE file for details

## Support

For issues and feature requests, please visit the [GitHub Issues](https://github.com/gjhgjbb129-source/My-first-app/issues) page.

---

**Version**: 1.0.0  
**Last Updated**: 2026  
**Status**: Production Ready
