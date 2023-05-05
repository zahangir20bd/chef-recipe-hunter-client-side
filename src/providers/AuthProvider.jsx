import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// Main AuthProvider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // New user Create authentication
  const createUser = (name, email, password, image) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password authentication
  const signIN = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google Authentication
  const googleSignIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // Sign in with Github Authentication
  const gitHubSignIN = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider);
  };

  // Logout Authentication
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Unsubscribe handler unsubscribe from the site
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      console.log("logged in user inside auth state observer", loggedInUser);
      setUser(loggedInUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIN,
    logOut,
    loading,
    googleSignIn,
    gitHubSignIN,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
