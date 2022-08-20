const compileAndroidCode = () => {
  throw new Error("You are using the wrong JDK");
};

test("compilando para android segue conforme esperado", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

// expect é uma função de embrulho, impedindo que toThrow falhe.
