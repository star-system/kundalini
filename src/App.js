import * as React from "react";

// 1. import `ChakraProvider` component
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
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Section from "./components/Section";
import NuggetBox from "./components/NuggetBox";
import PriceBox from "./siteComponents/PriceBox";
import CheckList from "./components/CheckList";
import { spacingStack } from "./config/commonProps";
import theme from "./config/theme";
import SiteFooter from "./siteComponents/SiteFooter";
import HomeDemo from "./pages/HomeDemo";
import EmbraceHome from "./pages/EmbraceHome";

export default function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <EmbraceHome />
    </ChakraProvider>
  );
}
