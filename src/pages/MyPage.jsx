import { Flex } from '@chakra-ui/react'
import Header from './Header.jsx'
import Socials from './Socials.jsx'
import Profile from './Profile.jsx'
 export const MyPage = () =>{
  
  

  return (
  
    

      <Flex align={"center"} justify={"center"} direction={"column"	}>
      <Header></Header>
      <Socials></Socials>
      <Profile></Profile>
      </Flex>
   
  );
};
export default MyPage