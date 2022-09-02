import {
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Login } from './Login'
import { FaUserAstronaut } from 'react-icons/fa'
import { Register } from './Register'
import { useLoginContext } from '../../Context/LoginContext'

export const AccessModal = () => {
  const { isOpen, onOpen, onClose } = useLoginContext()
  const [isLogin, setIsLogin] = useState(true)

  const toggleLogin = () => setIsLogin(!isLogin)

  return (
    <>
      <Icon
        color="white"
        _hover={{ color: '#ff006e' }}
        fontSize="25px"
        cursor="pointer"
        onClick={onOpen}
      >
        <FaUserAstronaut />
      </Icon>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isLogin ? 'Iniciar sesión' : 'Registrarse'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLogin ? (
              <Login toggleLogin={toggleLogin} />
            ) : (
              <Register toggleLogin={toggleLogin} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
