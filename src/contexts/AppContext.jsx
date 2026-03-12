import { useState, useEffect, createContext } from 'react'
import { storageGet, storageSet } from '../utils'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [portfolioType, setPortfolioType] = useState(null)
  const queryParams = new URLSearchParams(window.location.search)

  const setType = (type) => {
    storageSet('portfolioType', type)
    setType(type)
  }

  useEffect(() => {
    const type = storageGet('portfolioType')

    if (type && type !== null) {
      setPortfolioType(type)
    }
  }, [])

  useEffect(() => {
    const foundType = queryParams.get('type')

    if (foundType && foundType.length > 0) {
      switch (foundType) {
        case 'devops':
          setType('devops')
          break
        case 'fullstack':
          setType('fullstack')
          break
        case 'it':
          setType('it')
          break
        case 'linux':
          setType('linux')
          break
        case 'swe':
          setType('swe')
          break
        case 'sysadmin':
          setType('sysadmin')
          break
        default:
          setType('landingpage')
      }
    }
  }, [])

  return (
    <AppContext.Provider value={{ portfolioType, setPortfolioType }}>
      {props.children}
    </AppContext.Provider>
  )
}
