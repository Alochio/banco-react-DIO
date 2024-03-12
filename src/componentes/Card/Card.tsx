import { ChakraProvider, Input, Button, Box, Center } from "@chakra-ui/react";
import { login } from "../../services/login";
import "./Card.css";

export const Card = () => {
  return (
    <ChakraProvider>
      <Box
        minHeight="100vh"
        backgroundColor="#1e192c"
        color={"#000000"}
        padding={"25px"}
        fontWeight={"bold"}
      >
        <Box
          backgroundColor={"#ffffff"}
          borderRadius={"1rem"}
          padding={"15px"}
          marginTop={"8rem"}
        >
          <Center marginBottom={"10px"} fontSize={"1.5rem"}>
            <h1>Faça Login</h1>
          </Center>
          <Input placeholder="E-mail" marginBottom={"1rem"} />
          <Input placeholder="Password" marginBottom={"1rem"} />
          <center>
            <Button id="buttonLogin" onClick={login}>
              Entrar
            </Button>
          </center>
        </Box>
      </Box>
    </ChakraProvider>
  );
};