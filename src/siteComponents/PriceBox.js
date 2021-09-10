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

export default function PriceBox({
  price = 27,
  pricePeriod = "billed yearly",
  discount,
  isPopular = false,
}) {
  return (
    <NuggetBox noCenter hasBorder={isPopular}>
      <Flex
        direction="column"
        justify="space-between"
        align="space-between"
        bg="yellow.200"
        flex="1"
      >
        <Stack>
          <Flex justify="space-between">
            <Heading size="lg">Yearly</Heading>
            {discount && (
              <Tag>
                <Text>-{discount}</Text>
              </Tag>
            )}
          </Flex>
          <Text>
            ${price}/{pricePeriod}
          </Text>
          <Text>
            — Lorem ipsum dolor amet sit consect adipiscing.
          </Text>
        </Stack>
        <Button variant={isPopular ? "solid" : "outline"}>
          Go Premium
        </Button>
      </Flex>
    </NuggetBox>
  );
}
