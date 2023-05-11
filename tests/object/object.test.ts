const objectfuncs = require("../../dist/object");



test("isEmptyObject", () => {
	const { isEmptyObject } = objectfuncs;

	expect(isEmptyObject({})).toBe(true);

	expect(isEmptyObject({foo: "bar"})).toBe(false);
	expect(isEmptyObject("foo")).toBe(false);
});

test("isObjectOfArrays", () => {
	const { isObjectOfArrays } = objectfuncs;

	expect(isObjectOfArrays({foo: []})).toBe(true);

	expect(isObjectOfArrays({})).toBe(false);
	expect(isObjectOfArrays({foo: false})).toBe(false);
	expect(isObjectOfArrays({foo: "x"})).toBe(false);
	expect(isObjectOfArrays({foo: 200})).toBe(false);
	expect(isObjectOfArrays({foo: {}})).toBe(false);
	expect(isObjectOfArrays({foo: "bar"})).toBe(false);

	expect(isObjectOfArrays(false)).toBe(false);
	expect(isObjectOfArrays()).toBe(false);
	expect(isObjectOfArrays(null)).toBe(false);
	expect(isObjectOfArrays(200)).toBe(false);
	expect(isObjectOfArrays(1.25)).toBe(false);
	expect(isObjectOfArrays("foo")).toBe(false);
});

test("isObjectOfBooleans", () => {
	const { isObjectOfBooleans } = objectfuncs;

	expect(isObjectOfBooleans({foo: false})).toBe(true);

	expect(isObjectOfBooleans({})).toBe(false);
	expect(isObjectOfBooleans({foo: []})).toBe(false);
	expect(isObjectOfBooleans({foo: "x"})).toBe(false);
	expect(isObjectOfBooleans({foo: 200})).toBe(false);
	expect(isObjectOfBooleans({foo: {}})).toBe(false);
	expect(isObjectOfBooleans({foo: "bar"})).toBe(false);

	expect(isObjectOfBooleans(false)).toBe(false);
	expect(isObjectOfBooleans()).toBe(false);
	expect(isObjectOfBooleans(null)).toBe(false);
	expect(isObjectOfBooleans(200)).toBe(false);
	expect(isObjectOfBooleans(1.25)).toBe(false);
	expect(isObjectOfBooleans("foo")).toBe(false);
});

test("isObjectOfChars", () => {
	const { isObjectOfChars } = objectfuncs;

	expect(isObjectOfChars({foo: "x"})).toBe(true);

	expect(isObjectOfChars({})).toBe(false);
	expect(isObjectOfChars({foo: []})).toBe(false);
	expect(isObjectOfChars({foo: false})).toBe(false);
	expect(isObjectOfChars({foo: 200})).toBe(false);
	expect(isObjectOfChars({foo: {}})).toBe(false);
	expect(isObjectOfChars({foo: "bar"})).toBe(false);

	expect(isObjectOfChars(false)).toBe(false);
	expect(isObjectOfChars()).toBe(false);
	expect(isObjectOfChars(null)).toBe(false);
	expect(isObjectOfChars(200)).toBe(false);
	expect(isObjectOfChars(1.25)).toBe(false);
	expect(isObjectOfChars("foo")).toBe(false);
});

test("isObjectOfNumbers", () => {
	const { isObjectOfNumbers } = objectfuncs;

	expect(isObjectOfNumbers({foo: 200})).toBe(true);

	expect(isObjectOfNumbers({})).toBe(false);
	expect(isObjectOfNumbers({foo: []})).toBe(false);
	expect(isObjectOfNumbers({foo: false})).toBe(false);
	expect(isObjectOfNumbers({foo: "x"})).toBe(false);
	expect(isObjectOfNumbers({foo: {}})).toBe(false);
	expect(isObjectOfNumbers({foo: "bar"})).toBe(false);

	expect(isObjectOfNumbers(false)).toBe(false);
	expect(isObjectOfNumbers()).toBe(false);
	expect(isObjectOfNumbers(null)).toBe(false);
	expect(isObjectOfNumbers(200)).toBe(false);
	expect(isObjectOfNumbers(1.25)).toBe(false);
	expect(isObjectOfNumbers("foo")).toBe(false);
});

test("isObjectOfObjects", () => {
	const { isObjectOfObjects } = objectfuncs;

	expect(isObjectOfObjects({foo: {}})).toBe(true);

	expect(isObjectOfObjects({})).toBe(false);
	expect(isObjectOfObjects({foo: []})).toBe(false);
	expect(isObjectOfObjects({foo: false})).toBe(false);
	expect(isObjectOfObjects({foo: "x"})).toBe(false);
	expect(isObjectOfObjects({foo: 200})).toBe(false);
	expect(isObjectOfObjects({foo: "bar"})).toBe(false);

	expect(isObjectOfObjects(false)).toBe(false);
	expect(isObjectOfObjects()).toBe(false);
	expect(isObjectOfObjects(null)).toBe(false);
	expect(isObjectOfObjects(200)).toBe(false);
	expect(isObjectOfObjects(1.25)).toBe(false);
	expect(isObjectOfObjects("foo")).toBe(false);
});

test("isObjectOfStrings", () => {
	const { isObjectOfStrings } = objectfuncs;

	expect(isObjectOfStrings({foo: "x"})).toBe(true);
	expect(isObjectOfStrings({foo: "bar"})).toBe(true);

	expect(isObjectOfStrings({})).toBe(false);
	expect(isObjectOfStrings({foo: []})).toBe(false);
	expect(isObjectOfStrings({foo: false})).toBe(false);
	expect(isObjectOfStrings({foo: 200})).toBe(false);
	expect(isObjectOfStrings({foo: {}})).toBe(false);

	expect(isObjectOfStrings(false)).toBe(false);
	expect(isObjectOfStrings()).toBe(false);
	expect(isObjectOfStrings(null)).toBe(false);
	expect(isObjectOfStrings(200)).toBe(false);
	expect(isObjectOfStrings(1.25)).toBe(false);
	expect(isObjectOfStrings("foo")).toBe(false);
});
