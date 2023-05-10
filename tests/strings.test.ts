const whichtype = require("../dist");

const { isLowerCase, isUpperCase } = whichtype;

test("isLowerCase", () => {
	expect(isLowerCase([])).toBe(false);
	expect(isLowerCase(20)).toBe(false);
	expect(isLowerCase("foo")).toBe(false);
});

test("isLowerCase", () => {
	expect(isUpperCase([])).toBe(false);
	expect(isUpperCase(20)).toBe(false);
	expect(isUpperCase("foo")).toBe(false);
});