import { Box } from '@chakra-ui/react';

interface IProps {
  children: TChildren;
}

const Page: React.FC<IProps> = ({ children }) => {
  return (
    <Box w="100%">
      {children}
    </Box>
  );
};

export default Page;
