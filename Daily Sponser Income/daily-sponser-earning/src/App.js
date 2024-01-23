import { Box, Center, ChakraProvider, Stack, Text } from '@chakra-ui/react';
import DailyWallet from './components/DailyWallate';
import Wallet from './components/Wallet'; // Adjust the path based on your project structure

const App = () => {
  return (
    <ChakraProvider>
    <Center >
     <Stack align='center' mt={2} p={5} border='4px solid gold'>
      <Text fontSize='xxx-large' >My React Wallet App</Text>
      <Text fontSize='x-large' >Sponser & Get 200₹</Text>
      <Wallet />
      {/* Other components or content */}
      <Text fontSize='x-large' mt={4} >Sponser & Get Daily 2₹</Text>
      <DailyWallet/>
     </Stack>
    </Center>
    </ChakraProvider>
  );
};

export default App;
