const whichtype = require("../dist");



test("isEmptyArray", () => {
	const { isEmptyArray } = whichtype;

	expect(isEmptyArray([])).toBe(true);
	expect(isEmptyArray("foo")).toBe(false);
});

test("isArrayOfArrays", () => {
	const { isArrayOfArrays } = whichtype;

	expect(isArrayOfArrays([[], []])).toBe(true);
	expect(isArrayOfArrays("foo")).toBe(false);
});

test("isArrayOfBooleans", () => {
	const { isArrayOfBooleans } = whichtype;

	expect(isArrayOfBooleans([[], []])).toBe(true);
	expect(isArrayOfBooleans("foo")).toBe(false);
});

test("isArrayOfChars", () => {
	const { isArrayOfChars } = whichtype;

	expect(isArrayOfChars([[], []])).toBe(true);
	expect(isArrayOfChars("foo")).toBe(false);
});

test("isArrayOfNumbers", () => {
	const { isArrayOfNumbers } = whichtype;

	expect(isArrayOfNumbers([[], []])).toBe(true);
	expect(isArrayOfNumbers("foo")).toBe(false);
});

test("isArrayOfObjects", () => {
	const { isArrayOfObjects } = whichtype;

	expect(isArrayOfObjects([[], []])).toBe(true);
	expect(isArrayOfObjects("foo")).toBe(false);
});

test("isArrayOfStrings", () => {
	const { isArrayOfStrings } = whichtype;

	expect(isArrayOfStrings([[], []])).toBe(true);
	expect(isArrayOfStrings("foo")).toBe(false);
});
