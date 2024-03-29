import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockEmail = "vinicius@alochio.com";

  it("Deve exibir um alert com boas vindas caso o email seja válido", () => {
    login(mockEmail);
    console.log(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
  });

  it("Não deve exibir a mensagem de boas vindas sem o email", async () =>{
    await login('mock: ' + mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
  });

  it("Deve exibir um erro caso o email seja inválido", async() => {
    await login('email@invalido.com')
    expect(mockAlert).toHaveBeenCalledWith('Email inválido!') 
  })
});