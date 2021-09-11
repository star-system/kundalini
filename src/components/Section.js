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
  Stack,
} from "@chakra-ui/react";
import { spacingStack } from "../config/commonProps";

export default function Section({
  children,
  noMarginY,
  withStack,
}) {
  return (
    <Box
      maxWidth={900}
      mx="auto"
      my={noMarginY ? 0 : 10}
      //   bg="gray.100"
    >
      {withStack ? (
        <Stack {...spacingStack}>{children}</Stack>
      ) : (
        <>{children}</>
      )}
    </Box>
  );
}
