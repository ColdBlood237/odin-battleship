import Ship from "../src/ship";

test("Ship of length 4", () => {
  expect(Ship(4).length).toBe(4);
});

test("Ship not hit", () => {
  expect(Ship(4).hits).toBe(0);
});

test("Ship hit one time", () => {
  const testShip = Ship(4);
  testShip.hit();
  expect(testShip.hits).toBe(1);
});

test("Ship not sunk", () => {
  const testShip = Ship(3);
  expect(testShip.isSunk()).toBeFalsy();
});

test("Ship sunk", () => {
  const testShip = Ship(1);
  testShip.hit();
  expect(testShip.isSunk()).toBeTruthy();
});
