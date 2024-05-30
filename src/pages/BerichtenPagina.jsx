
import { Box, Button,  VStack, Input, Text } from '@chakra-ui/react';
import berichtenData from './berichten.json'; 
import React, { useState, useEffect } from 'react';
import fs from 'fs';
import achtergond from './achtergrond-website.jpg';



 export const BerichtenPagina = () => {
  const [berichten, setBerichten] = useState([]);
  const [naam, setNaam] = useState('');
  const [bericht, setBericht] = useState('');

  useEffect(() => {
    
    setBerichten(berichtenData);
  }, []);
  const updateBerichten = async () => {
    try {
      const berichtenData = JSON.parse(await fs.promises.readFile('berichten.json', 'utf-8'));
      berichtenData.push(nieuwBericht);
      await fs.promises.writeFile('berichten.json', JSON.stringify(berichtenData));
    } catch (error) {
      console.error('Fout bij bijwerken van berichten:', error);
    }
  };
  
  const voegBerichtToe = () => {
    if (naam && bericht) {
      
      const nieuwBericht = {
        id: Date.now(),
        naam,
        bericht,
      };
  
     
      if (berichten.length >= 5) {
        
        const nieuweBerichten = berichten.slice(1);
        setBerichten(nieuweBerichten.concat(nieuwBericht));
      } else {
        setBerichten(berichten.concat(nieuwBericht));
      }
      
    

     
      setNaam('');
      setBericht('');
  
      
    }
  };

  return (
      <div style={{ backgroundImage: `url(${achtergond})`, height: '100vh',	backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <VStack align={"center"} justify={"center"} >
         
      <Box  w='20rem'bg='gray.200' padding='10px' margin='1rem'  >
      <Text fontSize='2xl'>Berichten Pagina</Text>
      <div>
        <Input
          type="text"
          placeholder="Naam"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          bg='white'
        />
        <Input
          type="text"
          placeholder="Bericht (max. 150 tekens)"
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
          bg='white'
        />
        <Button onClick={voegBerichtToe} color='white' bg='blue.600'>Voeg Bericht Toe</Button>
      </div>
      </Box>
      <Box  w='20rem'bg='gray.200' padding='10px' margin='1rem'>
        {berichten.map((bericht) => (
          <div key={bericht.id}>
            <strong>{bericht.naam}:</strong> {bericht.bericht}
          </div>
        ))}
      </Box>
     </VStack>
    </div>
  
  );
};





