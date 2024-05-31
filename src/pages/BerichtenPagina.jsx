import achtergond from './achtergrond-website.jpg';
import { Box, Button, VStack, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export const BerichtenPagina = () => {
  const [berichten, setBerichten] = useState([]);
  const [naam, setNaam] = useState('');
  const [bericht, setBericht] = useState('');

  const voegBerichtToe = async () => {
    try {
      const response = await fetch("https://script.google.com/d/1M6TkoocOEHb8LziX1nlkBOZHgucjbEorWpRcJJmtJW-1the2RsMFaEWT/edit?usp=drive_link", {
        method: "POST",
        body: JSON.stringify({ naam, bericht,id: Date.now() }),
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