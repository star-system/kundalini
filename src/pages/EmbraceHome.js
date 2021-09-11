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
import FaqAccordion from "../components/FaqAccordion";

export default function EmbraceHome({ Component }) {
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
            <Heading size="4xl">Embrace.ink</Heading>
            <Text fontSize="xl">
              Our landing page template works on all
              devices, so you only have to set it up once,
              and get beautiful results forever.
            </Text>
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
          <Heading size="3xl">Roadmap</Heading>
          <CheckList>
            {[
              "September - First 100 NFTs go on sale, on Polygon Network.  The price 0.025 ETH",
              "November - Owners of first 100 NFTs will get 2 more airdropped to them! 700 more NFTs go on sale",
              "December - Start trading!  Owners of 3 NFTs with the same trait will get a 4th airdropped!",
              "January - 4000 (minus giveaways) new NFTs will go on sale",
              "Feb 2022 - burning love!  Burning starts and embrace NFTs become deflationary.  But don't worry, all burnt art will still be available to all owners of our NFTs",
            ]}
          </CheckList>
        </Stack>
      </Section>

      <Section>
        <Stack {...spacingStack} textAlign="center" pt="10">
          <Heading size="3xl">Burning Love</Heading>
          <CheckList>
            {[
              "September - First 100 NFTs go on sale, on Polygon Network.  The price 0.025 ETH",
              "November - Owners of first 100 NFTs will get 2 more airdropped to them! 700 more NFTs go on sale",
              "December - Start trading!  Owners of 3 NFTs with the same trait will get a 4th airdropped!",
              "January - 4000 (minus giveaways) new NFTs will go on sale",
              "Feb 2022 - burning love!  Burning starts and embrace NFTs become deflationary.  But don't worry, all burnt art will still be available to all owners of our NFTs",
            ]}
          </CheckList>
        </Stack>
      </Section>

      <Divider />

      <Section>
        <FaqAccordion>
          {[
            [
              "How does the FRIEND token work?",
              "There will be a supply of 7.9 billion FRIEND tokens.  20% will be airdropped to the holders of Embrace NFTs after the second phase of NFT sales",
            ],
            [
              "When will NFT drops happen, ok?",
              "The first round of NFT drops... ",
            ],
          ]}
        </FaqAccordion>
      </Section>

      <SiteFooter />
    </Box>
  );
}
