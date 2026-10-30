# 🎓 SCHOLARNET — Nigeria's Premier JAMB & WAEC CBT Prep Platform

**ScholarNet** is a modern, high-performance educational web application built specifically for Nigerian secondary school students and candidates preparing for **JAMB UTME**, **WAEC SSCE**, **NECO**, and **Post-UTME** examinations.

---

## 🌟 Key Features

1. **Interactive CBT Practice & Mock Exam Simulator**
   - Realistic JAMB CBT interface with timer, interactive question grid/map, question flags, and instant scoring.
   - Comprehensive question bank covering Mathematics, English Language, Physics, Chemistry, Biology, and Economics.
   - Detailed step-by-step explanations for every question after test submission.

2. **Khan Academy-Style Topic Lessons**
   - Deep, structured syllabi for WAEC and JAMB.
   - Worked examples with formula breakdowns, tips, and direct "Take Quiz" handoffs.

3. **Gamified Student Dashboard**
   - Live study streak tracker (`🔥 days`).
   - Mock exam countdown timer to upcoming examination dates.
   - Lesson completion metrics, average scores, and recent activity logs.

4. **National Hall of Fame / Leaderboard**
   - Live podium for Top 3 Nigerian students with state badges.
   - Filterable rankings by timeframe (This Week, This Month, All Time) and by Subject.

5. **Firebase Auth & Firestore Integration**
   - Email/password authentication and Google Sign-In.
   - Firestore cloud persistence for student user profiles and test history.

---

## 🚀 Folder Structure

```
scholarnet/
├── index.html              # Landing page with hero, stats, and testimonials
├── firebase.json           # Firebase Hosting configuration
├── .firebaserc             # Firebase project pointer (scholarnet-b67eb)
├── css/
│   └── main.css            # 2,300+ lines of custom Nigerian green/gold styling
├── js/
│   ├── firebase-config.js  # Firebase v10 SDK integration (Auth, Firestore, Analytics)
│   ├── quiz.js             # CBT Quiz Engine with 50+ JAMB past questions
│   └── app.js              # Theme switcher, countdown, toasts, and UI animations
└── pages/
    ├── auth.html           # Split-screen Login & Registration
    ├── dashboard.html      # Student dashboard with metrics and study reminders
    ├── subjects.html       # 20+ JAMB/WAEC subjects with live search & filters
    ├── practice.html       # Full CBT exam simulator & past question practice
    ├── learn.html          # Topic-by-topic interactive lessons
    └── leaderboard.html    # National student leaderboards & badges
```

---

## 💻 How to Run Locally

Because the application uses ES modules for Firebase and the Quiz Engine, serve it with any local static HTTP server:

### Option A: Using Python (Built-in)
```bash
cd "C:\Users\USER\.gemini\antigravity\scratch\scholarnet"
python -m http.server 8080
```
Then visit: `http://localhost:8080`

### Option B: Using Node.js `npx serve`
```bash
cd "C:\Users\USER\.gemini\antigravity\scratch\scholarnet"
npx serve .
```

---

## 🌐 Deploying to Firebase Hosting

To deploy ScholarNet to your live Firebase domain:

```bash
npx -y firebase-tools@latest deploy --only hosting
```
Your live URL will be:
`https://scholarnet-b67eb.web.app` or `https://scholarnet-b67eb.firebaseapp.com`
