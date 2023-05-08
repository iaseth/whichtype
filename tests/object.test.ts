const whichtype = require("../dist");



test("isEmptyObject", () => {
	const { isEmptyObject } = whichtype;

	expect(isEmptyObject({})).toBe(true);
	expect(isEmptyObject("foo")).toBe(false);
});

test("isObjectOfArrays", () => {
	const { isObjectOfArrays } = whichtype;

	expect(isObjectOfArrays({})).toBe(true);
	expect(isObjectOfArrays("foo")).toBe(false);
});

test("isObjectOfBooleans", () => {
	const { isObjectOfBooleans } = whichtype;

	expect(isObjectOfBooleans({})).toBe(true);
	expect(isObjectOfBooleans("foo")).toBe(false);
});

test("isObjectOfChars", () => {
	const { isObjectOfChars } = whichtype;

	expect(isObjectOfChars({})).toBe(true);
	expect(isObjectOfChars("foo")).toBe(false);
});

test("isObjectOfNumbers", () => {
	const { isObjectOfNumbers } = whichtype;

	expect(isObjectOfNumbers({})).toBe(true);
	expect(isObjectOfNumbers("foo")).toBe(false);
});

test("isObjectOfObjects", () => {
	const { isObjectOfObjects } = whichtype;

	expect(isObjectOfObjects({})).toBe(true);
	expect(isObjectOfObjects("foo")).toBe(false);
});

test("isObjectOfStrings", () => {
	const { isObjectOfStrings } = whichtype;

	expect(isObjectOfStrings({})).toBe(true);
	expect(isObjectOfStrings("foo")).toBe(false);
});
