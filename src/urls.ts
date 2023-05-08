import { isString } from "./basictypes";



export function isHttp (val: any): boolean {
	if (isString(val) && val.startsWith("http://")) {
		return true;
	}
	return false;
}

export function isHttps (val: any): boolean {
	if (isString(val) && val.startsWith("https://")) {
		return true;
	}
	return false;
}

export function isURL (val: any): boolean {
	return isHttps(val) || isHttp(val);
}
