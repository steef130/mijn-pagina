import { HStack, Icon } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

export default function Socials() {

    return (

       <HStack spacing="24">
              <Icon as={FaLinkedin} boxSize="50"/>
              <Icon as={FaGithub} boxSize="50" />
              <Icon as={FaYoutube} boxSize="50" />
       </HStack>
          
    )
    
}