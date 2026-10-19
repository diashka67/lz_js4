//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ
/** 1
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray(start, end) {
	let newArr = [];
	for (let i = start; i <= end; i++) {
		newArr.push(i);
	}
	return newArr;
}
console.log(getIntervalArray(1, 5));

function getIntervalArray2(start, end) {
	return Array(end - start + 1)
		.fill()
		.map((_, i) => start + i);
}
console.log(getIntervalArray2(1, 5));

/**2
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays(arr1, arr2) {
	let newArr = [];
	let maxLen = Math.max(arr1.length, arr2.length);
	for (let i = 0; i < maxLen; i++) {
		let a = arr1[i] || 0;
		let b = arr2[i] || 0;
		newArr.push(a + b);
	}
	return newArr;
}
console.log(sumArrays([-1, 0, 1], [1, 2, 3, 4]));

function sumArrays2(arr1, arr2) {
	let maxLen = Math.max(arr1.length, arr2.length);
	return Array.from(
		{ length: maxLen },
		(_, i) => (arr1[i] || 0) + (arr2[i] || 0),
	);
}
console.log(sumArrays2([1, 2, 3], [4, 5, 6]));

/**3
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
}
console.log(findElement(['Ace', 10, true], 10));

function findElement2(arr, value) {
	return arr.indexOf(value);
}
console.log(findElement2(['Array', 'Number', 'string'], 'Date'));

/**4
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(arr, item) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			count++;
		}
	}
	return count;
}
console.log(findAllOccurrences([0, 0, 1, 1, 1, 2], 1));

function findAllOccurrences2(arr, item) {
	return arr.filter((el) => el === item).length;
}
console.log(findAllOccurrences2([1, 2, 3, 4, 5], 0));

/**5
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(removeFalsyValues([0, false, 'cat', NaN, true, '']));

function removeFalsyValues2(arr) {
	return arr.filter(Boolean);
}
console.log(removeFalsyValues2([1, 2, 3, 4, 5, 'false']));

/**6
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i].length);
	}
	return newArr;
}
console.log(getStringsLength(['', 'a', 'bc', 'def', 'ghij']));

function getStringsLength2(arr) {
	return arr.map((str) => str.length);
}
console.log(getStringsLength2(['angular', 'react', 'ember']));

/**7
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage(arr) {
	if (arr.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return Number((sum / arr.length).toFixed(2));
}
console.log(getAverage([1, 10, 100, 1000]));

function getAverage2(arr) {
	if (arr.length === 0) return 0;
	let sum = arr.reduce((acc, num) => acc + num, 0);
	return Number((sum / arr.length).toFixed(2));
}
console.log(getAverage2([2, 3, 3]));

/**8
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(arr) {
	if (arr.length === 0) return true;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length !== arr[0].length) {
			return false;
		}
	}
	return true;
}
console.log(isSameLength(['orange', 'banana', 'cherry']));

function isSameLength2(arr) {
	if (arr.length === 0) return true;
	return arr.every((str) => str.length === arr[0].length);
}
console.log(isSameLength2(['cat', 'dog', 'elephant']));

/**9
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === i) {
			return true;
		}
	}
	return false;
}
console.log(isValueEqualsIndex([2, 1, 0, 4, 5]));

function isValueEqualsIndex2(arr) {
	return arr.some((el, i) => el === i);
}
console.log(isValueEqualsIndex2([10, 20, 30, 40, 50]));

/**10
 * Inserts the item into specified array at specified index.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
	let newArr = [];
	for (let i = 0; i < arr.length + 1; i++) {
		if (i < index) {
			newArr.push(arr[i]);
		} else if (i === index) {
			newArr.push(item);
		} else {
			newArr.push(arr[i - 1]);
		}
	}
	return newArr;
}
console.log(insertItem([1, 3, 4, 5], 2, 1));

function insertItem2(arr, item, index) {
	let newArr = [...arr];
	newArr.splice(index, 0, item);
	return newArr;
}
console.log(insertItem2([1, 'b', 'c'], 'x', 0));

/**11
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead(arr, n) {
	let newArr = [];
	let end = Math.min(arr.length, n);
	for (let i = 0; i < end; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
}
console.log(getHead([1, 3, 4, 5], 2));

function getHead2(arr, n) {
	return arr.slice(0, n);
}
console.log(getHead2(['a', 'b', 'c', 'd'], 3));

/**12
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(arr, n) {
	let newArr = [];
	let start = Math.max(0, arr.length - n);
	for (let i = start; i < arr.length; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
}
console.log(getTail([1, 3, 4, 5], 2));

function getTail2(arr, n) {
	if (n === 0) return [];
	return arr.slice(-n);
}
console.log(getTail2(['a', 'b', 'c', 'd'], 3));

/**13
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length * 2; i++) {
		newArr.push(arr[i % arr.length]);
	}
	return newArr;
}
console.log(doubleArray(['Ace', 10, true]));

function doubleArray2(arr) {
	return arr.concat(arr);
}
console.log(doubleArray2([0, 1, 2, 3, 4, 5]));

/**14
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(arr) {
	if (arr.length === 0) return '';
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += (i === 0 ? '' : ',') + arr[i];
	}
	return str;
}
console.log(toStringList([0, false, 'cat', NaN, true, '']));

function toStringList2(arr) {
	return arr.join(',');
}
console.log(toStringList2([1, 2, 3, 4, 5]));

/**15
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newArr.includes(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(distinct([1, 2, 3, 3, 2, 1]));

function distinct2(arr) {
	return [...new Set(arr)];
}
console.log(distinct2(['a', 'a', 'a', 'a']));

/**16
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(n, size) {
	if (n === 1) {
		let zeros = [];
		for (let i = 0; i < size; i++) {
			zeros.push(0);
		}
		return zeros;
	}
	let newArr = [];
	for (let i = 0; i < size; i++) {
		newArr.push(createNDimensionalArray(n - 1, size));
	}
	return newArr;
}
console.log(createNDimensionalArray(2, 3));

function createNDimensionalArray2(n, size) {
	if (n === 1) return Array.from({ length: size }, () => 0);
	return Array.from({ length: size }, () =>
		createNDimensionalArray2(n - 1, size),
	);
}
console.log(createNDimensionalArray2(3, 2));

/**17
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray(nestedArray) {
	let newArr = [];
	for (let i = 0; i < nestedArray.length; i++) {
		if (Array.isArray(nestedArray[i])) {
			newArr.push(...flattenArray(nestedArray[i]));
		} else {
			newArr.push(nestedArray[i]);
		}
	}
	return newArr;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6]));

function flattenArray2(nestedArray) {
	return nestedArray.flat(Infinity);
}
console.log(flattenArray2(['a', ['b', ['c', 'd'], 'e'], 'f']));

/**18
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(...childrenSelector(arr[i]));
	}
	return newArr;
}
console.log(
	selectMany(
		[
			[1, 2],
			[3, 4],
			[5, 6],
		],
		(x) => x,
	),
);

function selectMany2(arr, childrenSelector) {
	return arr.flatMap(childrenSelector);
}
console.log(selectMany2(['one', 'two', 'three'], (x) => x.split('')));

/**19
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i][0] - arr[i][1];
	}
	return sum;
}
console.log(
	calculateBalance([
		[10, 8],
		[5, 1],
	]),
);

function calculateBalance2(arr) {
	return arr.reduce((sum, [income, expense]) => sum + (income - expense), 0);
}
console.log(
	calculateBalance2([
		[10, 8],
		[1, 5],
	]),
);

/**20
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks(arr, chunkSize) {
	let newArr = [];
	let i = 0;
	while (i < arr.length) {
		newArr.push(arr.slice(i, i + chunkSize));
		i += chunkSize;
	}
	return newArr;
}
console.log(createChunks([1, 2, 3, 4, 5, 6, 7], 3));

function createChunks2(arr, chunkSize) {
	let count = Math.ceil(arr.length / chunkSize);
	return Array.from({ length: count }, (_, i) =>
		arr.slice(i * chunkSize, i * chunkSize + chunkSize),
	);
}
console.log(createChunks2(['a', 'b', 'c', 'd', 'e'], 2));

/**21
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
	let newArr = [];
	for (let i = 0; i < len; i++) {
		newArr.push(i * 2 + 1);
	}
	return newArr;
}
console.log(generateOdds(5));

function generateOdds2(len) {
	return Array.from({ length: len }, (_, i) => i * 2 + 1);
}
console.log(generateOdds2(2));

/**22
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
function getElementByIndices(arr, indices) {
	let el = arr;
	for (let i = 0; i < indices.length; i++) {
		el = el[indices[i]];
	}
	return el;
}
console.log(
	getElementByIndices(
		[
			[1, 2],
			[3, 4],
			[5, 6],
		],
		[0, 0],
	),
);

function getElementByIndices2(arr, indices) {
	return indices.reduce((el, i) => el[i], arr);
}
console.log(getElementByIndices2([[[1, 2, 3]]], [0, 0, 1]));

/**23
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (!arr[i]) {
			count++;
		}
	}
	return count;
}
console.log(getFalsyValuesCount([-1, 'false', null, 0]));

function getFalsyValuesCount2(arr) {
	return arr.filter((item) => !item).length;
}
console.log(getFalsyValuesCount2([null, undefined, NaN, false, 0, '']));

/**24
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
	let matrix = [];
	for (let i = 0; i < n; i++) {
		let row = [];
		for (let j = 0; j < n; j++) {
			row.push(i === j ? 1 : 0);
		}
		matrix.push(row);
	}
	return matrix;
}
console.log(getIdentityMatrix(2));

function getIdentityMatrix2(n) {
	return Array.from({ length: n }, (_, i) =>
		Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)),
	);
}
console.log(getIdentityMatrix2(1));

/**25
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(numbers) {
	let newArr = [];
	for (let i = 0; i < numbers.length; i++) {
		if (Math.abs(numbers[i]) % 2 !== 0) {
			newArr.push(i);
		}
	}
	return newArr;
}
console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5]));

function getIndicesOfOddNumbers2(numbers) {
	return numbers
		.map((num, i) => (Math.abs(num) % 2 !== 0 ? i : -1))
		.filter((i) => i !== -1);
}
console.log(getIndicesOfOddNumbers2([2, 4, 6, 8, 10]));

/**26
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let hex = arr[i].toString(16).toUpperCase().padStart(6, '0');
		newArr.push('#' + hex);
	}
	return newArr;
}
console.log(getHexRGBValues([0, 255, 16777215]));

function getHexRGBValues2(arr) {
	return arr.map(
		(num) => '#' + num.toString(16).toUpperCase().padStart(6, '0'),
	);
}
console.log(getHexRGBValues2([]));

/**27
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(arr, n) {
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		arr2.push(arr[i]);
	}
	for (let i = 0; i < arr2.length; i++) {
		for (let j = 0; j < arr2.length - 1 - i; j++) {
			if (arr2[j] < arr2[j + 1]) {
				let temp = arr2[j];
				arr2[j] = arr2[j + 1];
				arr2[j + 1] = temp;
			}
		}
	}
	let newArr = [];
	for (let i = 0; i < n && i < arr2.length; i++) {
		newArr.push(arr2[i]);
	}
	return newArr;
}
console.log(getMaxItems([10, 2, 7, 5, 3, -5], 3));

function getMaxItems2(arr, n) {
	return [...arr].sort((a, b) => b - a).slice(0, n);
}
console.log(getMaxItems2([2, 3, 1], 2));

/**28
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(arr1, arr2) {
	let newArr = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			newArr.push(arr1[i]);
		}
	}
	return newArr;
}
console.log(findCommonElements([1, 2, 3], [2, 3, 4]));

function findCommonElements2(arr1, arr2) {
	return arr1.filter((item) => arr2.includes(item));
}
console.log(findCommonElements2(['a', 'b', 'c'], ['b', 'c', 'd']));

/**29
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(nums) {
	if (nums.length === 0) return 0;
	let max = 1;
	let count = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			count++;
		} else {
			count = 1;
		}
		if (count > max) {
			max = count;
		}
	}
	return max;
}
console.log(
	findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]),
);

function findLongestIncreasingSubsequence2(nums) {
	let max = nums.length > 0 ? 1 : 0;
	let count = 1;
	nums.forEach((num, i) => {
		if (i === 0) return;
		count = num > nums[i - 1] ? count + 1 : 1;
		if (count > max) max = count;
	});
	return max;
}
console.log(findLongestIncreasingSubsequence2([3, 10, 2, 1, 20]));

/**30
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i + 1; j++) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(propagateItemsByPositionIndex(['a', 'b', 'c', null]));

function propagateItemsByPositionIndex2(arr) {
	return arr.flatMap((item, i) => Array(i + 1).fill(item));
}
console.log(propagateItemsByPositionIndex2([1, 2, 3, 4, 5]));

/**31
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(arr, n) {
	let len = arr.length;
	if (len === 0) return [];
	let step = ((n % len) + len) % len;
	let newArr = [];
	for (let i = 0; i < len; i++) {
		newArr[(i + step) % len] = arr[i];
	}
	return newArr;
}
console.log(shiftArray([1, 2, 3, 4, 5], 2));

function shiftArray2(arr, n) {
	let newArr = [...arr];
	let len = newArr.length;
	if (len === 0) return [];
	let step = Math.abs(n) % len;
	if (step === 0) return newArr;
	if (n > 0) {
		for (let i = 0; i < step; i++) {
			newArr.unshift(newArr.pop());
		}
	} else {
		for (let i = 0; i < step; i++) {
			newArr.push(newArr.shift());
		}
	}
	return newArr;
}
console.log(shiftArray2(['a', 'b', 'c', 'd'], -1));

/**32
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
	let digits = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	let newArr = [];
	for (let i = 0; i < digits.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === digits[i]) {
				newArr.push(arr[j]);
			}
		}
	}
	return newArr;
}
console.log(sortDigitNamesByNumericOrder(['nine', 'eight', 'nine', 'eight']));

function sortDigitNamesByNumericOrder2(arr) {
	let digits = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	return [...arr].sort((a, b) => digits.indexOf(a) - digits.indexOf(b));
}
console.log(sortDigitNamesByNumericOrder2(['one', 'one', 'one', 'zero']));

/**33
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(arr) {
	let len = arr.length;
	let half = Math.floor(len / 2);
	let newArr = [];
	for (let i = len - half; i < len; i++) {
		newArr.push(arr[i]);
	}
	if (len % 2 !== 0) {
		newArr.push(arr[half]);
	}
	for (let i = 0; i < half; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
}
console.log(swapHeadAndTail([1, 2, 3, 4, 5]));

function swapHeadAndTail2(arr) {
	let half = Math.floor(arr.length / 2);
	let head = arr.slice(0, half);
	let tail = arr.slice(arr.length - half);
	let middle = arr.length % 2 !== 0 ? [arr[half]] : [];
	return [...tail, ...middle, ...head];
}
console.log(swapHeadAndTail2([1, 2, 3, 4, 5, 6, 7, 8]));
