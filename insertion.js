// Start by picking the second element in the array (we will assume the first element is the start of the “sorted” portion)
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.

// Step 1: Assume the first element is already in the right place.
// Step 2: Select the next element and keep it individually in a key.
// Step 3: Compare the value in the key with all the elements in the sorted array.
// Step 4: If the element of the sorted array is smaller than the current item, move to the next. Else, shift the bigger elements towards the right.
// Step 5: Insert a new value
// Step 6: Repeat till the whole array gets sorted.
// https://www.stechies.com/insertion-sort-javascript/

function insertionSort(arr) {
	let i, key, j;
	for (i = 1; i < arr.length; i++) {
		key = arr[i];
		j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}

	return arr;
}

module.exports = insertionSort;
