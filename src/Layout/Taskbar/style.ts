import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const StyledTaskbar = styled(Box)`
  background: linear-gradient(
    rgb(31, 47, 134) 0px,
    rgb(49, 101, 196) 3%,
    rgb(54, 130, 229) 6%,
    rgb(68, 144, 230) 10%,
    rgb(56, 131, 229) 12%,
    rgb(43, 113, 224) 15%,
    rgb(38, 99, 218) 18%,
    rgb(35, 91, 214) 20%,
    rgb(34, 88, 213) 23%,
    rgb(33, 87, 214) 38%,
    rgb(36, 93, 219) 54%,
    rgb(37, 98, 223) 86%,
    rgb(36, 95, 220) 89%,
    rgb(33, 88, 212) 92%,
    rgb(29, 78, 192) 95%,
    rgb(25, 65, 165) 98%
  );
  color: white;
  padding: 12px 0px;
  display: flex;
  height: 6px;
  align-items: center;
  justify-content: space-between;
`;

export const TaskbarLeft = styled(Box)`
  display: flex;
  align-items: center;
  background: linear-gradient(
    rgb(12, 89, 185) 1%,
    rgb(19, 158, 233) 6%,
    rgb(24, 181, 242) 10%,
    rgb(19, 155, 235) 14%,
    rgb(18, 144, 232) 19%,
    rgb(13, 141, 234) 63%,
    rgb(13, 159, 241) 81%,
    rgb(15, 158, 237) 88%,
    rgb(17, 155, 233) 91%,
    rgb(19, 146, 226) 94%,
    rgb(19, 126, 215) 97%,
    rgb(9, 91, 201) 100%
  );
  border-left: 1px solid rgb(16, 66, 175);
  box-shadow: rgb(24, 187, 255) 1px 0px 1px inset;
  padding: 0 10px;
  width: 90px;
  height: 30px;
  font-size: 11px;
  font-weight: lighter;
  text-shadow: none;
`;
