import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    //create user logic with firebase
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    // sign in user logic with firebase
    return signInWithEmailAndPassword(auth, email, password);
    };
    
    const signOutUser = () => {
    // sign out user logic with firebase
    return signOut(auth);
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
      }
    });
    return () => {
        unsubscribe();
        setUser(null);
    };
  }, []);

  const authInfo = {
    createUser,
      signInUser,
    signOutUser,
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
