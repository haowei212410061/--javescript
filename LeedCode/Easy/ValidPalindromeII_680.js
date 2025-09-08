function isPalindrome(str) {
    let start = 0, end = str.length - 1

    while (start < end) {
        if (str[start] !== str[end]) return false
        start++
        end--
    }
    return true
}


/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(str) {
    let start = 0, end = str.length - 1
    while (start < end) {
        if (str[start] !== str[end]) {
            return isPalindrome(str.slice(start, end)) || isPalindrome(str.slice(start + 1, end + 1))
        }
        start++
        end--
    }
    return true
}

/**
更好的做法（O(n)）：
雙指針 l, r 從兩端往中間掃。
若 s[l] === s[r] 繼續；首次遇到不相等時，有且只允許一次刪除：
檢查子字串 s[l+1..r] 是否回文，或 s[l..r-1] 是否回文。
兩次檢查各是 O(n)，而且只在第一次失配時做，所以整體 O(n)。
 */