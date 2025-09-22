const distributeCandies = function (candyType) {

    // 在一堆candy內 先把candytype / 2 
    // 情況1: 種類 > candyType.length / 2 , 無論挑哪種糖果種類 最後能選的糖果數量就這麼多 所以return candyType.length / 2
    // 情況2: 種類 < candyType.length / 2 , 假設糖果種類為1 能選的糖果數量為2 無論怎麼選 種類都為1 所以同理 return set1.size
    const set1 = new Set(candyType)
    return set1.size > candyType.length / 2 ? candyType.length / 2 : set1.size
};