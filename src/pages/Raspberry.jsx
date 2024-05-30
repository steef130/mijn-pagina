import { Grid, GridItem, Text, Link, Button, IconButton } from '@chakra-ui/react'
import arcade from './arcade.jpg';
import minecraft from './MinecraftPI.jpg';
import { SiRetropie } from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";

export const Raspberry = () => {

   
    return (
        <div>
        <Grid
     h='100vh'
     templateRows='repeat(2, 1fr)'
     templateColumns='repeat(5, 1fr)'
     gap={4}
     >
     <GridItem rowSpan={2} colSpan={1} >
     <img src={arcade} alt="My Arcade"style={{ objectFit: 'cover', width: '100%', height: '100%' }}  />
        </GridItem>
     <GridItem colSpan={2} bg='papayawhip' color='gray.500' padding='10px'	 >
     <Text fontSize='xl' fontWeight="bold'">Raspberry</Text> 
     <Text >Met Raspberry PI computers kun je veel leuke dingen doen. Ik heb er nu 5 waarvan er 1 een internetradio is. Dit is een van de eerste Raspberry PI 1 modellen. Hier op is het programma Volumio geinstalleerd.
        Het leuke aan dit programma is dat er ook een APP voor is zodat je de Raspberry kan bedienen met je telefoon. Dan heb ik nog 2 Raspberry Pi 3 modellen. Deze zijn omgebouwd tot een Arcade deze kun je zien op de afbeelding.
        De ander is een soort Gameboy. Het idee van de Arcade was om er niet oude spellen op te spelen maar Minecraft. De laatste 2 zijn raspberry PI 4 modellen waarvan er 1 een mini computer is met scherm en toetsenbord en de laatste is een router. 
        Op de mini computer heb ik nu Minecraft PI staan om zo te proberen of ik het spel ook kan spelen met een joystick. Als mij dit gaat lukken dan bouw ik de router ook om naar een Arcade. </Text>
     </GridItem>
     <GridItem colSpan={2} bg='papayawhip' >
     <img src={minecraft} alt="My Arcade"style={{ objectFit: 'cover', width: '100%', height: '100%'  }} ></img>
      </GridItem>
     <GridItem colSpan={4} color='white' bg='tomato' padding='10px' >
      <Text>Wil je meer weten over internetradio met een PI is hier een link:</Text>
      <Button bg='green.200'>
      <Link to="https://volumio.com/" fontWeight={"bold"}>Volumio</Link>
      </Button>
      <Text>Wil je meer weten over Arcade met een PI is hier een link:</Text>
      <Link to="https://retropie.org.uk/" >
      <IconButton icon={<SiRetropie />} color='black' bg='red' isRound="true"></IconButton>
      </Link>
      <Text>Wil je meer weten over Minecraft met een PI is hier een link:</Text>
      <Link to="https://www.minecraft.net/en-us/edition/pi">
      <IconButton icon={<TbBrandMinecraft />} color='black' bg='green' isRound="true"></IconButton>
      </Link>
  
     </GridItem>
     </Grid>
        
      
        </div>
    )
}