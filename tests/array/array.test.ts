const arrayfuncs = require("../../dist/array");



test("isEmptyArray", () => {
	const { isEmptyArray } = arrayfuncs;

	expect(isEmptyArray([])).toBe(true);

	expect(isEmptyArray([20])).toBe(false);
	expect(isEmptyArray(["foo"])).toBe(false);
	expect(isEmptyArray(20)).toBe(false);
	expect(isEmptyArray("foo")).toBe(false);
});

test("isNonEmptyArray", () => {
	const { isNonEmptyArray } = arrayfuncs;

	expect(isNonEmptyArray([20])).toBe(true);
	expect(isNonEmptyArray(["foo"])).toBe(true);

	expect(isNonEmptyArray([])).toBe(false);
	expect(isNonEmptyArray(20)).toBe(false);
	expect(isNonEmptyArray("foo")).toBe(false);
});

test("isArrayOfArrays", () => {
	const { isArrayOfArrays } = arrayfuncs;

	expect(isArrayOfArrays([[], []])).toBe(true);
	expect(isArrayOfArrays("foo")).toBe(false);
});

test("isArrayOfBooleans", () => {
	const { isArrayOfBooleans } = arrayfuncs;

	expect(isArrayOfBooleans([false, true])).toBe(true);

	expect(isArrayOfBooleans([true, [], []])).toBe(false);
	expect(isArrayOfBooleans([4,5,6])).toBe(false);
	expect(isArrayOfBooleans([])).toBe(false);
	expect(isArrayOfBooleans("foo")).toBe(false);
});

test("isArrayOfChars", () => {
	const { isArrayOfChars } = arrayfuncs;

	expect(isArrayOfChars(["x", "y"])).toBe(true);

	expect(isArrayOfChars(["x", "y", "zen"])).toBe(false);
	expect(isArrayOfChars(["x", "y", 20])).toBe(false);
	expect(isArrayOfChars([[], []])).toBe(false);
	expect(isArrayOfChars([])).toBe(false);
	expect(isArrayOfChars("foo")).toBe(false);
});

test("isArrayOfNumbers", () => {
	const { isArrayOfNumbers } = arrayfuncs;

	expect(isArrayOfNumbers([20, 40])).toBe(true);

	expect(isArrayOfNumbers([20, 40, false])).toBe(false);
	expect(isArrayOfNumbers([[], []])).toBe(false);
	expect(isArrayOfNumbers([])).toBe(false);
	expect(isArrayOfNumbers("foo")).toBe(false);
});

test("isArrayOfObjects", () => {
	const { isArrayOfObjects } = arrayfuncs;

	expect(isArrayOfObjects([{}])).toBe(true);

	expect(isArrayOfObjects([{}, 50])).toBe(false);
	expect(isArrayOfObjects([[], []])).toBe(false);
	expect(isArrayOfObjects("foo")).toBe(false);
});

test("isArrayOfStrings", () => {
	const { isArrayOfStrings } = arrayfuncs;

	expect(isArrayOfStrings(["foo"])).toBe(true);
	expect(isArrayOfStrings(["foo", "bar"])).toBe(true);

	expect(isArrayOfStrings([[], []])).toBe(false);
	expect(isArrayOfStrings([])).toBe(false);
	expect(isArrayOfStrings("foo")).toBe(false);
});
