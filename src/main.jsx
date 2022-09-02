import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './Context/LoginContext'
import { UserProvider } from './Context/UserContext'
import { FavProvider } from './Context/FavContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <UserProvider>
          <LoginProvider>
            <FavProvider>
              <App />
            </FavProvider>
          </LoginProvider>
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
