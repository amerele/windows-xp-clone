import Button from "../../components/Button";
import { StyledTaskbar } from "./style";
import { Image } from "@chakra-ui/react";

export const Taskbar = () => {
  return (
    <StyledTaskbar>
      <Button>
        <Image h={"30px"} src="src/assets/start.png"></Image>
      </Button>
    </StyledTaskbar>
  );
};
