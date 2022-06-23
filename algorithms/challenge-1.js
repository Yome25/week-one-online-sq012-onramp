function secondLargest(arr) {
    const sortedArr = arr.sort((a, b) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
    
      const secondBiggest = sortedArr[sortedArr.length - 2];
    
      return secondBiggest;
}
module.exports = secondLargest