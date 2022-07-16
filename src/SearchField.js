import { HStack, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

function SearchField(props) {
  const [word, setWord] = useState("");

  async function getDefs() {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const json = await res.json();
    props.onSearch && props.onSearch(json);
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      getDefs();
    }
  }

  return (
    <HStack>
      <Input
        placeholder="Search for a word like theosophy or defenestrate"
        focusBorderColor="teal.500"
        onChange={(e) => setWord(e.target.value)}
        value={word}
        onKeyDown={(e) => handleEnter(e)}
      />
      <Button
        colorScheme="teal"
        onClick={(e) => {
          e.preventDefault();
          getDefs();
        }}
      >
        Let's go!
      </Button>
    </HStack>
  );
}

export default SearchField;
