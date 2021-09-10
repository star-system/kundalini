import {
  ChakraProvider,
  Heading,
  Box,
  Flex,
  Link,
  Input,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";

export default function Section({ children, noMarginY }) {
  return (
    <Box
      maxWidth={900}
      mx="auto"
      my={noMarginY ? 0 : 10}
      //   bg="gray.100"
    >
      {children}
    </Box>
  );
}
