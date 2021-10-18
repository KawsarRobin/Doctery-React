import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import InitializeAuthentication from '../components/Firebase/Firebase.init';

InitializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [displayName, setDisplayName] = useState('');

  const auth = getAuth();

  /* Sign in with google */
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setError('');
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  /* Register with email and password */

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  };
  const registrationUsingEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError('');
        setUser(result.user);
        setName();
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  /* Update name */
  const setName = () => {
    updateProfile(auth.currentUser, { displayName: displayName }).then(
      (result) => {}
    );
  };

  /* Sign in with email and password to existing account */

  const signInUsingEmailAndPassword = (e) => {
    setIsLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError('');
        setUser(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  /* Observe user activities */

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  /* Log out user */

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    registrationUsingEmail,
    signInUsingEmailAndPassword,
    handleNameChange,
    error,
  };
};

export default useFirebase;
