import { Container, Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

const Definition = ({ word, phonetics, meanings }) => {
  console.log(word, phonetics, meanings);

  function parsePhonetics(e, i) {
    if (e.text) {
      return (
        <Box key={i} display="flex">
          <Text>{e.text}</Text>
          <IconButton
            aria-label="Listen"
            colorScheme="teal"
            size="xs"
            variant="ghost"
            icon={<FontAwesomeIcon icon={faVolumeLow} />}
            // onClick= play the sound at {e.audio}
          />
        </Box>
      );
    }
  }

  return (
    <Container>
      <Heading as="h2">{word}</Heading>
      <Box>{phonetics.map((e, i) => parsePhonetics(e, i))}</Box>
      {/* <Text>{meanings}</Text> */}
    </Container>
  );
};

export default Definition;
