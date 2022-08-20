test('nao existe I em team', () => {
  expect('team').not.toMatch(/I/); // matcher para comparação de strings
})