function sumOfTripledEvens(array) {
    const oddNums = array.filter(num => num % 2 === 0);

    const mapped = oddNums.map((num) => num * 3);

    const redu = mapped.reduce((total, currentItem) => {
        return total + currentItem;
    })

    return redu;
  }

const myArray = [1, 2, 3, 4];

console.log(sumOfTripledEvens(myArray));