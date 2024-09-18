import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider =  new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }


      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

      const logOut = async () => {
        setLoading(true)
        // await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
        //   withCredentials: true,
        // })
        return signOut(auth)
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          if (currentUser) {
            console.log('this is user');
           
          }
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [])
      const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        updateUserProfile,
        logOut
      }
    
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      )
    }
    
 
    