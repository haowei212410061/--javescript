function nextId(ids){
    let set = new Set();
    ids.sort().forEach((item)=>set.add(item))
    
    return set
  }
console.log(nextId([0,1,2,3,5]))

function blackOrWhiteKey(k) { 
  const PianoKey = {W:"white",B:"black"}
  const ScaleCycle = "WBWWBWBWWBWB".split("")
  const number = (k - 1) % 88
  if(k <= 12){
    return PianoKey[ScaleCycle[k-1]]
  }else if(k <= 88){
    return PianoKey[ScaleCycle[(k % 12)]]
  }else{
    return PianoKey[ScaleCycle[number % 12]]
  }
}

console.log(blackOrWhiteKey(24))
