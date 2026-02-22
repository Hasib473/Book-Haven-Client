import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
        const googlePorvider = new GoogleAuthProvider();


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const SingInWithGoogleFunction = () => {
      return  signInWithPopup(auth, googlePorvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    

    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        SingInWithGoogleFunction
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;