import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { StyledTaskbar, TaskbarLeft } from "./style";
import { Box, Image } from "@chakra-ui/react";
import dayjs from "dayjs";

export const Taskbar = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setTime(dayjs().format("hh:mm A"));
  }, []);
  return (
    <StyledTaskbar>
      <Box>
        <Button>
          <Image h={"30px"} src="src/assets/start.png"></Image>
        </Button>
      </Box>
      <Box>
        <TaskbarLeft>
          <Box>
            <Image h={15} src="src/assets/sound-icon.png"></Image>
          </Box>
          <Box>
            <Image h={15} src="src/assets/anti-virus-icon.png"></Image>
          </Box>
          <Box marginLeft={'10px'}>
            {time}
          </Box>
        </TaskbarLeft>
      </Box>
    </StyledTaskbar>
  );
};
