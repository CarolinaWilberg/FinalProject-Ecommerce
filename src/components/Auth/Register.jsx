import { useState } from 'react'
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Icon,
  Button,
  InputGroup,
  InputRightElement,
  HStack,
  Text,
  Link,
} from '@chakra-ui/react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
// import { AccessModal } from './Modal'

export const Register = ({ toggleLogin }) => {
  const [showPassword, setShowPassword] = useState(false)

  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
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
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <InputGroup>
            <Input
              id="password"
              name="password"
              type="password"
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
        <FormControl>
          <FormLabel htmlFor="repeatPassword">Repetir contraseña</FormLabel>
          <InputGroup>
            <Input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              value={values.repeatPassword}
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
          Registrarse
        </Button>
        <HStack>
          <Text>Ya tienes cuenta?</Text>
          <Link color="blue" onClick={toggleLogin}>
            Iniciar sesión
          </Link>
        </HStack>
      </VStack>
    </>
  )
}
