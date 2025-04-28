let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
    return arr
    .filter(num => (num >= a && num <= b)) 
}

console.log(filterRange(arr, 1, 4))
console.log(arr)