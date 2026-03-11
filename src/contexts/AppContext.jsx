import { useState, useEffect, createContext } from 'react'
import { storageGet } from '../utils'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [type, setType] = useState(null)

  useEffect(() => {
    const type = storageGet('type')

    if (type && type !== null) {
      setType(type)
    }
  }, [])

  useEffect()

  return (
    <AppContext.provider values={{ type, setType }}>
      {props.children}
    </AppContext.provider>
  )
}
