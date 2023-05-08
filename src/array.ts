import { isArray, isBoolean, isChar, isNumber, isObject, isString } from "./basictypes";



export function isArrayOfArrays (x: any): boolean {
	if (!isArray(x)) return false;
	x.forEach((e: any) => {
		if (!isArray(e)) return false;
	});
	return true;
}

export function isArrayOfBooleans (x: any): boolean {
	if (!isArray(x)) return false;
	x.forEach((e: any) => {
		if (!isBoolean(e)) return false;
	});
	return true;
}

export function isArrayOfChars (x: any): boolean {
	if (!isArray(x)) return false;
	x.forEach((e: any) => {
		if (!isChar(e)) return false;
	});
	return true;
}

export function isArrayOfNumbers (x: any): boolean {
	if (!isArray(x)) return false;
	x.forEach((e: any) => {
		if (!isNumber(e)) return false;
	});
	return true;
}

export function isArrayOfObjects (x: any): boolean {
	if (!isArray(x)) return false;
	x.forEach((e: any) => {
		if (!isObject(e)) return false;
	});
	return true;
}

export function isArrayOfStrings (x: any): boolean {
	if (!isArray(x)) return false;
	x.forEach((e: any) => {
		if (!isString(e)) return false;
	});
	return true;
}
