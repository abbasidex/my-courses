/////////////////////////////////////////////
//// Bubble Sort
/////////////////////////////////////////////

// function bubbleSort(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSort([4, 2, 6, 5, 1, 3]));

/////////////////////////////////////////////
//// Selection Sort
/////////////////////////////////////////////

// function selectionSort(array) {
//   let min;
//   for (let i = 0; i < array.length - 1; i++) {
//     min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) {
//       let temp = array[i];
//       array[i] = array[min];
//       array[min] = temp;
//     }
//   }
//   return array;
// }

// console.log(selectionSort([4, 2, 6, 5, 1, 3]));

/////////////////////////////////////////////
//// Insertion Sort
/////////////////////////////////////////////

// function insertionSort(array) {
//   let temp;
//   for (let i = 1; i < array.length; i++) {
//     temp = array[i];
//     for (var j = i - 1; array[j] > temp && j > -1; j--) {
//       array[j + 1] = array[j];
//     }
//     array[j + 1] = temp;
//   }
//   return array;
// }

// console.log(insertionSort([4, 2, 6, 5, 1, 3]));

/////////////////////////////////////////////
