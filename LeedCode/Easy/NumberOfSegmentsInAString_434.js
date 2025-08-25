var countSegments = function (s) {
    if (s.trim().length === 0) return 0
    return s.trim().split(/ +/g).length
};