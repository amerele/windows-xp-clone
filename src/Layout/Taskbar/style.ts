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
  &:div {
    color: red;
  }
`;

// Adiciona estilos para os ícones na barra de tarefas
export const TaskbarIcon = styled.div`
  width: 40px; /* Largura dos ícones */
  height: 100%; /* Altura igual à altura da barra de tarefas */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Altera o cursor para um indicador de clique */
`;

// Adiciona estilos para o texto (por exemplo, o relógio) na barra de tarefas
export const TaskbarText = styled.span`
  margin: 0 12px; /* Espaçamento à esquerda e à direita */
  font-family: Arial, sans-serif; /* Fonte semelhante à usada no Windows XP */
  font-size: 12px; /* Tamanho da fonte */
`;
