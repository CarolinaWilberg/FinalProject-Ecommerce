import { NavLink } from 'react-router-dom'
import {
  Icon,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { IoMdCart } from 'react-icons/io'

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()

  return (
    <>
      <Icon
        fontSize="25px"
        color="white"
        cursor="pointer"
        _hover={{ color: '#ff006e' }}
        onClick={onOpen}
      >
        <IoMdCart />
      </Icon>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <Text>Hola soy tu compra</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button as={NavLink} colorScheme="blue" to="/my-cart">
              Go to Cart
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
