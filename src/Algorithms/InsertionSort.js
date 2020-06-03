import { SELECTED_COLOR, ORIGINAL_COLOR } from "./Colors";
import { sleep } from "./Sleep";

export const insertionSort = async (array, arrayBars, speed) => {
  let length = array.length
  for (let i=1;i<length;i++) {
    let key = array[i]
    let keyBar = arrayBars[i].style
    let j = i - 1
    keyBar.backgroundColor = 'red'
    await sleep(speed)
    
    while(j >= 0 && array[j] > key) {
      arrayBars[j+1].style.backgroundColor = SELECTED_COLOR
      arrayBars[j].style.backgroundColor = SELECTED_COLOR
      await sleep(speed)
      arrayBars[j+1].style.height = `${array[j] * 5}px`
      array[j+1] = array[j]
      
      arrayBars[j+1].style.backgroundColor = ORIGINAL_COLOR
      arrayBars[j].style.backgroundColor = ORIGINAL_COLOR
      j--
    }
    arrayBars[j+1].style.height = `${key * 5}px`
    keyBar.backgroundColor = ORIGINAL_COLOR
    array[j+1] = key
  }
}