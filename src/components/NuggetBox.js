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

export default function NuggetBox({
  children,
  noCenter,
  hasBorder,
}) {
  return (
    <Box
      m={0}
      p={5}
      bg="gray.200"
      textAlign={noCenter ? "" : "center"}
      border={hasBorder ? "4px" : ""}
      borderColor="brand.500"
      flex="1"
    >
      {children}
    </Box>
  );
}
