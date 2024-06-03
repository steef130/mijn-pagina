import { Center, Text } from '@chakra-ui/react';
import { droneData } from '../pages/droneData.js';
import { DroneCard } from './DroneCard.jsx';

export const DroneZoom = ({ clickFn }) => {
  return (
    <div style={{ backgroundColor: 'blue.50', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Text fontSize="3xl" align={'center'}  fontWeight="bold" color="cyan.900" padding="2rem">
        Mijn dronecollectie
      </Text>

      <Center gap={8} flexWrap="wrap" flexGrow={1}>
        {droneData.drone.map((item) => (
          <DroneCard clickFn={clickFn} item={item} key={item.id} />
        ))}
      </Center>
    </div>
  );
};