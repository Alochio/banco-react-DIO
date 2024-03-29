import { ChakraProvider, Input, Button, Box, Center } from "@chakra-ui/react";
import { login } from "../../services/login";
import "./Card.css";
import { useState, useEffect } from "react";
import { api } from "../../services/Api";

interface UserData{
  email: string,
  password: string,
  name: string
}


export const Card = () => {
  const [email, setEmail] = useState("");
  const [ userData, setUserData ] = useState<null | UserData>()

  console.log("email digitado: " + email);

  useEffect(() => {
    const getData = async () =>{
      const data: any | UserData =  await api
      setUserData(data)
    }
    getData()
  })

  console.log(userData)

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
          {(userData !== null && userData !== undefined) ? <h1>Informações carreegadas</h1> 
          : <Button isLoading colorScheme='blue'>Click me</Button>}
          
          <Center marginBottom={"10px"} fontSize={"1.5rem"}>
            <h1>Faça Login</h1>
          </Center>
          <center><p>{userData?.name}</p></center>
          <Input
            placeholder="E-mail"
            marginBottom={"1rem"}
            value={email}
            onChange={(event) => setEmail(event?.target.value)}
          />
          <Input placeholder="Password" marginBottom={"1rem"} />
          <center>
            <Button id="buttonLogin" onClick={() => login(email)}>
              Entrar
            </Button>
          </center>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
