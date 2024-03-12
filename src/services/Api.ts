const conta = {
  email: "vinicius@alochio.com",
  password: "123456",
  name: "Vinicius Alochio",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
