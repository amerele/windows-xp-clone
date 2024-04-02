import React from "react";
import {AppIcon} from "../AppIcon";
import { WindowAppGrid } from "./stye";

interface IProps {
  Apps: TApp[];
}
export const DesktopAppGrid: React.FC<IProps> = ({ Apps }) => {
  return (
    <WindowAppGrid>
      {Apps?.map((App: TApp) => (
        <AppIcon name={App.name}/>
      ))}
    </WindowAppGrid>
  );
};
