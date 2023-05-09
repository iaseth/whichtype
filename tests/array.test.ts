const whichtype = require("../dist");



test("isEmptyArray", () => {
	const { isEmptyArray } = whichtype;

	expect(isEmptyArray([])).toBe(true);
	expect(isEmptyArray(20)).toBe(false);
	expect(isEmptyArray("foo")).toBe(false);
});

test("isArrayOfArrays", () => {
	const { isArrayOfArrays } = whichtype;

	expect(isArrayOfArrays([[], []])).toBe(true);
	expect(isArrayOfArrays("foo")).toBe(false);
});

test("isArrayOfBooleans", () => {
	const { isArrayOfBooleans } = whichtype;

	expect(isArrayOfBooleans([false, true])).toBe(true);

	expect(isArrayOfBooleans([true, [], []])).toBe(false);
	expect(isArrayOfBooleans([4,5,6])).toBe(false);
	expect(isArrayOfBooleans([])).toBe(false);
	expect(isArrayOfBooleans("foo")).toBe(false);
});

test("isArrayOfChars", () => {
	const { isArrayOfChars } = whichtype;

	expect(isArrayOfChars(["x", "y"])).toBe(true);

	expect(isArrayOfChars(["x", "y", "zen"])).toBe(false);
	expect(isArrayOfChars(["x", "y", 20])).toBe(false);
	expect(isArrayOfChars([[], []])).toBe(false);
	expect(isArrayOfChars([])).toBe(false);
	expect(isArrayOfChars("foo")).toBe(false);
});

test("isArrayOfNumbers", () => {
	const { isArrayOfNumbers } = whichtype;

	expect(isArrayOfNumbers([20, 40])).toBe(true);

	expect(isArrayOfNumbers([20, 40, false])).toBe(false);
	expect(isArrayOfNumbers([[], []])).toBe(false);
	expect(isArrayOfNumbers([])).toBe(false);
	expect(isArrayOfNumbers("foo")).toBe(false);
});

test("isArrayOfObjects", () => {
	const { isArrayOfObjects } = whichtype;

	expect(isArrayOfObjects([{}])).toBe(true);

	expect(isArrayOfObjects([{}, 50])).toBe(false);
	expect(isArrayOfObjects([[], []])).toBe(false);
	expect(isArrayOfObjects("foo")).toBe(false);
});

test("isArrayOfStrings", () => {
	const { isArrayOfStrings } = whichtype;

	expect(isArrayOfStrings(["foo"])).toBe(true);
	expect(isArrayOfStrings(["foo", "bar"])).toBe(true);

	expect(isArrayOfStrings([[], []])).toBe(false);
	expect(isArrayOfStrings([])).toBe(false);
	expect(isArrayOfStrings("foo")).toBe(false);
});
