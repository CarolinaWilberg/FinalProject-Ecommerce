import { useState } from 'react'
import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Icon,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'

export const Login = ({ toggleLogin }) => {
  const [showPassword, setShowPassword] = useState(false)

  const [values, setValues] = useState({
    userName: '',
    password: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <VStack as="form" spacing={5}>
        <FormControl>
          <FormLabel htmlFor="userName">Nombre de usuario</FormLabel>
          <Input
            id="userName"
            name="userName"
            type="text"
            value={values.userName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <InputGroup>
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
            />
            <InputRightElement h={'full'}>
              <Icon
                cursor="pointer"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ImEye /> : <ImEyeBlocked />}
              </Icon>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button color="white" bg="#ff006e" mr={3}>
          Iniciar Sesión
        </Button>
        <HStack>
          <Text>No tienes cuenta?</Text>
          <Link color="blue" onClick={toggleLogin}>
            Registrate
          </Link>
        </HStack>
      </VStack>
    </>
  )
}
