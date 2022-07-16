import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

const PhoneticAudio = ({ audio }) => {
  if (audio === "" || !audio) return null;

  const sound = new Audio(audio);

  const start = () => {
    sound.play();
  };

  return (
    <IconButton
      aria-label="Listen"
      colorScheme="teal"
      size="xs"
      variant="ghost"
      icon={<FontAwesomeIcon icon={faVolumeLow} />}
      onClick={start}
    />
  );
};

export default PhoneticAudio;
