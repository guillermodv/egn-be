function sum(a, b) {
  return a + b;
}

describe("Dummy Test", () => {
  test("Adds 1 + 2 to be equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
