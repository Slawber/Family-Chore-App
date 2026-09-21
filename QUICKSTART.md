# ⚡ Quick Start (5 Minutes)

## 1. Install Node.js
Download from https://nodejs.org/ (LTS version)

Verify installation:
```bash
node --version
npm --version
```

## 2. Navigate to Project
```bash
cd chore-app
```

## 3. Install Dependencies
```bash
npm install
```

## 4. Start App
```bash
npm start
```

The app opens at `http://localhost:3000`

## 5. Login & Test

### Parent Login
- Click "Parent Login"
- Password: `parent123`
- See all kids' chores and progress

### Kid Login
- Click "Jaxon" or "Piper"
- Password: `jaxon123` or `piper123`
- Mark chores complete
- Watch device time accumulate

## 6. Go Live (Vercel)

**First time setup:**

1. Create GitHub account: https://github.com
2. Create repository named `family-chore-app`
3. Push this code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/family-chore-app.git
git push -u origin main
```

4. Go to https://vercel.com
5. Sign up with GitHub
6. Import `family-chore-app` repository
7. Click Deploy
8. Get live URL in 2-3 minutes! 🎉

---

## Features Included

✅ Parent & Kid Logins
✅ 15 Chores for Jaxon
✅ 14 Chores for Piper
✅ Device Time Tracking
✅ Weekly Progress
✅ Device Timer with Notifications
✅ Responsive Design (Mobile/Tablet/Desktop)
✅ Easy Reset
✅ Beautiful UI

---

## Passwords (Change Anytime)

**Parent:** `parent123`
**Jaxon:** `jaxon123`
**Piper:** `piper123`

Edit in `src/App.jsx` to change

---

## What's Included

```
chore-app/
├── src/
│   ├── App.jsx (Main app logic)
│   ├── index.js (Entry point)
│   ├── index.css (Styles)
│   └── components/
│       ├── LoginScreen.jsx
│       ├── ParentDashboard.jsx
│       ├── KidDashboard.jsx
│       └── DeviceTimer.jsx
├── public/
│   └── index.html
├── package.json
├── README.md (Full documentation)
├── DEPLOYMENT.md (Deployment options)
└── vercel.json (Vercel config)
```

---

## Next Steps

1. ✅ Start locally (`npm start`)
2. ✅ Test with family
3. ✅ Deploy to Vercel (free)
4. ✅ Share URL with Jaxon and Piper
5. ✅ Customize chores/passwords as needed

---

**Questions? Check README.md for full documentation!**
