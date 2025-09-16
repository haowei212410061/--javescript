const findKthPositive = function (arr, k) {
    let result = []
    let final = arr[arr.length - 1]
    let key = 0

    for (let i = 1; i <= final; i++) {
        if (arr[key] !== i) {
            result.push(i)
        } else if (arr[key] === i) key++
    }
    console.log(result)

    if(result.length < k){
        k = k - result.length
        result = []
    }

    return result.length === 0 ? final + k : result[k - 1]
};