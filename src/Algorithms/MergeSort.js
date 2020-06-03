import { SELECTED_COLOR, ORIGINAL_COLOR } from "./Colors";
import { sleep } from './Sleep'

export const mergeSort = async (array, arrayBars, speed) => {
	console.log(speed);
	if (array.length <= 1) return;
	await mergeSortHelper(array, arrayBars, 0, array.length - 1, speed);
};

const mergeSortHelper = async (array, arrayBars, low, high, speed) => {
	if (low === high) return;

	let mid = Math.floor((low + high) / 2);

	await mergeSortHelper(array, arrayBars, low, mid, speed);
	await mergeSortHelper(array, arrayBars, mid + 1, high, speed);
	await merge(array, arrayBars, low, high, speed);
};

const merge = async (array, arrayBars, low, high, speed) => {
	let mid = Math.floor((low + high) / 2);
	let p = low;
	let q = mid + 1;

	let arr = [],
		k = 0;

	for (let i = low; i <= high; i++) {
		await sleep(speed / 10);
		if (p > mid) {
			arrayBars[k + low].style.height = `${array[q] * 5}px`;
			arr.push(array[q++]);
			k++;
		} else if (q > high) {
			arrayBars[k + low].style.height = `${array[p] * 5}px`;
			arr.push(array[p++]);
			k++;
		} else if (array[p] < array[q]) {
			arrayBars[p].style.backgroundColor = SELECTED_COLOR;
			arrayBars[q].style.backgroundColor = SELECTED_COLOR;
			await sleep(speed);

			arrayBars[k + low].style.height = `${array[p] * 5}px`;
			arrayBars[p].style.backgroundColor = ORIGINAL_COLOR;
			arrayBars[q].style.backgroundColor = ORIGINAL_COLOR;
			arr.push(array[p++]);
			k++;
		} else {
			arrayBars[p].style.backgroundColor = SELECTED_COLOR;
			arrayBars[q].style.backgroundColor = SELECTED_COLOR;
			await sleep(speed);

			arrayBars[k + low].style.height = `${array[q] * 5}px`;
			arrayBars[p].style.backgroundColor = ORIGINAL_COLOR;
			arrayBars[q].style.backgroundColor = ORIGINAL_COLOR;
			arr.push(array[q++]);
			k++;
		}
	}

	for (let p = 0; p < arr.length; p++) {
		array[low] = arr[p];
		arrayBars[low].style.height = `${arr[p] * 5}px`;
		low++;
	}
};
