
export {
	isArray,
	isBoolean,
	isChar,
	isNumber,
	isObject,
	isString,

	isNull,
	isUndefined,

	isPrimitive,
	isReference,
} from "./basictypes";


export {
	isNotArray,
	isNotBoolean,
	isNotChar,
	isNotNumber,
	isNotObject,
	isNotString,

	isNotNull,
	isNotUndefined,

	isNotPrimitive,
	isNotReference,
} from './inverses';


export {
	isEmptyArray,
	isArrayOfArrays,
	isArrayOfBooleans,
	isArrayOfChars,
	isArrayOfNumbers,
	isArrayOfObjects,
	isArrayOfStrings,
} from './array';


export {
	isEmptyObject,
	isObjectOfArrays,
	isObjectOfBooleans,
	isObjectOfChars,
	isObjectOfNumbers,
	isObjectOfObjects,
	isObjectOfStrings,
} from './object';


export {
	isHttp,
	isHttps,
	isURL,
} from './urls';
