import { useMediaQuery, Flex, Box, Heading, Text, Icon} from "@chakra-ui/react"
import { DiJsBadge, DiReact, DiHtml5 } from "react-icons/di"

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
            Web Designer and Developer, specialized in React
          </Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
              <Icon as={DiReact}  color="white" p="4" w="24" h="24"/>
              <Text color="white"p="4"fontSize="xl" fontWeight="bold">React</Text>
            </Flex>
          
           
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
            bg="yellow.300" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "orange.400" }}>
              <Icon as={DiJsBadge}  color="black" p="4" w="24" h="24"/>
              <Text color="black" p="4"fontSize="xl" fontWeight="bold">JavaScript</Text>
          
            </Flex>
           
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
             bg="red.500" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.400" }}>
              <Icon as={DiHtml5}  color="white" p="4" w="24" h="24"/>
              <Text color="white" p="4" fontSize="xl" fontWeight="bold">HTML</Text>
           
            </Flex>
            </Flex>
          </Box>  
      </Flex>
     
 
      

       
   
   
   

    )  

}