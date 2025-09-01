function reverseItem(str, k) {
    let reverse = ""
    for (let i = k - 1; i >= 0; i--) {
        reverse += str[i]
    }

    return reverse + str.slice(k)
}
function reverseStr(str,count){
    let result = []
    let add = 2 * count;
    let key = 0
    let remain = str.length % add;
    for (let i = add; i <= str.length; i += add) {
        const string = str.slice(key, i)
        if (string.length === add) result.push(reverseItem(string, count))
        key = i
    }

    if (remain !== 0) {
        const Count = Math.floor(str.length / add)
        const reverseStr = str.slice(Count * add)

        if (reverseStr.length >= count && reverseStr.length < add) {
            result.push(reverseItem(reverseStr, count))
        } else if (reverseStr.length < count) {
            result.push(reverseStr.split('').reverse().join(''))
        }


    }


    return result.join('')
}

/**
 * 核心思路

每 2k 為一個處理單位：

把字串分成區塊 [0..2k-1], [2k..4k-1], ...

在每個區塊內處理翻轉。

判斷當前區塊的前 k 個字元：

如果剩下的字元數 >= k → 翻轉前 k 個。

如果剩下 < k → 翻轉全部剩下的字元。

其他部分保持原樣。
 */