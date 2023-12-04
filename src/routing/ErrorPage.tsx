import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Invalid Request</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Go Home
      </Button>
    </>
  );
};

export default ErrorPage;
