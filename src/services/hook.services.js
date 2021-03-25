import { useState } from 'react'

export default function useDataFunnel() {
  const [user, setUser] = useState()
  
  return {
    user,
    setUser
  }
}
