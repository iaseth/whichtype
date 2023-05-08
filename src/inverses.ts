import { isArray, isBoolean, isChar, isNull, isNumber, isObject, isString, isUndefined } from "./basictypes";

export function isNotArray (x: any): boolean {
	return !isArray(x);
}

export function isNotBoolean (x: any): boolean {
	return !isBoolean(x);
}

export function isNotChar (x: any): boolean {
	return !isChar(x);
}

export function isNotNumber (x: any): boolean {
	return !isNumber(x);
}

export function isNotObject (x: any): boolean {
	return !isObject(x);
}

export function isNotString (x: any): boolean {
	return !isString(x);
}

export function isNotNull (x: any): boolean {
	return !isNull(x);
}

export function isNotUndefined (x: any): boolean {
	return !isUndefined(x);
}
