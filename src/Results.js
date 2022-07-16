import { Container } from "@chakra-ui/react";
import Definition from "./Definition";

function Results({ definitions }) {
  function parseDefs() {
    // get individual defs out of the json array and pass them on
    return definitions.map((e, i) => <Definition {...e} key={i} />);
  }

  return <Container>{parseDefs()}</Container>;
}

export default Results;
