import { Flex, VStack,  Heading, IconButton, useColorMode, Spacer } from '@chakra-ui/react'
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import Header from './Header.jsx'
import Socials from './Socials.jsx'
import Profile from './Profile.jsx'
 export const MyPage = () =>{
  
  const{ colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading 
        ml="8"size="md" frontWeight='semibold' color="cyan.400">Hello</Heading>
      <Spacer></Spacer>
      <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
      <IconButton icon={<FaGithub />} isRound="true"></IconButton>
      <IconButton icon={<FaYoutube />} isRound="true"></IconButton>
      <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>

      </Flex>
      <Header></Header>
      <Socials></Socials>
      <Profile></Profile>
    </VStack>
  );
};
export default MyPage