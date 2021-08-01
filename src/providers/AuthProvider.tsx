import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react'
import { auth } from 'firebase'
import firebase from 'firebase/app'

interface AuthContextType {
  currentUser: firebase.User | null | undefined
  signup(email: string, password: string): Promise<firebase.auth.UserCredential>
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  signup: () => {
    throw new Error('Cannot find deleteTask function deffinition')
  },
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>()

  const signup = (email: string, password: string) =>
    auth.createUserWithEmailAndPassword(email, password)

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
