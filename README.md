
# whichtype
[`whichtype`](https://www.npmjs.com/package/whichtype) is a small `JavaScript/TypeScript` library for checking the type of your variables, written in `TypeScript`.
It has no dependencies.

I felt the need for `whichtype` when I was working on [`josn`](https://github.com/iaseth/josn).

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/whichtype/blob/master/README.md.rx).


## Table of contents
* [whichtype](#whichtype)
    * [Table of contents](#table-of-contents)
    * [Installation](#installation)
    * [Documentation](#documentation)
    * [Package details](#package-details)
    * [Dependencies](#dependencies)
    * [Dev dependencies](#dev-dependencies)
    * [License](#license)


## Installation
You can install [`whichtype`](https://www.npmjs.com/package/whichtype) with the following command:
```
npm i whichtype
```
Now, you can import `whichtype` in your project as follows.
```
const whichtype = require("whichtype");
```
```
whichtype.isNumber(100);    // true
```


## Documentation
`whichtype` exports the following functions.
Each of these functions accept a single argument and return `true` or `false`.

| Function | Description |
| -------- | ----------- |
| **Basics** |  |
| `isArray(arg)` | Returns `true` only if `arg` is an Array. |
| `isBoolean(arg)` | Returns `true` only if `arg` is a Boolean. |
| `isChar(arg)` | Returns `true` only if `arg` is a Char. |
| `isNumber(arg)` | Returns `true` only if `arg` is a Number. |
| `isObject(arg)` | Returns `true` only if `arg` is an Object. |
| `isString(arg)` | Returns `true` only if `arg` is a String. |
| `isNull(arg)` | Returns `true` only if `arg` is null. |
| `isUndefined(arg)` | Returns `true` only if `arg` is undefined. |
| `isPrimitive(arg)` | Returns `true` only if `arg` is a Primitive value. |
| `isReference(arg)` | Returns `true` only if `arg` is a Reference value. |
| **Inverses** |  |
| `isNotArray(arg)` | Returns `true` only if `arg` is not an Array. |
| `isNotBoolean(arg)` | Returns `true` only if `arg` is not a Boolean. |
| `isNotChar(arg)` | Returns `true` only if `arg` is not a Char. |
| `isNotNumber(arg)` | Returns `true` only if `arg` is not a Number. |
| `isNotObject(arg)` | Returns `true` only if `arg` is not an Object. |
| `isNotString(arg)` | Returns `true` only if `arg` is not a String. |
| `isNotNull(arg)` | Returns `true` only if `arg` is not null. |
| `isNotUndefined(arg)` | Returns `true` only if `arg` is not undefined. |
| `isNotPrimitive(arg)` | Returns `true` only if `arg` is not a Primitive value. |
| `isNotReference(arg)` | Returns `true` only if `arg` is not a Reference value. |
| **Arg Functions** | For checking the type of command line arguments. |
| `hasAColon(arg)` | Returns `true` only if `arg` contains a `colon`. |
| `isNumeric(arg)` | Returns `true` only if `arg` is a numeric string. |
| `isArrayIndex(arg)` | Returns `true` only if `arg` is an array index. |
| `isObjectKey(arg)` | Returns `true` only if `arg` is an object key. |
| `isFlag(arg)` | Returns `true` only if `arg` is a flag. |
| `isNotFlag(arg)` | Returns `true` only if `arg` is NOT a flag. |
| `isSingleFlag(arg)` | Returns `true` only if `arg` is a single flag. |
| `isDoubleFlag(arg)` | Returns `true` only if `arg` is a double flag. |
| `isTripleFlag(arg)` | Returns `true` only if `arg` is a triple flag. |
| **Array Functions** | For checking the type of Arrays. |
| `isEmptyArray(arg)` | Returns `true` only if `arg` is an empty Array. |
| `isArrayOfArrays(arg)` | Returns `true` only if `arg` is an Array of Arrays. |
| `isArrayOfBooleans(arg)` | Returns `true` only if `arg` is an Array of Boolean values. |
| `isArrayOfChars(arg)` | Returns `true` only if `arg` is an Array of Char values. |
| `isArrayOfNumbers(arg)` | Returns `true` only if `arg` is an Array of Numbers. |
| `isArrayOfObjects(arg)` | Returns `true` only if `arg` is an Array of Objects. |
| `isArrayOfStrings(arg)` | Returns `true` only if `arg` is an Array of Strings. |
| **Object Functions** | For checking the type of Objects |
| `isEmptyObject(arg)` | Returns `true` only if `arg` is an empty Object. |
| `isObjectOfArrays(arg)` | Returns `true` only if `arg` is an Object only containing Array values. |
| `isObjectOfBooleans(arg)` | Returns `true` only if `arg` is an Object only containing Boolean values. |
| `isObjectOfChars(arg)` | Returns `true` only if `arg` is an Object only containing Char values. |
| `isObjectOfNumbers(arg)` | Returns `true` only if `arg` is an Object only containing Number values. |
| `isObjectOfObjects(arg)` | Returns `true` only if `arg` is an Object only containing Object values. |
| `isObjectOfStrings(arg)` | Returns `true` only if `arg` is an Object only containing String values. |


## Package details
| `Name`        | `Value`                                                                            |
| ------------- | ---------------------------------------------------------------------------------- |
| `Name`        | `whichtype`                                                                        |
| `Description` | `Whichtype is a small JavaScript library for checking the type of your variables.` |
| `Version`     | `1.4.0`                                                                            |
| `Author`      | `iaseth`                                                                           |
| `Homepage`    | `https://github.com/iaseth/whichtype`                                              |
| `Repository`  | `iaseth/whichtype`                                                                 |
| `License`     | `MIT`                                                                              |



## Dependencies
This package has no dependencies.


## Dev dependencies
|     | `Package`     | `Version`   |
| --- | ------------- | ----------- |
| 1   | `@types/jest` | `^29.5.1`   |
| 2   | `jest`        | `^29.5.0`   |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).


