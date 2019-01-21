function mergeSort(originalArray) {

  // keeps stack from overflowing when gets to array of 1
  if(originalArray.length < 2) {
    return originalArray;
  }

  // splitting up the array
  let middle = Math.floor(originalArray.length/2);
  let firstHalf = originalArray.slice(0, middle);
  let secondHalf = originalArray.slice(middle, originalArray.length);

  // it calls itself as a parameter of another function... in its return
  return mergeArrays(mergeSort(firstHalf), mergeSort(secondHalf));
}

function mergeArrays(firstHalf, secondHalf) {
  var sorted = [];

  // because 0 is false in this crazy language
  while(firstHalf.length && secondHalf.length) {

    // compare the first two terms in each array
    // if a <= b, sorted << a
    if (firstHalf[0] <= secondHalf[0]) {
      // push mutates array
      sorted.push(firstHalf.shift())
    }
    else { // if a > b, sorted << b
      sorted.push(secondHalf.shift())
    }
  }
  while(firstHalf.length) {
    sorted.push(firstHalf.shift());
  }
  while(secondHalf.length) {
    sorted.push(secondHalf.shift());
  }
  return sorted;
}


module.exports = mergeSort;
