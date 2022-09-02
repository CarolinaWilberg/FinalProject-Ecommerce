import { useFetch } from '../Hook/useFetch'
import { useFavContext } from '../Context/FavContext'
import {
  Center,
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  Spinner,
  Input,
  Stack,
} from '@chakra-ui/react'
import { CgChevronRightO, CgChevronLeftO } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import { BsChevronRight, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

export const Store = () => {
  const { data, loading, page, setPage, setFilterProduct, setFilterCategory } =
    useFetch()
  const { isFavorite, addFavorite, removeFavorite } = useFavContext()

  return (
    <Center w="full">
      <VStack>
        <Text>Buscar por:</Text>
        <HStack w="60%">
          <Input
            placeholder="Producto"
            onChange={(e) => setFilterProduct(e.target.value)}
          />
          <Input
            placeholder="Categoría"
            onChange={(e) => setFilterCategory(e.target.value)}
          />
        </HStack>
        <Flex wrap="wrap">
          {loading ? (
            <Spinner
              thickness="3px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#ff006e"
              size="lg"
            />
          ) : (
            data?.data.map((product) => (
              <VStack m={15} p={10} bg="gray" key={product.id}>
                <Image
                  h="300px"
                  src={product.attributes.image.data.attributes.url}
                />
                <Text>{product.attributes.title}</Text>
                <Stack direction="row" spacing={4} pt="10px">
                  <Button
                    as={NavLink}
                    to={`/product/${product.id}`}
                    size="sm"
                    leftIcon={<BsChevronRight />}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Detalle
                  </Button>
                  {isFavorite.includes(product) ? (
                    <>
                      <Button
                        size="sm"
                        leftIcon={<BsSuitHeartFill />}
                        colorScheme="teal"
                        variant="solid"
                        onClick={() => removeFavorite(product)}
                      >
                        Añadido a mi lista de deseados
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        size="sm"
                        leftIcon={<BsSuitHeart />}
                        colorScheme="teal"
                        variant="solid"
                        onClick={() => addFavorite(product)}
                      >
                        Añadir a mi lista de deseados
                      </Button>
                    </>
                  )}
                </Stack>
              </VStack>
            ))
          )}
        </Flex>
        <HStack>
          <Button
            disabled={page === 1 && 'disabled'}
            onClick={() => setPage(page - 1)}
          >
            <CgChevronLeftO fontSize="25px" _hover={{ color: '#ff006e' }} />
          </Button>
          <Button onClick={() => setPage(page + 1)}>
            <CgChevronRightO fontSize="25px" _hover={{ color: '#ff006e' }} />
          </Button>
        </HStack>
      </VStack>
    </Center>
  )
}
