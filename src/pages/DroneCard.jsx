import {
    Card,
    Image,
    CardBody,
    Stack,
    Heading,
    Text,
    
  } from '@chakra-ui/react';
 
  
  export const DroneCard = ({ item, clickFn }) => {
    return (
      <Card
        borderRadius="xl"
        w="sm"
        h="30rem"
        backgroundColor={'blue.50'}
        onClick={() => clickFn(item)}
        cursor="pointer"
        _hover={{ transform: 'scale(1.01)' }}
      >
        <CardBody>
          <Image h={64} w="sm" src={item.image} borderRadius="xl" />
          <Stack mt="6" spacing="3">
            <Heading size="md" color='cyan.900'>{item.model}</Heading>
            <Text color='cyan.900'>{item.merk}</Text>
           
          </Stack>
        </CardBody>
      </Card>
    );
  };