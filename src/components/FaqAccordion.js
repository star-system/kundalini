import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const testFaqs = [
  [
    "How does the FRIEND token work?",
    "There will be a supply of 7.9 billion FRIEND tokens.  20% will be airdropped to the holders of Embrace NFTs after the second phase of NFT sales",
  ],
  [
    "When will NFT drops happen?",
    "The first round of NFT drops... ",
  ],
];
export default function FaqAccordion({ children, faqs }) {
  return (
    <Accordion allowToggle>
      {children.map((faq) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq[0]}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq[1]}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
