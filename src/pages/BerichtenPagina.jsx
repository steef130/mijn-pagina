import { Box, Button, VStack, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import achtergond from './achtergrond-website.jpg';
import { v4 as uuidv4 } from 'uuid';

export const BerichtenPagina = () => {
  const [berichten, setBerichten] = useState([
    {
      id: '1',
      naam: 'Stefan',
      bericht: 'Dit is een test',
    },
  ]);
  const [naam, setNaam] = useState('');
  const [bericht, setBericht] = useState('');

  const addBericht = (event) => {
    event.preventDefault();
    setBerichten((prevBerichten) => [
      ...prevBerichten,
      { id: uuidv4(), naam, bericht },
    ]);
    setNaam('');
    setBericht('');
  };

 

  return (
    <div style={{ background: `url(${achtergond})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <VStack align="center" justify="center">
        <Box w="20rem" bg="gray.200" padding="10px" margin="1rem">
          <Text fontSize="2xl">Berichten Pagina</Text>
          <div>
            <Input
              type="text"
              placeholder="Naam"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              bg="white"
            />
            <Input
              type="text"
              placeholder="Bericht (max. 150 tekens)"
              value={bericht}
              onChange={(e) => setBericht(e.target.value)}
              bg="white"
            />
            <Button type="submit" color="white" bg="blue.600" onClick={addBericht}>
              Voeg Bericht Toe
            </Button>
          </div>
        </Box>
        <Box w="20rem" bg="gray.200" padding="10px" margin="1rem">
          {berichten.map((bericht) => (
            <div className= "bericht" key={bericht.naam}>
              <strong>{bericht.naam}:</strong> {bericht.bericht}
            </div>
          ))}
        </Box>
      </VStack>
    </div>
  );
};
