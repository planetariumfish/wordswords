import { Container, Text, Heading } from "@chakra-ui/react";

const Definition = ({ word, phonetics, meanings }) => {
  console.log(word);

  return (
    <Container>
      <Heading as="h2">{word}</Heading>
      <Text>{phonetics}</Text>
      <Text>{meanings}</Text>
    </Container>
  );
};

export default Definition;
