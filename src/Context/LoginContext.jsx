import { useState, createContext, useContext } from 'react'

const LoginContext = createContext()

export const useLoginContext = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  return (
    <LoginContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </LoginContext.Provider>
  )
}
