import { useState } from 'react';
import { DroneZoom  } from './DroneZoom';
import { DroneDetail } from './DroneDetail';


export const Drone = () => {
    

    const [selectedItem, setSelectedItem] = useState();
    
    
    return (
      <div>
     {selectedItem ? (
        <DroneDetail item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <DroneZoom clickFn={setSelectedItem} />
      )}
     </div>
  );
};
    