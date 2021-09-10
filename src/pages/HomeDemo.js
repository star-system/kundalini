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
import Section from "../components/Section";
import NuggetBox from "../components/NuggetBox";
import PriceBox from "../siteComponents/PriceBox";
import CheckList from "../components/CheckList";
import { spacingStack } from "../config/commonProps";
import SiteFooter from "../siteComponents/SiteFooter";

export default function HomeDemo({ Component }) {
  // 2. Use at the root of your app
  return (
    <Box
      my={4}
      // bg="gray.100"
    >
      <Section noMarginY>
        <Flex justify="space-between">
          <HStack spacing="10" fontSize="lg">
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>Testimonials</Link>
            <Link>Resources</Link>
          </HStack>
          <Button>Request code</Button>
        </Flex>
      </Section>

      <Section>
        <Flex mr="5">
          <Stack {...spacingStack}>
            <Heading size="4xl">
              Your website, reimagined
            </Heading>
            <Text fontSize="xl">
              Our landing page template works on all
              devices, so you only have to set it up once,
              and get beautiful results forever.
            </Text>

            <HStack>
              <Input
                maxWidth="300"
                placeholder="Phone number"
              ></Input>
              <Button>Request Code</Button>
            </HStack>

            <CheckList>
              {[
                "Lorem ipsum is placeholder text commonly.",
                "Excepteur sint occaecat cupidatat.",
                "Lorem ipsum is placeholder text commonly.",
              ]}
            </CheckList>
          </Stack>
          <Flex
            width="500px"
            heigth="900px"
            bg="gray.200"
            m="3"
            justify="center"
            align="center"
          >
            <Box
            // alignSelf="center"
            // alignContent="center"
            // bg="yellow.500"
            >
              Phone Video Player
            </Box>
          </Flex>
        </Flex>

        <SimpleGrid columns={4} spacing={3} mt={7}>
          <NuggetBox>
            <Heading>2.4M</Heading>
            <Text>Days turn around</Text>
          </NuggetBox>
          <NuggetBox>
            <Heading>2.4M</Heading>
            <Text>Days turn around</Text>
          </NuggetBox>
          <NuggetBox>
            <Heading>2.4M</Heading>
            <Text>Days turn around</Text>
          </NuggetBox>
          <NuggetBox>
            <Heading>2.4M</Heading>
            <Text>Days turn around</Text>
          </NuggetBox>
        </SimpleGrid>
      </Section>

      <Divider />

      <Section>
        <Stack {...spacingStack} textAlign="center" pt="10">
          <Heading size="3xl">
            From rough design files, to powerful products
          </Heading>
          <Heading size="md">
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat
            nulla pariatur excepteur sint occaecat
            cupidatat.
          </Heading>
        </Stack>
      </Section>

      <Divider />

      <Section>
        <Stack {...spacingStack} textAlign="center" pt="10">
          <Heading size="3xl">
            Start building for free, then add a plan to go
            live
          </Heading>
          <Heading size="md">
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit
            laborum — semper quis lectus nulla. cupidatat.
          </Heading>
          <SimpleGrid minChildWidth="200px" spacing="40px">
            <Stack>
              <CheckList>
                {[
                  "Unlimited domains",
                  "Unlimited web pages",
                  "Conversion analytics",
                  "A/B testing",
                  "Exclusive channels",
                  `Free
                  resources Landing page builder Smart forms
                  and reports`,
                ]}
              </CheckList>
            </Stack>
            <PriceBox discount="40%" isPopular />
            <PriceBox />
            <PriceBox />
          </SimpleGrid>
        </Stack>
      </Section>

      <SiteFooter />
    </Box>
  );
}
