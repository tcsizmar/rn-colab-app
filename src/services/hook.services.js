import { useState } from 'react'

export default function useDataFunnel() {
  const [agenda, setAgenda] = useState([])

  return {
    agenda,
    setAgenda
  }
}
