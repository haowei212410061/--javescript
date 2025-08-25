function lastStoneWeight(stones) {
  if (stones.length === 1) return stones[0];
  else if (stones.length === 2) {
    if (stones[0] === stones[1]) return 0;
    else return Math.abs(stones[0] - stones[1]);
  }
  stones.sort((a, b) => b - a);
  if (stones[0] === stones[1]) return lastStoneWeight(stones.slice(2));
  else {
    let key = stones[0] - stones[1];
    let result = stones.slice(2);
    result.push(key);
    return lastStoneWeight(result);
  }
}


