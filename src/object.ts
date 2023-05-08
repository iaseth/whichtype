import { isArray, isBoolean, isChar, isNumber, isObject, isString } from "./basictypes";



export function isEmptyObject (x: any): boolean {
	if (isObject(x) && Object.keys(x).length === 0) {
		return true;
	}
	return false;
}

export function isObjectOfArrays (x: any): boolean {
	if (!isObject(x)) return false;
	Object.values(x).forEach(v => {
		if (!isArray(v)) return false;
	});
	return true;
}

export function isObjectOfBooleans (x: any): boolean {
	if (!isObject(x)) return false;
	Object.values(x).forEach(v => {
		if (!isBoolean(v)) return false;
	});
	return true;
}

export function isObjectOfChars (x: any): boolean {
	if (!isObject(x)) return false;
	Object.values(x).forEach(v => {
		if (!isChar(v)) return false;
	});
	return true;
}

export function isObjectOfNumbers (x: any): boolean {
	if (!isObject(x)) return false;
	Object.values(x).forEach(v => {
		if (!isNumber(v)) return false;
	});
	return true;
}

export function isObjectOfObjects (x: any): boolean {
	if (!isObject(x)) return false;
	Object.values(x).forEach(v => {
		if (!isArray(v)) return false;
	});
	return true;
}

export function isObjectOfStrings (x: any): boolean {
	if (!isObject(x)) return false;
	Object.values(x).forEach(v => {
		if (!isString(v)) return false;
	});
	return true;
}
