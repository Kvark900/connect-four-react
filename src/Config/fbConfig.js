import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCz2prJe11w2tNy5ESaERrSmODKzKAXpJE",
  authDomain: "connect-four-7904d.firebaseapp.com",
  databaseURL: "https://connect-four-7904d.firebaseio.com",
  projectId: "connect-four-7904d",
  storageBucket: "connect-four-7904d.appspot.com",
  messagingSenderId: "327447548526",
  appId: "1:327447548526:web:055381e93480fa58da0c7f",
  measurementId: "G-NR58J1KJG3"
};

class Firebase {
  static instance;

  constructor() {
    if (!app.apps.length) app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  static getInstance() {
    if (this.instance == null)
      return new Firebase();
    else return this.instance;
  }

  // *** Auth API ***
  async registerUser(user) {
    return await this.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(registered => {
          registered.user.updateProfile(
              {displayName: user.username}
          );
          this.db.collection("users")
              .doc(registered.user.uid).set(
              {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username
              }
          )
        })
  }

  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  currentUser() {
    return this.auth.currentUser;
  }

  listenAuthChange() {
    return
  }

  signOut() {
    return this.auth.signOut();
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  updatePassword(password) {
    return this.auth.currentUser.updatePassword(password);
  }

// *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;



