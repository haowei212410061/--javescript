function isSumEqual(firstWord, secondWord, targetWord) {
    const str = "abcdefghijklmnopqrstuvwxyz"
    let strMap = {}
    let num1 = "", num2 = "", targetNum = ""

    for (let i = 0; i < str.length; i++)strMap[str[i]] = i

    for (let j = 0; j < firstWord.length; j++)num1 += strMap[firstWord[j]]
    for (let k = 0; k < secondWord.length; k++)num2 += strMap[secondWord[k]]
    for (let l = 0; l < targetWord.length; l++)targetNum += strMap[targetWord[l]]

    return Number(num1) + Number(num2) === Number(targetNum)
}
