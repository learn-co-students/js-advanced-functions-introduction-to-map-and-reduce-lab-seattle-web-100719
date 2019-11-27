// Your code here
function mapToNegativize(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=arr[i]*(-1)
    }
    return arr
}

function  mapToNoChange(arr){
    return arr
}


function mapToDouble(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=arr[i]*(2)
    }
    return arr
}


function mapToSquare(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=arr[i]**(2)
    }
    return arr
}

function  reduceToTotal(arr, startingPoint=0){
    for (let i=0; i<arr.length; i++){
        startingPoint+= arr[i]
    }
    return startingPoint
}

function  reduceToAllTrue(arr){
    let result 
    for (let i=0; i<arr.length; i++){
       if  (arr[i]){
            result = true
       } else {
           result = false 
       }
    }
    return result
}

function  reduceToAnyTrue(arr){
    let result = false
    for (let i=0; i<arr.length; i++){
       if  (arr[i]){
            result = true
       }
    }
    return result
}

