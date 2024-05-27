import { HStack, Icon } from '@chakra-ui/react'
import { FaUbuntu, FaRaspberryPi, FaFirefoxBrowser, FaAndroid   } from "react-icons/fa6";

export default function Socials() {

    return (

       <HStack spacing="24">
              <Icon as={FaUbuntu} boxSize="50"/>
              <Icon as={FaRaspberryPi} boxSize="50" />
              <Icon as={FaFirefoxBrowser} boxSize="50" />
              <Icon as={FaAndroid} boxSize="50" />
       </HStack>
          
    )
    
}