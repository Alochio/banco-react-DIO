import { ChakraProvider, Input, Button, Box, Center } from "@chakra-ui/react";
import { login } from "../../services/login";
import "./Card.css";
import { useState } from "react";

export const Card = () => {
  const [email, setEmail] = useState("");

  console.log('email digitado: ' + email)

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
          <Input
            placeholder="E-mail"
            marginBottom={"1rem"}
            value={email}
            onChange={(event) => setEmail(event?.target.value)}
          />
          <Input placeholder="Password" marginBottom={"1rem"} />
          <center>
            <Button id="buttonLogin" onClick={() => login(email)}>Entrar</Button>
          </center>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
