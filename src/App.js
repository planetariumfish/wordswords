import { ChakraProvider, Heading, VStack, Container } from "@chakra-ui/react";
import SearchField from "./SearchField";
import Results from "./Results";
import theme from "./theme";
import { useState } from "react";

function App() {
  const [definitions, setDefinitions] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={10} padding={10} w="1200px">
        <Container centerContent>
          <Heading as="h1" size="2xl" color="teal.700">
            Wordswords
          </Heading>
        </Container>
        <Container>
          <SearchField onSearch={(defs) => setDefinitions(defs)} />
        </Container>
        <Container>
          <Results definitions={definitions} />
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
