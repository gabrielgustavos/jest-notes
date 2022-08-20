const shoppingList = [
  "fraldas",
  "kleenex",
  "sacos de dormir",
  "papel higiénico",
  "leite",
];

test("Há leite em shoppingList?", () => {
  expect(shoppingList).toContain("leite");
  expect(new Set(shoppingList)).toContain("leite");
});
