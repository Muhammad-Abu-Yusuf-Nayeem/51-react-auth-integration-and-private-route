import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    //create user logic with firebase
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    // sign in user logic with firebase
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    // sign out user logic with firebase
    return signOut(auth);
  };


  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("User is signed in:", user);
  //       setUser(user);
  //     } else {
  //       console.log("No user is signed in.");
  //       setUser(null);
  //     }
  //   });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User is signed in:", currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        console.log("No user is signed in.");
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    user,
  };
  return (
    <AuthContext.Provider value={{ authInfo }}>
      {/* Main part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;

/**
 * create context with null default value
 * create AuthProvider
 * set a value : authInfo (name)
 * use the AuthProvider to wrap the RouterProvider in main.jsx
 * access the children props to render nested components: authProviders({children}) in the main.jsx
 */
