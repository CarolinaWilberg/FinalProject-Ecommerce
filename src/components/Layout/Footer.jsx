import { VStack, HStack, Text } from '@chakra-ui/react'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'

export const Footer = () => {
  return (
    <VStack bg="#0d1b2a" py="20px" mt="40px">
      <Text color="white">soy footer</Text>
      <HStack>
        <BsInstagram color="white" />
        <BsFacebook color="white" />
        <BsTwitter color="white" />
      </HStack>
    </VStack>
  )
}
