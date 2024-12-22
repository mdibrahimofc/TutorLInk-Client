import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import swal from 'sweetalert';
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        photoURL: photo,
        })
    }

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then ( res => {
            console.log(res.user);
            toast.success("You have successfully log in")
        })
        .catch(err=> {
            toast.error(err);
        })
    }

    const logout = () => {
        setLoading(true)
        signOut(auth)
        .then(res => {
            console.log(res);
            toast.success("sign out successfull")
        })
        .catch(err=> {
            toast.error(err);
        })
    }

    const authInfo = {
        loading,
        user,
        login,
        logout,
        register,
        googleLogin,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            <div>
                {children}
                <Toaster/>
            </div>
        </AuthContext.Provider>
    );
};

export default AuthProvider;