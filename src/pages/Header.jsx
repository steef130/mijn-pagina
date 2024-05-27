import { Stack, useColorMode, useMediaQuery, Flex, Circle, Box, Text, Button, Image } from '@chakra-ui/react'
import MyImage from './ikke.jpg';

export default function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const[isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    const openEmail = () => {
        window.open('mailto:st.broeks@gmail.com');
      };

    return (
        <Stack>        
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf={"flex-end"} />
            <Flex direction={isNotSmallerScreen ? "row" : "column"} 
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start" >

                <Box mt={isNotSmallerScreen ? "0" : "16"} align='flex-start'>
                <Text fontSize="5xl" fontweight="semibold" color="cyan.900">Hello, I'm </Text>
                <Text fontSize="7xl" fontweight="bold" bgGradient="linear(to-r, blue.500, purple.600)" bgClip="text">Stefan Broeks</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>“Precisie in Code, Passie voor Leren, Creativiteit in Design - Jouw Frontend Vakman!”</Text>
                
                <Button mt={8} colorScheme="red" onClick={openEmail}>
                Contact me via email
                </Button>
                </Box>
                <Image         src={MyImage}
          alt="Mijn afbeelding"
          style={{ borderRadius: '50%', boxShadow: 'lg', width: '300px' }}
/>
        </Flex>
     </Stack>
    )

}