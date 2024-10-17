import { HStack, Icon } from '@chakra-ui/react'
import { FaRaspberryPi, FaEdge, FaAndroid   } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function Socials() {

    return (

       <HStack spacing="24" color="cyan.900">
              <Icon as={BiLogoVisualStudio} boxSize="50"/>
              <Icon as={FaRaspberryPi} boxSize="50" />
              <Icon as={FaEdge} boxSize="50" />
              <Icon as={FaAndroid} boxSize="50" />
       </HStack>
          
    )
    
}