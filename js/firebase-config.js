// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  limit, 
  addDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoX1svHYUO5nhThRsmTtHT6IR2OWHSNds",
  authDomain: "scholarnet-b67eb.firebaseapp.com",
  projectId: "scholarnet-b67eb",
  storageBucket: "scholarnet-b67eb.firebasestorage.app",
  messagingSenderId: "157786117944",
  appId: "1:157786117944:web:cf7bd735604001169e53cd",
  measurementId: "G-JSF3DBG31W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Safe Analytics Loader
let analyticsInstance = null;
try {
  import("https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js").then(({ getAnalytics, isSupported }) => {
    isSupported().then(supported => {
      if (supported) analyticsInstance = getAnalytics(app);
    }).catch(() => {});
  }).catch(() => {});
} catch (e) {
  // Gracefully ignored in environments where analytics isn't supported
}
export const analytics = analyticsInstance;

// Auth state observer
export function observeAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}

// Sign in with email/password
export async function signIn(email, password) {
  localStorage.removeItem('scholarnet_guest');
  return signInWithEmailAndPassword(auth, email, password);
}

// Sign up
export async function signUp(email, password, userData) {
  localStorage.removeItem('scholarnet_guest');
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", cred.user.uid), {
    ...userData,
    uid: cred.user.uid,
    createdAt: serverTimestamp(),
    lastActiveDate: serverTimestamp(),
    score: 0,
    streak: 1,
    lessonsCompleted: 0,
    quizzesTaken: 0
  });
  return cred;
}

// Google Sign In
export async function googleSignIn() {
  localStorage.removeItem('scholarnet_guest');
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    await setDoc(userRef, {
      displayName: user.displayName || 'Scholar',
      email: user.email || '',
      photoURL: user.photoURL || '',
      uid: user.uid,
      createdAt: serverTimestamp(),
      lastActiveDate: serverTimestamp(),
      score: 0, 
      streak: 1, 
      lessonsCompleted: 0, 
      quizzesTaken: 0
    });
  }
  return result;
}

// Sign out
export async function logOut() { 
  localStorage.removeItem('scholarnet_guest');
  return signOut(auth); 
}

// Save quiz result
export async function saveQuizResult(userId, subject, score, total, year) {
  const safeYear = year ? String(year) : '2024';
  const percentage = Math.round((score / total) * 100);

  if (userId && !userId.startsWith('guest_')) {
    try {
      await addDoc(collection(db, "quizResults"), {
        userId, 
        subject: subject || 'General', 
        score: Number(score) || 0, 
        total: Number(total) || 1, 
        year: safeYear,
        timestamp: serverTimestamp(),
        percentage
      });
      const userRef = doc(db, "users", userId);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        await updateDoc(userRef, {
          quizzesTaken: (data.quizzesTaken || 0) + 1,
          score: Math.max(data.score || 0, percentage),
          lastActiveDate: serverTimestamp()
        });
      }
    } catch (err) {
      console.warn("Firestore save failed, caching locally:", err);
    }
  }

  // Always cache locally so offline / guest mode is 100% functional
  saveLocalQuizResult(subject, score, total, safeYear, percentage);
}

// Local storage fallback for guest / offline practice
function saveLocalQuizResult(subject, score, total, year, percentage) {
  try {
    const list = JSON.parse(localStorage.getItem('scholarnet_local_results') || '[]');
    list.unshift({
      subject,
      score,
      total,
      year,
      percentage,
      date: new Date().toISOString()
    });
    localStorage.setItem('scholarnet_local_results', JSON.stringify(list.slice(0, 50)));

    // Update guest profile stats
    const guest = getGuestProfile();
    if (guest) {
      guest.quizzesTaken = (guest.quizzesTaken || 0) + 1;
      guest.score = Math.max(guest.score || 0, percentage);
      localStorage.setItem('scholarnet_guest', JSON.stringify(guest));
    }
  } catch (e) {
    // Ignore storage quota errors
  }
}

// Get leaderboard
export async function getLeaderboard(limitN = 10) {
  try {
    const q = query(collection(db, "users"), orderBy("score", "desc"), limit(limitN));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.warn("Leaderboard fetch error, fallback to default benchmarks", e);
    return [];
  }
}

// Get user profile
export async function getUserProfile(uid) {
  if (!uid) return null;
  if (uid.startsWith('guest_')) {
    return getGuestProfile();
  }
  try {
    const snap = await getDoc(doc(db, "users", uid));
    return snap.exists() ? snap.data() : null;
  } catch (e) {
    return null;
  }
}

// Update user streak
export async function updateStreak(uid) {
  if (!uid || uid.startsWith('guest_')) {
    const guest = getGuestProfile() || { streak: 1 };
    guest.streak = (guest.streak || 0) + 1;
    localStorage.setItem('scholarnet_guest', JSON.stringify(guest));
    return guest.streak;
  }
  try {
    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      const data = snap.data();
      const last = data.lastActiveDate ? data.lastActiveDate.toDate() : null;
      const now = new Date();
      let streak = data.streak || 0;
      if (last) {
        const diff = Math.floor((now - last) / 86400000);
        if (diff === 1) streak++;
        else if (diff > 1) streak = 1;
      } else {
        streak = 1;
      }
      await updateDoc(userRef, { streak, lastActiveDate: serverTimestamp() });
      return streak;
    }
  } catch (e) {
    return 1;
  }
}

// Guest profile helpers
export function getGuestProfile() {
  try {
    const raw = localStorage.getItem('scholarnet_guest');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setGuestSession(name = 'Scholar Student') {
  const guestData = {
    uid: 'guest_' + Math.floor(Math.random() * 1000000),
    displayName: name,
    email: 'guest@scholarnet.ng',
    isGuest: true,
    score: 82,
    streak: 3,
    lessonsCompleted: 8,
    quizzesTaken: 4,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem('scholarnet_guest', JSON.stringify(guestData));
  return guestData;
}
