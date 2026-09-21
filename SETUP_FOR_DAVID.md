# 🎯 Family Chore App - Setup Guide for David

## What You're Getting

A complete, fully-functional chore tracking web application with:
- **Parent Dashboard** - Monitor Jaxon & Piper's chores
- **Kid Dashboards** - Kids mark chores complete & track device time
- **Device Timer** - Countdown with 5-minute warning notifications
- **All Chores Pre-Loaded** - Jaxon's 15 chores + Piper's 14 chores

## 🚀 Get Started in 3 Steps

### Step 1: Install Node.js (One-time)
1. Go to https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Run the installer, click through all defaults
4. Restart your computer

**Verify it worked:**
```bash
node --version
npm --version
```

### Step 2: Start the App Locally
```bash
cd chore-app
npm install
npm start
```

Your browser opens to `http://localhost:3000` automatically.

### Step 3: Test With Your Family

**Your Login (Parent):**
- Click "Parent Login"
- Password: `parent123`
- You see both kids' chores & progress

**Jaxon's Login:**
- Click "Jaxon (9 years old)"
- Password: `jaxon123`
- He can mark chores & see device time

**Piper's Login:**
- Click "Piper (13 years old)"
- Password: `piper123`
- She can mark chores & track time

---

## 🌐 Put It Online (Free Forever)

Once you test locally and like it, deploy to Vercel (free hosting):

### Part A: GitHub Setup (5 min)
1. Go to https://github.com and sign up (free)
2. Go to https://github.com/new
3. Name it: `family-chore-app`
4. Choose "Public"
5. Click "Create repository"
6. Copy the URL from the next page

### Part B: Push Your Code (5 min)
Open terminal in `chore-app` folder and run:

```bash
git init
git add .
git commit -m "Family Chore App"
git branch -M main
git remote add origin https://github.com/YOURNAME/family-chore-app.git
git push -u origin main
```

(Replace YOURNAME with your GitHub username)

### Part C: Deploy to Vercel (3 min)
1. Go to https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Connect your GitHub account
4. Click "Import Project"
5. Select `family-chore-app`
6. Click "Deploy"

**Wait 2-3 minutes... then you get a live URL!**

Example: `https://family-chore-app-xxx.vercel.app`

Share this URL with Jaxon and Piper - they can access from any device!

---

## 🔐 Change Passwords (Optional)

Edit `src/App.jsx`:

**Find these lines and change:**
```javascript
// Line ~55
setParentPassword('parent123');  // Change to your password

// Line ~16-17 (Jaxon)
password: 'jaxon123',  // Change to Jaxon's password

// Line ~32-33 (Piper)
password: 'piper123',  // Change to Piper's password
```

Then restart the app: `npm start`

---

## ✏️ Customize Chores

Open `src/App.jsx` and find the `kids` array. Each chore has:
- `name` - What the chore is called
- `reward` - Device time earned (in minutes)
- `days` - Which days it's assigned

**Example:**
```javascript
{ id: 1, name: 'Homework', reward: 10, days: [false, false, false, false, false, false, false] }
```

Change reward value: `reward: 10` → `reward: 20` (now worth 20 minutes)

---

## 📱 How to Use

### Parent Dashboard
1. Log in with password `parent123`
2. Click any child's name to expand
3. See all their chores & progress
4. Click day boxes to mark complete/incomplete
5. Click "Reset Weekly Chores" on Sunday

### Kid Dashboards
1. Log in with their password
2. See today's chores
3. Click "Mark Complete" for each done chore
4. Watch device time grow
5. Click "Start Device Timer" to use earned time

### Device Timer
- Shows countdown of remaining time
- Sends notification at 5 minutes left
- Sends notification when time expires
- Can pause/resume

---

## 🎁 What's Pre-Loaded

### Jaxon's Chores (9 years old)
1. Homework - 10 min
2. Clean Room - 20 min
3. Vacuum Room - 20 min
4. Wipe Bathroom Countertops - 15 min
5. Empty Bathroom Trash (All) - 15 min
6. Shower Curtain Closed - 10 min
7. Clean Coffee Table - 10 min
8. Take Out Trash w/ Piper - 15 min
9. Replace Kitchen Trash Bag - 15 min
10. Fold Blankets & Rack - 20 min
11. Hold Bag for Dog Poop - 15 min
12. Throw Away Dog Poop - 10 min
13. Patio & Yard Clean - 20 min
14. Dog Food Full & Lid - 10 min
15. Mop Tile Floors - 30 min

### Piper's Chores (13 years old)
1. Homework - 15 min
2. Clean Room - 30 min
3. Vacuum Room - 25 min
4. Sweep & Mop Bathroom - 35 min
5. Vacuum Living Room - 30 min
6. Load & Unload Dishwasher - 20 min
7. Take Out Trash w/ Jaxon - 20 min
8. Wipe Kitchen Counters - 20 min
9. Sweep Tile & Office - 25 min
10. Scoop Dog Poop - 20 min
11. Clear Kitchen Table & Wipe - 15 min
12. Wipe Toilet Seat/Lid - 15 min
13. Dog Water Full - 10 min
14. Mop Tile & Office - 45 min

---

## 🆘 Troubleshooting

**App won't start:**
- Is Node.js installed? Run `node --version`
- Are you in the `chore-app` folder? Run `cd chore-app`
- Run `npm install` again

**Build failed on Vercel:**
- Go to Vercel dashboard
- Click "Redeploy" button
- Wait a few minutes

**Password not working:**
- Did you restart the app? (`npm start`)
- Did you save the file after editing? (Ctrl+S)
- Check for typos in password

**Timer notifications not showing:**
- Browser may prompt for permission first time
- Check browser notification settings

---

## 📚 Full Documentation

- **README.md** - Complete feature guide
- **DEPLOYMENT.md** - All deployment options
- **QUICKSTART.md** - 5-minute setup

---

## 🎉 You're All Set!

1. ✅ Install Node.js
2. ✅ Run `npm install` then `npm start`
3. ✅ Test with family locally
4. ✅ Deploy to Vercel (free)
5. ✅ Share URL with Jaxon & Piper
6. ✅ Start tracking chores!

**Questions?** Check the README.md in the project folder.

---

**Happy chore tracking, David!** 🚀
