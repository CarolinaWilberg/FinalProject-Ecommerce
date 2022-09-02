import { NavLink } from 'react-router-dom'
import {
  HStack,
  VStack,
  Link,
  Text,
  Image,
  Icon,
  useColorMode,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { CartDrawer } from '../Cart/CartDrawer'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { CgChevronDown } from 'react-icons/cg'
import logo from '../../assets/game-control.png'
import { AccessModal } from '../Auth/Modal'
import { useUserContext } from '../../Context/UserContext'

export const Header = () => {
  const { user } = useUserContext()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="#0d1b2a"
      w="full"
      py="20px"
      px="70px"
      mb="40px"
    >
      <HStack>
        <Image src={logo} w="60px" mr={5} />
        <VStack spacing={-2}>
          <Text fontSize="xl" color="#ff006e">
            The Ada
          </Text>
          <Text fontSize="3xl" color="#ffbe0b">
            Gaming
          </Text>
          <Text fontSize="xl" color="#ff006e">
            Store
          </Text>
        </VStack>
      </HStack>
      <HStack spacing={8} color="#0d1b2a">
        <Link as={NavLink} color="white" _hover={{ color: '#ff006e' }} to="/">
          Inicio
        </Link>
        <Link
          as={NavLink}
          color="white"
          _hover={{ color: '#ff006e' }}
          to="/store"
        >
          Tienda
        </Link>
        <Text color="white">|</Text>
        <CartDrawer />
        <Icon
          fontSize="25px"
          color="white"
          _hover={{ color: '#ff006e' }}
          cursor="pointer"
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? <RiMoonClearFill /> : <RiSunFill />}
        </Icon>
        <AccessModal />
        {user && (
          <Menu>
            <MenuButton
              as={Button}
              color="white"
              bg="#0d1b2a"
              _hover={{ color: '#ff006e' }}
              _expanded={{ bg: '#0d1b2a', color: '#ffbe0b' }}
              _focus={{ bg: '#0d1b2a' }}
              rightIcon={<CgChevronDown />}
            >
              Usuario
            </MenuButton>
            <MenuList>
              <MenuItem as={NavLink} to="/profile">
                Mi perfil
              </MenuItem>
              <MenuItem as={NavLink} to="/wish-list">
                Mi lista de deseados
              </MenuItem>
              <MenuItem as={NavLink} to="/my-cart">
                Mis compras
              </MenuItem>
              <MenuItem>Cerrar sesión</MenuItem>
            </MenuList>
          </Menu>
        )}
      </HStack>
    </HStack>
  )
}
