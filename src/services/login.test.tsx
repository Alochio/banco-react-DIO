import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockEmail = "vinicius@alochio";

  it("Deve exibir um alert com boas vindas", () => {
    login(mockEmail);
    expect(mockAlert).toHaveBeenLastCalledWith(`Bem vindo ${mockEmail}!`);
  });

  it("Não deve exibir a mensagem de boas vindas sem o email", () =>{
    login(mockEmail)
    expect(mockAlert).not.toHaveBeenLastCalledWith('Bem vindo!')
  })
});

