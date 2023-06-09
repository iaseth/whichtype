const whichtype = require("../../dist");



test("isArray", () => {
	const { isArray } = whichtype;

	expect(isArray([])).toBe(true);
	expect(isArray([1,2,3])).toBe(true);

	expect(isArray("foo")).toBe(false);
	expect(isArray("")).toBe(false);
	expect(isArray(20)).toBe(false);
	expect(isArray(null)).toBe(false);
	expect(isArray(false)).toBe(false);
});

test("isBoolean", () => {
	const { isBoolean } = whichtype;

	expect(isBoolean(true)).toBe(true);
	expect(isBoolean(false)).toBe(true);

	expect(isBoolean("foo")).toBe(false);
	expect(isBoolean("")).toBe(false);
	expect(isBoolean(200)).toBe(false);
	expect(isBoolean(0)).toBe(false);
	expect(isBoolean({})).toBe(false);
	expect(isBoolean([])).toBe(false);
});

test("isChar", () => {
	const { isChar } = whichtype;

	expect(isChar("x")).toBe(true);
	expect(isChar("A")).toBe(true);

	expect(isChar("foo")).toBe(false);
	expect(isChar("  ")).toBe(false);

	expect(isChar(null)).toBe(false);
	expect(isChar(false)).toBe(false);
	expect(isChar(20.5)).toBe(false);
	expect(isChar({})).toBe(false);
	expect(isChar([])).toBe(false);
});

test("isNumber", () => {
	const { isNumber } = whichtype;

	expect(isNumber(0)).toBe(true);
	expect(isNumber(1.2)).toBe(true);
	expect(isNumber(-40)).toBe(true);
	expect(isNumber(200.50)).toBe(true);

	expect(isNumber("foo")).toBe(false);
	expect(isNumber(false)).toBe(false);
	expect(isNumber(null)).toBe(false);
	expect(isNumber({})).toBe(false);
});

test("isObject", () => {
	const { isObject } = whichtype;

	expect(isObject({})).toBe(true);
	expect(isObject({"foo": 20})).toBe(true);

	expect(isObject("foo")).toBe(false);
	expect(isObject("foo")).toBe(false);
	expect(isObject("foo")).toBe(false);
	expect(isObject("foo")).toBe(false);
});

test("isString", () => {
	const { isString } = whichtype;

	expect(isString("")).toBe(true);
	expect(isString("foo")).toBe(true);

	expect(isString(null)).toBe(false);
	expect(isString(false)).toBe(false);
	expect(isString(20.5)).toBe(false);
	expect(isString({})).toBe(false);
	expect(isString([])).toBe(false);
});


test("isNull", () => {
	const { isNull } = whichtype;

	expect(isNull(null)).toBe(true);

	expect(isNull()).toBe(false);
	expect(isNull(undefined)).toBe(false);

	expect(isNull(false)).toBe(false);
	expect(isNull(20.5)).toBe(false);
	expect(isNull("foo")).toBe(false);

	expect(isNull({})).toBe(false);
	expect(isNull([])).toBe(false);
});

test("isUndefined", () => {
	const { isUndefined } = whichtype;

	expect(isUndefined()).toBe(true);
	expect(isUndefined(undefined)).toBe(true);

	expect(isUndefined(null)).toBe(false);
	expect(isUndefined(false)).toBe(false);
	expect(isUndefined(20.5)).toBe(false);

	expect(isUndefined("foo")).toBe(false);
	expect(isUndefined({})).toBe(false);
	expect(isUndefined([])).toBe(false);
});


test("isPrimitive", () => {
	const { isPrimitive } = whichtype;

	expect(isPrimitive(false)).toBe(true);
	expect(isPrimitive(20.5)).toBe(true);
	expect(isPrimitive("foo")).toBe(true);

	expect(isPrimitive()).toBe(false);
	expect(isPrimitive(undefined)).toBe(false);
	expect(isPrimitive(null)).toBe(false);
	expect(isPrimitive({})).toBe(false);
	expect(isPrimitive([])).toBe(false);
});

test("isReference", () => {
	const { isReference } = whichtype;

	expect(isReference({})).toBe(true);
	expect(isReference([])).toBe(true);

	expect(isReference()).toBe(false);
	expect(isReference(undefined)).toBe(false);
	expect(isReference(null)).toBe(false);
	expect(isReference(false)).toBe(false);
	expect(isReference(20.5)).toBe(false);
	expect(isReference("foo")).toBe(false);
});


