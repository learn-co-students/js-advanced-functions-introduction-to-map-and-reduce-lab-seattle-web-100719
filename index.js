// Your code here
function mapToNegativize(array) {
    return array.map(num => num * (-1))
}
function mapToNoChange(array) {
    return array.map(num => num)
}
function mapToDouble(array) {
    return array.map(num => 2 * num)
}
function mapToSquare(array) {
    return array.map(num => num ** 2)
}

function reduceToTotal(array, start = 0) {
    return array.reduce((memo, num) => memo + num, start)
}
function reduceToAllTrue(array) {
    return array.every((val => val != false))
}
function reduceToAnyTrue(array) {
    return array.some((val => val == true))
}