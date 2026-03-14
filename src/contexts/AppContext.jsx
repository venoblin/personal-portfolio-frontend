import { useState, useEffect, createContext } from 'react'
import { storageGet, storageSet } from '../utils'
import content from '../data'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [portfolioType, setPortfolioType] = useState(null)
  const [portfolioContent, setPortfolioContent] = useState(null)
  const queryParams = new URLSearchParams(window.location.search)

  const setType = (type) => {
    storageSet('portfolioType', type)
    setPortfolioType(type)
    setPortfolioContent(content[type])
  }

  useEffect(() => {
    const type = storageGet('portfolioType')

    if (type && type !== null) {
      setPortfolioType(type)
      setPortfolioContent(content[type])
    } else {
      setType('fullStack')
    }
  }, [])

  useEffect(() => {
    const foundType = queryParams.get('type')

    if (foundType && foundType.length > 0) {
      switch (foundType) {
        case 'devOps':
          setType('devOps')
          break
        case 'fullStack':
          setType('fullStack')
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
        case 'sysAdmin':
          setType('sysAdmin')
          break
        case 'network':
          setType('network')
          break
        default:
          setType('fullStack')
      }
    }
  }, [])

  return (
    <AppContext.Provider value={{ portfolioType, portfolioContent }}>
      {props.children}
    </AppContext.Provider>
  )
}
