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
  Tag,
} from "@chakra-ui/react";
import NuggetBox from "../components/NuggetBox";
import Section from "../components/Section";

export default function SiteFooter({}) {
  return (
    <Section>
      <Flex justify="space-between">
        <Text>© 2020 Otto von Wachter.</Text>
        <Text>Terms · Privacy Policy</Text>
        <Text>Social Icons</Text>
      </Flex>
    </Section>
  );
}
