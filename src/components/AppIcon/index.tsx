import * as React from "react";
import { StyledAppIcon } from "./style";
import { Image, Text } from "@chakra-ui/react";

interface IProps {
  App: TApp;
}
export const AppIcon: React.FC<IProps> = ({App}) => {
  const onclick = React.useCallback(()=>{
    if(App.link){
      window.open(App.link, '_blank');
    }
  },[App.link])
  return (
    <StyledAppIcon onDoubleClick={onclick} tabIndex={0}>
      <Image
        src={`src/assets/${App.name.toLowerCase()}.${App.ref ? App.ref : "png"}`}
      ></Image>
      <Text>{App.name}</Text>
    </StyledAppIcon>
  );
};
