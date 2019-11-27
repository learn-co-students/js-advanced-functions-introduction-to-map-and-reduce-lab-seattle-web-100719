// Your code here

function mapToNoChange(arr)
{
    return arr.map(item => {
        return item;
    });
}

function mapToNegativize(arr)
{
    return arr.map(item => {
        return item * -1;
    });
}

function mapToDouble(arr)
{
    return arr.map(item => {
        return item * 2;
    });
}

function mapToSquare(arr)
{
    return arr.map(item => {
        return item ** 2;
    });
}

function reduceToTotal(arr, startingPoint = 0)
{
    return arr.reduce(function(total, element){ return element + total}, startingPoint);
}

function reduceToAllTrue(arr, startingPoint = true)
{
    return arr.reduce(function(total, element){ return element && total}, startingPoint);
}

function reduceToAnyTrue(arr, startingPoint = false)
{
    return arr.reduce(function(total, element){ return element || total}, startingPoint);
}