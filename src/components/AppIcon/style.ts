import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const StyledAppIcon = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  width: 64px;
  height: 64px;
  color: #fff;

  &:hover {
    background-color: #ffffff40;
    border: 1px solid #ffffff60;
  }
  img {
    width: 40px;
  }
  p {
    padding: 0;
    text-align: center;
    flex-shrink: 1;
    margin-top: 6px;
    text-shadow: black 1px 1px 2px;
    font-size: 15px;
  }
`;
