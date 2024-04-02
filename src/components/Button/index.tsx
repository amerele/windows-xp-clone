import { StyledButton } from "./style";
import { memo } from "react";
import * as React from 'react';

interface IProps {
  children?: TChildren;
  colorScheme?: string;
  [key: string]: any;
}

const Button: React.FC<IProps> = ({
  children,
  colorScheme = "blue",
  ...rest
}) => {
  return (
    <StyledButton colorScheme={colorScheme} {...rest}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);
