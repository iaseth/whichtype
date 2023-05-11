const whichtype = require("../../dist");



test("isNotArray", () => {
	const { isNotArray } = whichtype;

	expect(isNotArray([])).toBe(false);
	expect(isNotArray([1,2,3])).toBe(false);

	expect(isNotArray("foo")).toBe(true);
	expect(isNotArray("")).toBe(true);
	expect(isNotArray(20)).toBe(true);
	expect(isNotArray(null)).toBe(true);
	expect(isNotArray(false)).toBe(true);
});

test("isNotBoolean", () => {
	const { isNotBoolean } = whichtype;

	expect(isNotBoolean(true)).toBe(false);
	expect(isNotBoolean(false)).toBe(false);

	expect(isNotBoolean("foo")).toBe(true);
	expect(isNotBoolean("")).toBe(true);
	expect(isNotBoolean(200)).toBe(true);
	expect(isNotBoolean(0)).toBe(true);
	expect(isNotBoolean({})).toBe(true);
	expect(isNotBoolean([])).toBe(true);
});

test("isNotChar", () => {
	const { isNotChar } = whichtype;

	expect(isNotChar("x")).toBe(false);
	expect(isNotChar("A")).toBe(false);

	expect(isNotChar("foo")).toBe(true);
	expect(isNotChar("  ")).toBe(true);

	expect(isNotChar(null)).toBe(true);
	expect(isNotChar(false)).toBe(true);
	expect(isNotChar(20.5)).toBe(true);
	expect(isNotChar({})).toBe(true);
	expect(isNotChar([])).toBe(true);
});

test("isNotNumber", () => {
	const { isNotNumber } = whichtype;

	expect(isNotNumber(0)).toBe(false);
	expect(isNotNumber(1.2)).toBe(false);
	expect(isNotNumber(-40)).toBe(false);
	expect(isNotNumber(200.50)).toBe(false);

	expect(isNotNumber("foo")).toBe(true);
	expect(isNotNumber(false)).toBe(true);
	expect(isNotNumber(null)).toBe(true);
	expect(isNotNumber({})).toBe(true);
});

test("isNotObject", () => {
	const { isNotObject } = whichtype;

	expect(isNotObject({})).toBe(false);
	expect(isNotObject({"foo": 20})).toBe(false);

	expect(isNotObject("foo")).toBe(true);
	expect(isNotObject("foo")).toBe(true);
	expect(isNotObject("foo")).toBe(true);
	expect(isNotObject("foo")).toBe(true);
});

test("isNotString", () => {
	const { isNotString } = whichtype;

	expect(isNotString("")).toBe(false);
	expect(isNotString("foo")).toBe(false);

	expect(isNotString(null)).toBe(true);
	expect(isNotString(false)).toBe(true);
	expect(isNotString(20.5)).toBe(true);
	expect(isNotString({})).toBe(true);
	expect(isNotString([])).toBe(true);
});


test("isNotNull", () => {
	const { isNotNull } = whichtype;

	expect(isNotNull(null)).toBe(false);

	expect(isNotNull()).toBe(true);
	expect(isNotNull(undefined)).toBe(true);

	expect(isNotNull(false)).toBe(true);
	expect(isNotNull(20.5)).toBe(true);
	expect(isNotNull("foo")).toBe(true);

	expect(isNotNull({})).toBe(true);
	expect(isNotNull([])).toBe(true);
});

test("isNotUndefined", () => {
	const { isNotUndefined } = whichtype;

	expect(isNotUndefined()).toBe(false);
	expect(isNotUndefined(undefined)).toBe(false);

	expect(isNotUndefined(null)).toBe(true);
	expect(isNotUndefined(false)).toBe(true);
	expect(isNotUndefined(20.5)).toBe(true);

	expect(isNotUndefined("foo")).toBe(true);
	expect(isNotUndefined({})).toBe(true);
	expect(isNotUndefined([])).toBe(true);
});


