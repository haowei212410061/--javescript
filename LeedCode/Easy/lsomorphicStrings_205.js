function isIsomorphic(s,t){
    let obj1 = {}
    let obj2 = {}

    for (let x = 0; x < s.length; x++) {
        if (Object.hasOwn(obj1, s[x])) continue;
        else obj1[s[x]] = x
    }

    for (let y = 0; y < t.length; y++) {
        if (Object.hasOwn(obj2, t[y])) continue;
        else obj2[t[y]] = y
    }

    let arr1 = s.split('')
    let arr2 = t.split('')

    for (let key in obj1) {
        for (let str1 = 0; str1 < s.length; str1++) {
            if (key === s[str1]) arr1[str1] = String(obj1[key])
        }
    }

    for (let key in obj2) {
        for (let str2 = 0; str2 < t.length; str2++) {
            if (key === t[str2]) arr2[str2] = String(obj2[key])
        }
    }

    return arr1.join(',') === arr2.join(',')
}