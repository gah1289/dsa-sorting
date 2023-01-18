// Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// If the “minimum” is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
	let minIndex = 0;
	let comparingIndex = minIndex + 1;

	while (minIndex < arr.length) {
		while (comparingIndex < arr.length) {
			if (arr[minIndex] > arr[comparingIndex]) {
				let newMinimum = arr[comparingIndex];
				arr[comparingIndex] = arr[minIndex];
				arr[minIndex] = newMinimum;
			}
			comparingIndex++;
		}
		minIndex++;
		comparingIndex = minIndex + 1;
	}

	return arr;
}

module.exports = selectionSort;
