import { Container } from "@chakra-ui/react";
import Definition from "./Definition";

function Results({ definitions }) {
  function parseDefs() {
    // get individual defs out of the json array and pass them on
    definitions.map((e) => <Definition word={e} />);
    console.log(definitions);
  }

  return <Container>{parseDefs()}</Container>;
}

export default Results;
