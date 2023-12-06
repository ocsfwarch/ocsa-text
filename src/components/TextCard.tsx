import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { getLocalDate } from "../Utils/DateTimeUtils";
import axios, { CanceledError } from "axios";

export interface Card {
  id: number;
  header: string;
  data: string;
}

interface Props {
  cardItem?: Card;
}

const TextCard = () => {
  let [card, setCard] = useState<Card>({ id: 1, header: "", data: "" });
  let [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("http://localhost:5000/textcard", { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  const handleSubmit = () => {
    console.log(card);
  };

  const handleCancel = () => {};
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <Card>
        <CardHeader>{card.header}</CardHeader>
        <CardBody>
          <InputGroup>
            <Textarea
              id="TextInput"
              value={card.data}
              onChange={(event) =>
                setCard({ ...card, data: event.target.value })
              }
              borderRadius={20}
              placeholder="Add text here..."
              variant="filled"
            />
          </InputGroup>
          <HStack marginTop={3}>
            <Button
              onClick={() => handleSubmit()}
              type="button"
              isDisabled={!card.data.length}
            >
              Save
            </Button>
            <Button onClick={() => handleCancel()} disabled>
              Cancel
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default TextCard;
