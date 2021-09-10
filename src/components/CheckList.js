import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { commonFont } from "../config/commonProps";

export default function CheckList({ children }) {
  return (
    <List spacing={3} {...commonFont} textAlign="left">
      {children &&
        children.map((child) => (
          <ListItem>
            <ListIcon as={FaCheck} color="green.500" />
            {child}
          </ListItem>
        ))}
    </List>
  );
}
