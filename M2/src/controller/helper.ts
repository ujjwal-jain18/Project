const Sorting = (object: object, sortAlgorithm: string) => {
  let result = {};
  switch (sortAlgorithm) {
    case 'mergeSort':
      result = sortObject(object, mergeSort);
      break;
    case 'quickSort':
      result = sortObject(object, quickSort);
      break;
    default:
      result = sortObject(object, quickSort);
  }
  return result;
};

const sortObject = (object: object, func: any) => {
  const result = sortObjectHelper(object, func);
  return result;
};

const sortObjectHelper = (obj: object, sortFuntion: any): object => {
  const len = Object.keys(obj).length;
  const unsorted = Object.keys(obj);
  if (len) {
    for (let i = 0; i < len; i++) {
      if (
        typeof obj[unsorted[i]] === 'object' &&
        !Array.isArray(obj[unsorted[i]])
      ) {
        const temp = sortObjectHelper(obj[unsorted[i]], sortFuntion);
        sortObjectHelper[unsorted[i]] = temp;
      }
    }
    const sortedArray = sortFuntion(Object.keys(obj));
    const tempObj = {};
    for (let i = 0; i < len; i++) {
      tempObj[sortedArray[i]] = obj[sortedArray[i]];
    }
    obj = tempObj;
  }
  return obj;
};

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const subLeft = mergeSort(arr.slice(0, mid));
  const subRight = mergeSort(arr.slice(mid));

  return merge(subLeft, subRight);
};

const merge = (node1, node2) => {
  const result = [];
  while (node1.length > 0 && node2.length > 0)
    result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
  return result.concat(node1.length ? node1 : node2);
};

const quickSort = arr => {
  const len = arr.length;
  if (len > 2) {
    quickSortHelper(arr, 0, arr.length - 1);
  }
};

const quickSortHelper = (arr, low, high) => {
  if (low < high) {
    let pivot = Math.floor((high + low) / 2);
    pivot = partation(arr, arr[pivot], low, high);
    quickSortHelper(arr, pivot + 1, high);
    quickSortHelper(arr, low, pivot - 1);
  }
};

const partation = (arr, pivot, low, high) => {
  while (low < high) {
    while (arr[low] < pivot) {
      low++;
    }
    while (arr[high] > pivot) {
      high--;
    }
    if (low <= high) {
      const temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
    }
  }
  return low;
};

export default Sorting;
