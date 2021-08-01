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
  signup(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> | null
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  signup: () => {
    throw new Error('Cannot find signup function deffinition')
  },
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>()

  // eslint-disable-next-line no-console
  if (!auth) console.error('Firebase connection failed')

  const signup = (email: string, password: string) => {
    if (auth) return auth.createUserWithEmailAndPassword(email, password)
    else return null
  }

  useEffect(() => {
    if (auth)
      return auth.onAuthStateChanged(user => {
        setCurrentUser(user)
      })
    else return
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
