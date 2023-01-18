// Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array.
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				// swap values
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		// if array is iterated with no swaps, it is sorted.
		if (!swapped) break;
	}
	return arr;
}

module.exports = bubbleSort;
