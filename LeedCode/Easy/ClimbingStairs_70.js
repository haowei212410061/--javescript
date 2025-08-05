function climbStairs(n){
    if(n === 1)return 1;
    if(n === 2)return 2;


    let first = 1;
    let second = 2;
    for(let i = 3 ; i <= n ;i++){
        const third = first + second //計算當前階數有幾種走法
        first = second; // 更新n-2的值為 second
        second = third  // 更新n-1的值為third
    }
    return second //因為在回圈內已經更新了second = third 所以走完迴圈return second就是最後的值
}

console.log(climbStairs(6))

// 用費氏數列推導 f(n) = f(n-1) + f(n-2)

// f(1) = 1
// f(2) = 2
// f(3) = f(2) + f(1) = 3
// f(4) = f(3) + f(2) = 5
// f(5) = f(5) + f(3) = 8
// f(6) = f(8) + f(5) = 13