import { useEffect, useState } from 'react';
import firebaseInitialization from '../../FirebaseInfo/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

firebaseInitialization();
const useFirebase = () => {
    // Use state for login and signup 
    const [user, setUser] = useState({});
    
    // Take auth provider
    const auth = getAuth();

    // Make auth provider
    const googleProvider = new GoogleAuthProvider(); // Google atuh provider
    const githubProvider = new GithubAuthProvider(); // Github auth provider

    // Handle google signin and sign up after clicking the button
    const handleGoogleSignin = () => {
          return signInWithPopup(auth, googleProvider);

    }

    // Handle github signin after clicking button 
    const handleGithubSignin = () => {
        return signInWithPopup(auth, githubProvider);
  }

    // Use effect for handle changing user 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
               setUser(user);
            }
        });
    }, [])

    // Handle signout  after clicking button
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    return {
        user,
        handleGithubSignin,
        handleGoogleSignin,
        handleSignOut

    }
}

export default useFirebase;