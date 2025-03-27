function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function sortAndConcat(arr1, arr2) {
  const sortedArr1 = [...arr1].sort((a, b) => a - b);
  const sortedArr2 = [...arr2].sort((a, b) => a - b);
  return sortedArr1.concat(sortedArr2);
}

function processArrays() {
  const array1 = [3, 8, 2, 5, 10];
  const array2 = [7, 4, 1, 6, 9];
  
  const evenNumbers1 = filterEvenNumbers(array1);
  const evenNumbers2 = filterEvenNumbers(array2);
  
  const sum1 = sumOfArray(array1);
  const sum2 = sumOfArray(array2);
  
  const sortedAndConcatenated = sortAndConcat(array1, array2);
  
  console.log("Even numbers in array1:", evenNumbers1);
  console.log("Even numbers in array2:", evenNumbers2);
  console.log("Sum of array1:", sum1);
  console.log("Sum of array2:", sum2);
  console.log("Sorted and concatenated array:", sortedAndConcatenated);
}

processArrays();
