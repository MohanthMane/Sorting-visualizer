import { SELECTED_COLOR, ORIGINAL_COLOR } from './Colors';
import { sleep } from './Sleep';

const preSwap = async (barOneStyle, barTwoStyle, speed) => {
	barOneStyle.backgroundColor = SELECTED_COLOR;
	barTwoStyle.backgroundColor = SELECTED_COLOR;
	// await sleep(totalTime*milliFactor/totalOps);
	await sleep(speed);
};

const doSwap = (barOneStyle, barTwoStyle) => {
	let temp = barOneStyle.height;
	barOneStyle.height = barTwoStyle.height;
	barTwoStyle.height = temp;
};

const postSwap = (barOneStyle, barTwoStyle) => {
	barOneStyle.backgroundColor = ORIGINAL_COLOR;
	barTwoStyle.backgroundColor = ORIGINAL_COLOR;
};

export const bubbleSort = async (array, arrayBars, speed) => {
	let swapped;
	let len = array.length - 1;
	do {
		swapped = false;
		for (let i = 0; i < len; i++) {
			const barOneStyle = arrayBars[i].style;
			const barTwoStyle = arrayBars[i + 1].style;
			await preSwap(barOneStyle, barTwoStyle, speed);

			if (array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				swapped = true;

				doSwap(barOneStyle, barTwoStyle);
			}
			postSwap(barOneStyle, barTwoStyle);
		}
		len--;
	} while (swapped);
};
