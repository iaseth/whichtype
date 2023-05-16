import { isArray, isBoolean, isChar, isNumber, isObject, isString } from "./basictypes";



export function isEmptyArray (x: any): boolean {
	if (isArray(x) && x.length === 0) {
		return true;
	}
	return false;
}

export function isNonEmptyArray (x: any): boolean {
	if (isArray(x) && x.length > 0) {
		return true;
	}
	return false;
}

export function isArrayOfArrays (x: any): boolean {
	if (!isArray(x)) return false;
	if (x.length === 0) return false;
	x.forEach((e: any) => {
		if (!isArray(e)) return false;
	});
	return true;
}

export function isArrayOfBooleans (x: any): boolean {
	if (!isArray(x)) return false;
	if (x.length === 0) return false;
	for (const e of x) {
		if (!isBoolean(e)) return false;
	}
	return true;
}

export function isArrayOfChars (x: any): boolean {
	if (!isArray(x)) return false;
	if (x.length === 0) return false;
	for (const e of x) {
		if (!isChar(e)) return false;
	}
	return true;
}

export function isArrayOfNumbers (x: any): boolean {
	if (!isArray(x)) return false;
	if (x.length === 0) return false;
	for (const e of x) {
		if (!isNumber(e)) return false;
	}
	return true;
}

export function isArrayOfObjects (x: any): boolean {
	if (!isArray(x)) return false;
	if (x.length === 0) return false;
	for (const e of x) {
		if (!isObject(e)) return false;
	}
	return true;
}

export function isArrayOfStrings (x: any): boolean {
	if (!isArray(x)) return false;
	if (x.length === 0) return false;
	for (const e of x) {
		if (!isString(e)) return false;
	}
	return true;
}

export const isArray2D = isArrayOfArrays;
export const isGrid = isArrayOfArrays;
export const isTable = isArrayOfObjects;
