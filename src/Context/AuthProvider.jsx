import { useState } from "react";
import auth from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "./AuthContext";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password )
  }

  const authInfo = {
    user,
    loading,
    createUser,
  }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;