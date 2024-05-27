import { useMediaQuery, Flex, Box, Heading, Text, Icon} from "@chakra-ui/react"
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di"

export default function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")

 return (
        

    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" 
        maxWith={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
         <Box alignSelf="center"px="32"py="16">
          <Heading frontweight="extrabold"color="cyan.500" size="4xl">1+</Heading>
          <Text fontSize="2xl"color="gray.400"> Still learning</Text>
        </Box>
        <Box alignSelf="center" px="32" py="16">
           <Text fontSize="2xl" color="gray.400">
            Product Designer and Developer, specialized in React
          </Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
              <Icon as={DiAndroid}  color="white" p="4" w="24" h="24"/>
              <Text color="white"p="4"fontSize="xl" fontWeight="bold">Android Apps</Text>
            </Flex>
          
           
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
            bg="gray.300" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400" }}>
              <Icon as={DiCodeigniter}  color="black" p="4" w="24" h="24"/>
              <Text color="black" p="4"fontSize="xl" fontWeight="bold">Flutter Apps</Text>
          
            </Flex>
           
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
             bg="gray.300" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.400" }}>
              <Icon as={DiWebplatform}  color="black" p="4" w="24" h="24"/>
              <Text color="black" p="4" fontSize="xl" fontWeight="bold">Web Apps</Text>
           
            </Flex>
            </Flex>
          </Box>  
      </Flex>
     
 
      

       
   
   
   

    )  

}