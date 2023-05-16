
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

	isSimple,
	isComplex,
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

	isNotSimple,
	isNotComplex,
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

	isArray2D,
	isGrid,
	isTable,
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

	isHashTable,
	isObject2D,
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
