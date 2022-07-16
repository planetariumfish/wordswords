import { Container, Box, Heading, Text } from "@chakra-ui/react";
import PhoneticAudio from "./PhoneticAudio";

const Definition = ({ word, phonetics, meanings }) => {
  function parsePhonetics(e, i) {
    if (e.text) {
      return (
        <Box key={i} display="flex">
          <Text>{e.text}</Text>
          <PhoneticAudio audio={e.audio} />
        </Box>
      );
    }
  }

  function parseMeanings(e, i) {
    return (
      <Box key={i} my={4}>
        <Text>Part of speech: {e.partOfSpeech}</Text>
        <Box>{e.definitions.map((e) => printDefs(e, i))}</Box>
      </Box>
    );
  }

  function printDefs(e, i) {
    return (
      <Box key={i} my={2}>
        <Text>Definition: {e.definition}</Text>
        {e.example && (
          <Text>
            Example: "<Text as="i">{e.example}</Text>"
          </Text>
        )}
      </Box>
    );
  }

  return (
    <Container>
      <Heading as="h3" mt={3}>
        {word}
      </Heading>
      <Heading as="h4" size="md" mt={3}>
        Phonetics:
      </Heading>
      <Box>{phonetics.map((e, i) => parsePhonetics(e, i))}</Box>
      <Heading as="h4" size="md" mt={3}>
        Meanings:
      </Heading>
      <Box>{meanings.map((e, i) => parseMeanings(e, i))}</Box>
    </Container>
  );
};

export default Definition;
