import {   
   Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Button, } from '@chakra-ui/react';  


export const DroneDetail = ({ item, ClickFn }) => { 


  return (
  
    <Center bgColor="blue.100" h="100vh" flexDirection="column">
      <Card borderRadius="l" w="sm" h="sm">
        <CardBody>
          <Image h="md" w="100%" src={item.image} borderRadius="xl" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.model}</Heading>
            <Text>{item.description}</Text>
            <Text>{item.bijzonderheden}</Text>
            <Button w="fit-content" onClick={() => clickFn()}>
              Back to overview
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};