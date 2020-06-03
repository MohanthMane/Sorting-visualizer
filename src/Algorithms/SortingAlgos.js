class SortingAlgos {
	selectedColor = '#08D3AC';
	originalColor = '#303846';

	sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async preSwap(barOneStyle, barTwoStyle, speed) {
		barOneStyle.backgroundColor = this.selectedColor;
		barTwoStyle.backgroundColor = this.selectedColor;
		// await this.sleep(totalTime*milliFactor/totalOps);
		await this.sleep(speed);
	}

	doSwap(barOneStyle, barTwoStyle) {
		let temp = barOneStyle.height;
		barOneStyle.height = barTwoStyle.height;
		barTwoStyle.height = temp;
	}

	postSwap(barOneStyle, barTwoStyle) {
		barOneStyle.backgroundColor = this.originalColor;
		barTwoStyle.backgroundColor = this.originalColor;
	}

	async bubbleSort(array, arrayBars, speed) {
		let swapped;
		let len = array.length - 1;
		do {
			swapped = false;
			for (let i = 0; i < len; i++) {
				const barOneStyle = arrayBars[i].style;
				const barTwoStyle = arrayBars[i + 1].style;
        await this.preSwap(barOneStyle, barTwoStyle, speed);
        
				if (array[i] > array[i + 1]) {
					let temp = array[i];
					array[i] = array[i + 1];
					array[i + 1] = temp;
					swapped = true;

					this.doSwap(barOneStyle, barTwoStyle);
				}
				this.postSwap(barOneStyle, barTwoStyle);
			}
			len--;
		} while (swapped);
	}

	async mergeSort(array, arrayBars, speed) {
		console.log(speed);
		if (array.length <= 1) return;
		await this.mergeSortHelper(
			array,
			arrayBars,
			0,
			array.length - 1,
			speed
		);
	}

	async mergeSortHelper(array, arrayBars, low, high, speed) {
		if (low === high) return;

		let mid = Math.floor((low + high) / 2);

		await this.mergeSortHelper(array, arrayBars, low, mid, speed);
		await this.mergeSortHelper(array, arrayBars, mid + 1, high, speed);
		await this.merge(array, arrayBars, low, high, speed);
	}

	async merge(array, arrayBars, low, high, speed) {
		let mid = Math.floor((low + high) / 2);
		let p = low;
		let q = mid + 1;

		let arr = [],
			k = 0;

		for (let i = low; i <= high; i++) {
			await this.sleep(speed/10);
			if (p > mid) {
				arrayBars[k + low].style.height = `${array[q] * 5}px`;
				arr.push(array[q++]);
				k++;
			} else if (q > high) {
				arrayBars[k + low].style.height = `${array[p] * 5}px`;
				arr.push(array[p++]);
				k++;
			} else if (array[p] < array[q]) {
				arrayBars[p].style.backgroundColor = this.selectedColor;
				arrayBars[q].style.backgroundColor = this.selectedColor;
				await this.sleep(speed);

				arrayBars[k + low].style.height = `${array[p] * 5}px`;
				arrayBars[p].style.backgroundColor = this.originalColor;
				arrayBars[q].style.backgroundColor = this.originalColor;
				arr.push(array[p++]);
				k++;
			} else {
				arrayBars[p].style.backgroundColor = this.selectedColor;
				arrayBars[q].style.backgroundColor = this.selectedColor;
				await this.sleep(speed);

				arrayBars[k + low].style.height = `${array[q] * 5}px`;
				arrayBars[p].style.backgroundColor = this.originalColor;
				arrayBars[q].style.backgroundColor = this.originalColor;
				arr.push(array[q++]);
				k++;
			}
		}

		for (let p = 0; p < arr.length; p++) {
			array[low] = arr[p];
			arrayBars[low].style.height = `${arr[p] * 5}px`;
			low++;
		}
	}
}

export default SortingAlgos;
