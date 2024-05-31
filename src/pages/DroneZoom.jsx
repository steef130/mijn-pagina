import { Center } from '@chakra-ui/react'; 
import { droneData } from '../pages/droneData.js';
import { DroneDetail } from './DroneDetail.jsx';

export const DroneZoom = ({  clickFn }) => {



 return (
  
   
   <Center gap={8} h="100vh" bgColor="blue.100">
      {droneData.drone.map((item) => (
        <DroneDetail clickFn={clickFn} item={item} key={item.id} />
      ))}
    </Center>
  );
};  