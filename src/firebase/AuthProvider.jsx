import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import axios from 'axios'; // Added axios import
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🟢 Login with Email and Password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // 🟢 Register with Email and Password
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // 🟢 Update Profile
    const profileUpdate = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // 🟢 Google Login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((res) => {
                console.log(res.user);
                toast.success("You have successfully logged in");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    // 🟢 Logout
    const logout = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                toast.success("Sign-out successful");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    // 🟢 Observe Auth State Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          try {
            console.log(currentUser);
            setUser(currentUser);
      
            if (currentUser?.email) {
              const user = { email: currentUser.email };
              console.log(user);
      
              const res = await axios.post(
                "https://b10a11-server-side-mdibrahimofc.vercel.app/jwt",
                user,
                { withCredentials: true }
              );
      
              console.log(res.data);
            }
          } catch (error) {
            console.error("Error fetching JWT:", error);
          } finally {
            setLoading(false);
          }
        });
      
        return () => unsubscribe();
      }, [auth, setUser, setLoading]);
      
    // 🟢 Auth Context Value
    const authInfo = {
        loading,
        user,
        login,
        logout,
        register,
        googleLogin,
        profileUpdate,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            <div>
                {children}
                <Toaster />
            </div>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
