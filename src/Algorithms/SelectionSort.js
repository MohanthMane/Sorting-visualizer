import { SELECTED_COLOR, ORIGINAL_COLOR } from './Colors';
import { sleep } from './Sleep';

export const selectionSort = async (array, arrayBars, speed) => {
	let length = array.length;
	for (let i = 0; i < length; i++) {
		let min = i;
		for (let j = i + 1; j < length; j++) {
			arrayBars[j].style.backgroundColor = SELECTED_COLOR;
			await sleep(speed);
			if (array[min] > array[j]) {
				min = j;
			}
			arrayBars[j].style.backgroundColor = ORIGINAL_COLOR;
		}
		if (min !== i) {
      await blinkMinimum(arrayBars, min, speed);
      arrayBars[i].style.backgroundColor = SELECTED_COLOR;
      arrayBars[min].style.backgroundColor = SELECTED_COLOR;
      await sleep(speed)
      
      arrayBars[i].style.height = `${array[min] * 5}px`
      arrayBars[min].style.height = `${array[i] * 5}px`
      await sleep(speed)
      arrayBars[i].style.backgroundColor = ORIGINAL_COLOR;
      arrayBars[min].style.backgroundColor = ORIGINAL_COLOR;
      
			let temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
};

const blinkMinimum = async (arrayBars, min, speed) => {
	for (let i = 0; i < 3; i++) {
		arrayBars[min].style.backgroundColor = 'red';
		await sleep(speed/5);
		arrayBars[min].style.backgroundColor = ORIGINAL_COLOR;
		await sleep(speed/5);
	}
};
