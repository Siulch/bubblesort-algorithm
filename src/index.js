const bubbleSort = (Array) => {
   let len = Array.length;
   for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
         if (Array[j] > Array[j + 1]) {
            let tmp = Array[j];
            Array[j] = Array[j + 1];
            Array[j + 1] = tmp;
         }
      }
   }
};

// const array = [1,6,2,5,7,2,3,5];
// bubbleSort(array)
// console.log(array)

module.exports = bubbleSort;
