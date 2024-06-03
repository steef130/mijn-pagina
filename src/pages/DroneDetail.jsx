import {  Image, Card, CardBody, Stack, Heading, Text, Button,  CardFooter } from '@chakra-ui/react';

export const DroneDetail = ({ item, clickFn }) => {
  return (
    
<div 
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderradius: 'lg',
      padding: '1rem',
      
    }}>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  padding= {2}
  bg= 'blue.50'
   justifyContent={'center'}
  w='60rem'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={item.image}
    alt={item.naam}
    borderradius='lg'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{item.model}</Heading>
      <Text>{item.merk}</Text>
      <Text>{item.type}</Text>
      <Text py='2'>
      {item.bijzonderheden}
      </Text>
    </CardBody>

    <CardFooter>
    <Button bg="blue.500"    w="fit-content" onClick={() => clickFn()}>
              Back to overview
            </Button>
    </CardFooter>
  </Stack>
</Card>
</div>
  );
}