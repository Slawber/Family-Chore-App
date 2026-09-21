# 🎯 Family Chore Tracker App

A full-featured chore tracking application for families with parent and kid dashboards, device time rewards, and real-time tracking.

## ✨ Features

- **Parent Dashboard**: Monitor all children's chores and rewards
- **Kid Dashboards**: Kids can mark chores complete and track earned device time
- **Device Timer**: Countdown timer with notifications at 5 minutes remaining
- **Weekly Chore Tracking**: Visual progress across the week
- **Reward System**: Automatic calculation of device time earned per completed chore
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Easy Reset**: Reset weekly chores with one click

## 👶 Pre-Loaded Children

- **Jaxon** (9 years old) - 15 chores loaded
- **Piper** (13 years old) - 14 chores loaded

## 🔐 Default Logins

**Parent Login:**
- Password: `parent123`

**Kid Logins:**
- Jaxon: `jaxon123`
- Piper: `piper123`

## 🚀 Quick Start

### Local Development

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/

2. **Clone or download this project**

3. **Navigate to project directory**
   ```bash
   cd chore-app
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm start
   ```

6. **Open browser**
   - The app will automatically open at `http://localhost:3000`

## 🌐 Deploy to Vercel (Free)

### Step 1: Create GitHub Account
- Go to https://github.com
- Sign up for a free account

### Step 2: Create GitHub Repository
- Click the `+` icon (top right) → New repository
- Name it `family-chore-app`
- Choose "Public"
- Click "Create repository"

### Step 3: Upload Code to GitHub
```bash
cd /path/to/chore-app
git init
git add .
git commit -m "Initial commit - Family Chore App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/family-chore-app.git
git push -u origin main
```

### Step 4: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" → Choose "Continue with GitHub"
3. Connect your GitHub account
4. Click "Import Project"
5. Select `family-chore-app` repository
6. Click "Deploy"
7. Wait 2-3 minutes for deployment
8. Your app will get a live URL: `https://family-chore-app-xxx.vercel.app`

## 📱 Using the App

### For Parents
1. Click "Parent Login"
2. Enter password: `parent123`
3. View all children's chores and progress
4. Click on each child's name to:
   - Mark chores complete/incomplete
   - View earned device time
   - Reset weekly chores

### For Kids
1. Select your name
2. Enter your password (e.g., `jaxon123`)
3. View your chores
4. Click "Mark Complete" to log completed tasks
5. Watch your earned device time grow
6. Use "Start Device Timer" to track device time usage

## ⏰ Device Timer

- Shows countdown of remaining device time
- Displays progress bar
- Sends browser notification at 5 minutes remaining
- Sends completion notification when time expires
- Can pause/resume timer

## 🔧 Customization

### Change Passwords
Edit `src/App.jsx`:
- Parent password: Line 55 `setParentPassword('your_password')`
- Kid passwords: Lines 16-17 and 32-33 in the kids array

### Modify Chores
Edit `src/App.jsx` in the `kids` array to:
- Add/remove chores
- Change reward values
- Adjust chore names

### Add More Kids
Edit `src/App.jsx` and add new objects to the `kids` array with:
- `id`: Unique identifier
- `name`: Display name
- `age`: Child's age
- `password`: Login password
- `chores`: Array of chore objects

## 📊 Chore Reward Values

Default rewards are already set for Jaxon and Piper:
- Simple tasks: 10-15 minutes
- Medium tasks: 20-30 minutes
- Complex tasks: 35-45 minutes

Adjust in `src/App.jsx` by changing the `reward` value for each chore.

## 🐛 Troubleshooting

**App won't start:**
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` folder and run `npm install` again
- Clear browser cache (Ctrl+Shift+Delete)

**Timer notifications not showing:**
- Browser must grant notification permission (will prompt on first use)
- Check browser notification settings

**App not updating in browser:**
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Close and reopen browser

## 📝 Weekly Checklist

**Every Sunday:**
1. Parent logs in
2. Review weekly progress
3. Click "Reset Weekly Chores" for each child
4. Discuss next week's goals

## 🔒 Privacy & Security

- All data is stored locally in your browser
- No data sent to external servers
- Each device keeps its own copy of data
- Sharing the app URL lets others access data on that device

**For Cloud Backup:** Upgrade to add Firebase integration (optional paid feature)

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Make sure all files are present in the project folder
3. Verify Node.js is installed and updated

## 📄 License

This project is open source and free to use and modify for your family.

---

**Enjoy tracking chores and watching device time rewards pile up! 🎉**
