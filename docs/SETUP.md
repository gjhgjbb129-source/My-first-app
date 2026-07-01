# FabricLens AI - Complete Setup Guide

## 📋 Prerequisites

- Node.js 16+
- npm or yarn
- React Native CLI
- Xcode (iOS)
- Android Studio (Android)
- MongoDB
- Firebase Account

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/gjhgjbb129-source/My-first-app.git
cd My-first-app
```

### 2. Mobile Setup
```bash
cd mobile
npm install
```

**iOS:**
```bash
cd ios && pod install && cd ..
npm run ios
```

**Android:**
```bash
npm run android
```

### 3. Backend Setup
```bash
cd backend
npm install
npm run dev
```

### 4. Environment Configuration
Create `.env` in backend folder:

```env
MONGODB_URI=mongodb://localhost:27017/fabriclens
FIREBASE_PROJECT_ID=your-project-id
JWT_SECRET=your-secret-key
PORT=5000
```

## 📦 Project Structure

```
fabriclens-ai/
├── mobile/              # React Native app
│   └── src/
│       ├── screens/     # UI screens
│       ├── navigation/  # Navigation setup
│       ├── store/       # Redux
│       └── assets/      # Images, fonts
├── backend/             # Node.js API
│   └── src/
│       ├── models/      # DB schemas
│       ├── routes/      # API endpoints
│       └── server.ts    # Express app
└── docs/                # Documentation
```

## 🎯 Key Screens

- **SplashScreen** - Animated intro
- **HomeScreen** - Main interface
- **CameraScreen** - Photo capture
- **AnalysisScreen** - Results display
- **HistoryScreen** - Scan history
- **SettingsScreen** - Configuration

## 🔐 Authentication

- Google Sign-In
- Apple Sign-In
- Email/Password
- Firebase Auth

## 🌐 Localization

- English (en)
- Hindi (hi)
- Arabic (ar)

## 🎨 Themes

- Light Mode
- Dark Mode
- System Theme

## 📊 Analysis Features

- Fabric type identification
- Confidence percentage
- Breathability rating
- Comfort score
- Durability assessment
- Care instructions
- Sustainability score
- Health recommendations

## 🧪 Testing

```bash
# Mobile tests
cd mobile && npm test

# Backend tests
cd backend && npm test
```

## 🚢 Deployment

### iOS
```bash
cd mobile/ios
pod install
xcodebuild -scheme FabricLensAI -archivePath ./build/app.xcarchive archive
```

### Android
```bash
cd mobile/android
./gradlew assembleRelease
```

## 🐛 Troubleshooting

### MongoDB Connection
- Ensure MongoDB is running
- Check connection string
- Verify network access

### Build Issues
```bash
# Clear cache
rm -rf node_modules
npm cache clean --force
npm install
```

### Firebase Issues
- Download service account key
- Verify project configuration
- Enable authentication methods

## 📝 License

MIT License

## 💬 Support

For help, create an issue on GitHub.
