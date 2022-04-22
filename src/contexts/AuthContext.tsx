import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../services/auth";
import { toast } from "react-toastify";

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  token?: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOutWithGoogle: () => void;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);
export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  // This function is used to persist user data, so that it never stops returning
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  //This function is used to exit the application
  async function signOutWithGoogle() {
    signOut(auth);
    router.reload();
  }

  //This function is used to open a window with the Google login
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { displayName, photoURL, uid, email } = result.user;

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
          token
        });

        toast.success("Logado com sucesso");

      }).catch((error) => {
        toast.error("Você cancelou o método de login com o Google");
      });
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle,
      signOutWithGoogle
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
