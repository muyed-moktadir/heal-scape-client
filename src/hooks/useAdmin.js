import { useState } from 'react'

export default function useAdmin() {
  const [admin , setAdmin] = useState(true)
  return[admin]
}
