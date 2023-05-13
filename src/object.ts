import { isArray, isBoolean, isChar, isNumber, isObject, isString } from "./basictypes";



export function isEmptyObject (x: any): boolean {
	if (isObject(x) && Object.keys(x).length === 0) {
		return true;
	}
	return false;
}

export function isNonEmptyObject (x: any): boolean {
	if (isObject(x) && Object.keys(x).length > 0) {
		return true;
	}
	return false;
}

export function isObjectOfArrays (x: any): boolean {
	if (!isObject(x)) return false;

	const values: any[] = Object.values(x);
	if (values.length === 0) return false;

	for (const v of values) {
		if (!isArray(v)) return false;
	}
	return true;
}

export function isObjectOfBooleans (x: any): boolean {
	if (!isObject(x)) return false;

	const values: any[] = Object.values(x);
	if (values.length === 0) return false;

	for (const v of values) {
		if (!isBoolean(v)) return false;
	}
	return true;
}

export function isObjectOfChars (x: any): boolean {
	if (!isObject(x)) return false;

	const values: any[] = Object.values(x);
	if (values.length === 0) return false;

	for (const v of values) {
		if (!isChar(v)) return false;
	}
	return true;
}

export function isObjectOfNumbers (x: any): boolean {
	if (!isObject(x)) return false;

	const values: any[] = Object.values(x);
	if (values.length === 0) return false;

	for (const v of values) {
		if (!isNumber(v)) return false;
	}
	return true;
}

export function isObjectOfObjects (x: any): boolean {
	if (!isObject(x)) return false;

	const values: any[] = Object.values(x);
	if (values.length === 0) return false;

	for (const v of values) {
		if (!isObject(v)) return false;
	}
	return true;
}

export function isObjectOfStrings (x: any): boolean {
	if (!isObject(x)) return false;

	const values: any[] = Object.values(x);
	if (values.length === 0) return false;

	for (const v of values) {
		if (!isString(v)) return false;
	}
	return true;
}
