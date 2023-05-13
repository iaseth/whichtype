
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
	hasAColon,
	isNumeric,
	isArrayIndex,
	isObjectKey,

	isFlag,
	isNotFlag,

	isSingleFlag,
	isDoubleFlag,
	isTripleFlag,
} from './args';


export {
	isEmptyArray,
	isNonEmptyArray,
	isArrayOfArrays,
	isArrayOfBooleans,
	isArrayOfChars,
	isArrayOfNumbers,
	isArrayOfObjects,
	isArrayOfStrings,
} from './array';


export {
	isEmptyObject,
	isNonEmptyObject,
	isObjectOfArrays,
	isObjectOfBooleans,
	isObjectOfChars,
	isObjectOfNumbers,
	isObjectOfObjects,
	isObjectOfStrings,
} from './object';


export {
	isLowerCase,
	isUpperCase,
} from './strings';


export {
	isHttp,
	isHttps,
	isURL,
} from './urls';
