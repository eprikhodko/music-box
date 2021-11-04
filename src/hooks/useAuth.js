import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from "../lib/firebase"

function useAuth() {
  const [currentUser, setCurrentUser] = useState(null)
  const auth = getAuth(firebaseApp)

  useEffect(() => {
    const authListener = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    )

    return authListener
  }, [])

  return currentUser
}

export default useAuth
