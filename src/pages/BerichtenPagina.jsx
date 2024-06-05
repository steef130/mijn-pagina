import achtergond from './achtergrond-website.jpg';
import { Box, Button, VStack, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BerichtenPagina = () => {
  const [berichten, setBerichten] = useState([]);
  const [naam, setNaam] = useState('');
  const [bericht, setBericht] = useState('');
  
  const voegBerichtToe = async () => {
    try {
      const newId = uuidv4();
      const response = await fetch("https://drive.google.com/file/d/1Ld9b_2VcsQso4uy-Y5Si8JoOnshC7D2i", {
        method: "POST",
        body: JSON.stringify({ naam, bericht,id: newId }),
        headers: { "Content-Type": "application/json;charset=utf-8" },
        });

      if (!response.ok) {
        throw new Error("Er is een fout opgetreden bij het toevoegen van het bericht.");
      }
      
      const nieuwBericht = await response.json();
      setBerichten((prevBerichten) => [...prevBerichten, nieuwBericht]);
    } catch (error) {
      console.error("Fout bij het toevoegen van het bericht:", error);
    }
  };

  return (
      <div style={{ backgroundImage: `url(${achtergond})`, height: '100vh',	backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <Button onClick={voegBerichtToe} color="white" bg="blue.600">
              Voeg Bericht Toe
            </Button>
          </div>
        </Box>
        <Box w="20rem" bg="gray.200" padding="10px" margin="1rem">
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