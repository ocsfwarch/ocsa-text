import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";
import { getLocalDate } from "../Utils/DateTimeUtils";

export interface Card {
  id: number;
  header: string;
  data: string;
}

interface Props {
  cardItem?: Card;
}

const TextCard = ({ cardItem }: Props) => {
  let [textValue, setTextValue] = useState("");
  let cardInputItem: Card = {
    id: 1,
    header: getLocalDate(),
    data: "",
  };

  if (cardItem) {
    setTextValue(cardItem.data);
    cardInputItem = { ...cardItem };
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textValue) {
      cardInputItem.data = textValue;
      console.log(cardInputItem);
    }
  };

  const handleCancel = () => {};
  return (
    <Card>
      <CardHeader>{cardInputItem.header}</CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Textarea
              id="TextInput"
              value={textValue}
              onChange={(event) => setTextValue(event.target.value)}
              borderRadius={20}
              placeholder="Add text here..."
              variant="filled"
            />
          </InputGroup>
          <HStack marginTop={3}>
            <Button type="submit" isDisabled={!textValue.length}>
              Save
            </Button>
            <Button onClick={() => handleCancel()} disabled>
              Cancel
            </Button>
          </HStack>
        </form>
      </CardBody>
    </Card>
  );
};

export default TextCard;
