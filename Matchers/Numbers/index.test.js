
test("dois mais dois", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // matcher de comparação de valores maiores que 3
  expect(value).toBeGreaterThanOrEqual(3.5); // matcher para valores maiores ou iguais a 3.5
  expect(value).toBeLessThan(5); // matcher para valores menores que 5
  expect(value).toBeLessThanOrEqual(4.5); // matcher para valores menores ou iguais a 4.5

  // toBe e ToEqual são matchers equivalentes para comparação de valores

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Para comparação de valores floats, utilize o matcher toBeCloseTo

test("adicionando number floats", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); // não funciona, pois o valor não é arredondado
  expect(value).toBeCloseTo(0.3); // funciona, pois o valor é arredondado
});
