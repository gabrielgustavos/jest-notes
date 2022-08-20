// É possível utilizar expect.extend para criar novos matchers para o expect, baseado na necessidade do teste

expect.extend({
  toBeWithinRange(receivedValue, minValue, highValue) {
    // recebe o valor recebido e o valor mínimo e máximo
    const pass = receivedValue >= minValue && receivedValue <= highValue; // verifica se o valor recebido está entre o valor mínimo e máximo
    if (pass) {
      // se estiver, retorna o valor recebido
      return {
        // retorna o valor recebido e o valor mínimo e máximo
        message: () =>
          // retorna a mensagem de erro
          `expected ${receivedValue} to be within range ${minValue} - ${highValue}`,
        pass: true, // retorna true
      };
    } else {
      return {
        message: () =>
          `expected ${receivedValue} to be within range ${minValue} - ${highValue}`,
        pass: false,
      };
    }
  },
});

test("verificando se o numero está dentro do intervalo", () => {
  expect(100).toBeWithinRange(90, 110); // verifica se o numero está dentro do intervalo entre 90 e 110
  expect(101).not.toBeWithinRange(0, 100); // verifica se o numero não está dentro do intervalo entre 0 e 100
  expect({ apples: 6, bananas: 3 }).toEqual({
    // verifica se o objeto tem as propriedades e valores esperados (apples: 6, bananas: 3)
    apples: expect.toBeWithinRange(1, 10), // verifica se o numero de maçãs está dentro do intervalo entre 1 e 10
    bananas: expect.not.toBeWithinRange(11, 20), // verifica se o numero de maçãs não está dentro do intervalo entre 11 e 20
  });
});
