import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {AppIcon} from "../AppIcon";

interface IProps {
  Apps: TApp[];
}
export const DesktopAppGrid: React.FC<IProps> = ({ Apps }) => {
  return (
    <Box>
      {Apps?.map((App: TApp) => (
        <AppIcon name={App.name}/>
      ))}
    </Box>
  );
};
