Bar_size = Math.floor((window.innerWidth - 120) / 15);
timeout = 100;
document.getElementById("fast").addEventListener("click", () => {
  timeout = 30;
});
document.getElementById("default-speed").addEventListener("click", () => {
  timeout = 100;
});
document.getElementById("slow").addEventListener("click", () => {
  timeout = 500;
});
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
Arr = [];
function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
function GenArray() {
  let bars = document.querySelectorAll(".bars");
  for (let index = 0; index < Bar_size; index++) {
    const element = bars[index];
    Arr[index] = randomInt(5, 90);
    element.style.height = Arr[index] + "%";
    element.style.background = "aqua";
  }
}
function draw(array) {
  bars = document.querySelectorAll(".bars");
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    bars[i].style.background = "Violet";
    bars[i].style.height = element + "%";
  }
}
async function mergeSort(array, leftIndex, rightIndex) {
  length = rightIndex - leftIndex;
  if (length < 2) {
    return array;
  }
  var mid = leftIndex + Math.floor(length / 2);

  mergeSort(array, leftIndex, mid);
  mergeSort(array, mid, rightIndex);
  await timer(timeout);
  draw(array);
  merge(array, leftIndex, mid, rightIndex);
}
async function merge(array, leftIndex, mid, rightIndex) {
  bars = document.querySelectorAll(".bars");
  var result = [];
  var l = leftIndex,
    r = mid,
    barIndex = 0;
  while (l < mid && r < rightIndex) {
    if (array[l] < array[r]) {
      result.push(array[l++]);
      //await timer(timeout);
      //bars[barIndex].style.height = result[barIndex] + "%";
      //barIndex++;
    } else {
      result.push(array[r++]);
      //await timer(timeout);
      //bars[barIndex].style.height = result[barIndex] + "%";
      //barIndex++;
    }
  }
  while (l < mid) {
    result.push(array[l++]);
    //bars[barIndex].style.height = result[barIndex] + "%";
    //barIndex++;
  }
  while (r < rightIndex) {
    result.push(array[r++]);
    //bars[barIndex].style.height = result[barIndex] + "%";
    //barIndex++;
  }
  for (let i = 0; i < rightIndex - leftIndex; i++) {
    array[leftIndex + i] = result[i];
  }
  //for (let i = 0; i < result.length; i++) {
  //    const element = result[i];
  //    await timer(timeout)
  //    bars[i].style.height = element + "%";
  //}
}
async function partition(items, left, right, bars) {
  let mid = Math.floor((right + left) / 2);
  var pivot = items[mid],
    i = left,
    j = right;
  bars[mid].style.background = "green";
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      await timer(timeout * (2 / 3));
      bars[j].style.background = "red";
      bars[i].style.background = "red";
      let temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      await timer(timeout * (2 / 3));
      bars[i].style.height = items[i] + "%";
      bars[j].style.height = items[j] + "%";
      await timer(timeout * (2 / 3));
      bars[j].style.background = "aqua";
      bars[i].style.background = "aqua";
      i++;
      j--;
    }
  }
  bars[mid].style.background = "aqua";
  return i;
}
async function quickSort(items, left, right) {
  bars = document.querySelectorAll(".bars");
  var index;
  if (items.length > 1) {
    index = await partition(items, left, right, bars); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
async function insertionSort(inputArr) {
  bars = document.querySelectorAll(".bars");
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    let current = inputArr[i];
    let j = i - 1;
    bars[i].style.background = "green";
    await timer(timeout);
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      bars[j + 1].style.background = "red";
      await timer(timeout);
      bars[j + 1].style.height = inputArr[j + 1] + "%";
      bars[j + 1].style.background = "aqua";
      j--;
    }
    inputArr[j + 1] = current;
    bars[j + 1].style.height = inputArr[j + 1] + "%";
    bars[j + 1].style.background = "green";
    bars[i].style.background = "aqua";
  }
  for (let i = n - 1; i >= 0; i--) {
    await timer(50);
    bars[i].style.background = "violet";
  }
  return inputArr;
}
async function selectionSort(inputArr) {
  let n = inputArr.length;
  bars = document.querySelectorAll(".bars");
  for (let i = 0; i < n; i++) {
    let min = i;
    bars[i].style.background = "green";
    for (let j = i + 1; j < n; j++) {
      bars[j].style.background = "green";
      if (inputArr[j] < inputArr[min]) {
        bars[j].style.background = "red";
        min = j;
      }
      await timer(timeout * (2 / 3));
      bars[j].style.background = "aqua";
    }
    if (min != i) {
      await timer(timeout * (2 / 3));
      bars[min].style.background = "red";
      bars[i].style.background = "red";
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      bars[i].style.height = inputArr[i] + "%";
      inputArr[min] = tmp;
      bars[min].style.height = inputArr[min] + "%";
      await timer(timeout * (2 / 3));
      bars[min].style.background = "aqua";
      bars[i].style.background = "aqua";
    }
  }
  for (let i = 0; i < bars.length; i++) {
    const element = bars[i];
    await timer(50);
    element.style.background = "violet";
  }
  return inputArr;
}
async function bubbleSort(inputArr) {
  let len = Bar_size;
  bars = document.querySelectorAll(".bars");
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      bars[j].style.background = "green";
      bars[j + 1].style.background = "green";
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
        await timer(timeout / 2);
        bars[j].style.background = "red";
        bars[j + 1].style.background = "red";
        bars[j].style.height = Arr[j] + "%";
        bars[j + 1].style.height = Arr[j + 1] + "%";
      }
      await timer(timeout / 2);
      bars[j].style.background = "aqua";
      bars[j + 1].style.background = "aqua";
    }
    bars[len - 1 - i].style.background = "violet";
  }
  return inputArr;
}
document.getElementById("bubbleSort").addEventListener("click", () => {
  bubbleSort(Arr);
});
document.getElementById("insertionSort").addEventListener("click", () => {
  insertionSort(Arr);
});
document.getElementById("selectionSort").addEventListener("click", () => {
  selectionSort(Arr);
});
document.getElementById("quickSort").addEventListener("click", () => {
  quickSort(Arr, 0, Arr.length - 1);
});
document.getElementById("mergeSort").addEventListener("click", async () => {
  await mergeSort(Arr, 0, Arr.length);
  await timer(timeout);
  draw(Arr);
  console.log(Arr);
});
window.onload = function () {
  if (window.innerWidth < 170) {
    Bar_size = 4;
  }
  ul = document.querySelector(".bars-container");
  for (let i = 0; i < Bar_size; i++) {
    ul.insertAdjacentHTML("afterbegin", '<li class="bars"></li>');
  }
  GenArray();
};
