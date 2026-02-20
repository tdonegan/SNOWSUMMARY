# Whydaho Snow Recreation — PWA Setup

## Files
- `index.html` — The app
- `manifest.json` — PWA manifest (app name, icons, theme)
- `sw.js` — Service worker (caches app shell, fetches fresh weather data)
- `icon-192.png` — App icon (192×192)
- `icon-512.png` — App icon (512×512)

## Deploy to GitHub Pages (free)

1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it something like `whydaho-snow`
   - Set it to **Public**
   - Click **Create repository**
3. **Upload the files**:
   - On the repo page, click **"uploading an existing file"**
   - Drag all 5 files into the upload area
   - Click **Commit changes**
4. **Enable GitHub Pages**:
   - Go to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
   - Click **Save**
5. **Wait ~1 minute**, then your app is live at:
   `https://YOUR-USERNAME.github.io/whydaho-snow/`

## Install on Android

1. Open the URL in **Chrome** on your phone
2. Chrome will show an **"Add to Home Screen"** banner, or:
   - Tap the **⋮ menu** (top right)
   - Tap **"Install app"** or **"Add to Home screen"**
3. The app now appears on your home screen with its own icon
4. It opens fullscreen like a native app
5. Hit **Refresh All** anytime to pull fresh data

## Install on iPhone

1. Open the URL in **Safari**
2. Tap the **Share** button (square with arrow)
3. Tap **"Add to Home Screen"**
4. Tap **Add**

## Notes
- The app caches itself for offline loading, but always fetches fresh weather data when online
- No app store, no fees, no updates to manage — just a hosted web page
- To update the app, just replace the files in your GitHub repo
