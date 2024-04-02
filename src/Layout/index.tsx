import { Flex } from '@chakra-ui/react';
import Page from './Paper';
import backgroundImage from '../assets/background.jpg'; // Importe a imagem de fundo
import { Taskbar } from './Taskbar';

interface IProps {
  children?: TChildren;
}

const Paper: React.FC<IProps> = ({ children }) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      overflow="hidden"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
    >
      <Flex w="100%" h="100%" overflow="hidden">
        <Page>{children}</Page>
      </Flex>
      <Taskbar/>
    </Flex>
  );
};

export default Paper;
