import { useState } from 'react'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword} from 'firebase/auth'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
    createUserWithEmailAndPassword(auth, email, password)
  
    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add display name to user
      await res.user.updateProfile({ displayName })

      setIsPending(false)
      setError(null)
    } 
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { signup, error, isPending }
}
