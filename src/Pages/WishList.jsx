import {
  Center,
  VStack,
  Flex,
  Image,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'
import { useFavContext } from '../Context/FavContext'
import { BsSuitHeart } from 'react-icons/bs'
import { IoMdCart } from 'react-icons/io'

export const WishList = () => {
  const { isFavorite, removeFavorite, emptyFavorites } = useFavContext()
  console.log(isFavorite)
  return (
    <Center>
      <VStack>
        {isFavorite.length ? (
          <>
            <Text fontSize="4xl">Mi lista de deseados</Text>
            <Flex wrap="wrap">
              {isFavorite.map((favorite) => (
                <VStack key={favorite.id} m={15} p={10} bg="gray">
                  <Image
                    h="300px"
                    src={favorite.attributes.image.data.attributes.url}
                  />
                  <Text fontSize="3xl">{favorite.attributes.title}</Text>
                  <Stack direction="row" spacing={4} py="20px">
                    <Button
                      size="sm"
                      leftIcon={<BsSuitHeart />}
                      colorScheme="teal"
                      variant="solid"
                      onClick={() => removeFavorite(favorite)}
                    >
                      Quitar de mi lista de deseos
                    </Button>
                    <Button
                      size="sm"
                      leftIcon={<IoMdCart />}
                      colorScheme="teal"
                      variant="outline"
                    >
                      Añadir al carrito
                    </Button>
                  </Stack>
                </VStack>
              ))}
            </Flex>
            <Button onClick={emptyFavorites}>Vaciar mi lista de deseos</Button>
          </>
        ) : (
          <Text>No hay nada aquí</Text>
        )}
      </VStack>
    </Center>
  )
}
