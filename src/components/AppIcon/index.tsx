import * as React from "react";
import { StyledAppIcon } from "./style";
import { Box, Image, Text } from "@chakra-ui/react";

export const AppIcon: React.FC<TApp> = ({ name, ref }) => {
  return (
    <StyledAppIcon>
      <Image src={`src/assets/${name.toLowerCase()}.${ref ? ref : "png"}`}></Image>
      <Text>{name}</Text>
    </StyledAppIcon>
  );
};
