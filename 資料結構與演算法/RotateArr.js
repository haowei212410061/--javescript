function rotateArr(arr){
    let result = [[],[],[]]

    for(let i = 0 ; i < arr.length ;i++){
        for(let j = 0 ; j < arr.length ; j++){
            result[j][i] = arr[i][j]
        }
    }
    for(let i = 0 ; i < result.length ;i++){
        result[i].reverse();
    }

    return result.reverse();
}
console.log(rotateArr([[1,2,3],
                       [4,5,6],
                       [7,8,9]]))
