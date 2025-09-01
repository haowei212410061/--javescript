function ReverseOnlyLetters(s){
    let start = 0
    let end = s.length - 1
    let arr = s.split('')

    while (start < end) {
        if (/[^a-zA-Z]/.test(arr[start])) start++
        else if (/[^a-zA-Z]/.test(arr[end])) end--
        else {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }
    return arr.join('')
}