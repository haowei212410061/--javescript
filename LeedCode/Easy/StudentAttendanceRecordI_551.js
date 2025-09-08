var checkRecord = function (s) {
    let isAbsent = 0
    let isLate = 0
    if (s.includes('LLL')) return false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') isAbsent++
    }

    return isAbsent >= 2 ? false : true
};