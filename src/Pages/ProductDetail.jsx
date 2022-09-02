import {
  HStack,
  VStack,
  Spinner,
  Text,
  Image,
  Button,
  Center,
  Stack,
} from '@chakra-ui/react'
import { BsChevronLeft, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { IoMdCart } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useFavContext } from '../Context/FavContext'

export const ProductDetail = () => {
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const { isFavorite, addFavorite, removeFavorite } = useFavContext()
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:1337/api/products/${id}?populate=image`)
      .then((res) => res.json())
      .then((info) => {
        setLoading(false)
        setData(info)
      })
      .catch((err) => setError(err))
  }, [])
  console.log(data, error)
  return (
    <>
      {loading ? (
        <Spinner
          thickness="3px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#ff006e"
          size="lg"
        />
      ) : (
        <Center>
          <HStack w="80%" bg="gray">
            <Image
              h="400px"
              src={data?.data.attributes.image.data.attributes.url}
            />
            <VStack px="20px">
              <Text fontSize="3xl">{data?.data.attributes.title}</Text>
              <Text>{data?.data.attributes.description}</Text>
              <Text>Precio: $ {data?.data.attributes.price}</Text>
              <Stack direction="row" spacing={4} py="20px">
                <Button
                  as={NavLink}
                  to={`/store`}
                  size="sm"
                  leftIcon={<BsChevronLeft />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Volver a la tienda
                </Button>
                {isFavorite.includes(data?.data) ? (
                  <>
                    <Button
                      size="sm"
                      leftIcon={<BsSuitHeartFill />}
                      colorScheme="teal"
                      variant="solid"
                      onClick={() => removeFavorite(data?.data)}
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
                      onClick={() => addFavorite(data?.data)}
                    >
                      Añadir a mi lista de deseados
                    </Button>
                  </>
                )}
                <Button
                  size="sm"
                  leftIcon={<IoMdCart />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Añadir al carrito
                </Button>
              </Stack>
            </VStack>
          </HStack>
        </Center>
      )}
    </>
  )
}
