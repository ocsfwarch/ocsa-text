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
//import { getLocalDate } from "../Utils/DateTimeUtils";
import apiClient, { CanceledError } from "../services/ApiClient";
import CardService, { DataCard } from "../services/CardService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TextCard = () => {
  const [dataCard, setDataCard] = useState<DataCard>({
    id: 1,
    header: "",
    data: "",
  });
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log(`useEffect ${startDate}`);
    const { request, cancel } = CardService.getACard(startDate);
    request
      .then((res) => {
        console.log(res.data);
        setDataCard(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, [startDate]);

  const handleCardSave = () => {
    CardService.saveACard(dataCard)
      .then((res) => setDataCard(res.data))
      .catch((err) => setError(err.message));
  };

  const handleCancel = () => {};

  const handleDateChange = (date: Date) => {
    console.log(`handleDateChange...`);
    setStartDate(date);
    // Redirect to selected date
    //navigate(`/${date}`);
  };

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <Card>
        <CardHeader>
          {" "}
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => handleDateChange(date)}
          />
        </CardHeader>
        <CardBody>
          <InputGroup>
            <Textarea
              id="TextInput"
              value={dataCard.data}
              onChange={(event) =>
                setDataCard({ ...dataCard, data: event.target.value })
              }
              borderRadius={20}
              placeholder="Add text here..."
              variant="filled"
            />
          </InputGroup>
          <HStack marginTop={3}>
            <Button
              onClick={() => handleCardSave()}
              type="button"
              isDisabled={!dataCard.data.length}
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
