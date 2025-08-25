var MyStack = function () {
  this.EnQueue = [];
  this.DeQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.EnQueue.push(x);

  // 除了新加進來的元素 其他都丟到新元素的後面
  for (let i = 0; i < this.EnQueue.length - 1; i++) {
    this.EnQueue.push(this.EnQueue.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.EnQueue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.EnQueue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.EnQueue.length === 0 && this.DeQueue.length === 0;
};

/**
 1. pop / push 用queue來講 先進先出 pop:移除最前面的元素(array.shift()) push:將新增的元素加入Queue的尾端(array.push)
 2. pop / push 用Stack來講 後進先出 pop:移除最尾端的元素(array.pop()) push:將新增的元素加入Stack的尾端(array.push)


 題目要求 : 只能用Queue的特性(也就是只能使用array.shift / array.push)實作Stack
 1. 每次push 都反轉Queue的順序 
 ex: push(1) , [1] 
     push(2) , [2 , 1]
     push(3) , [3 , 2 , 1]

     pop() , result:3
     pop() , result:2
     pop() , result:1

策略（Push costly, One-Queue）
push(x): 先 push(x) 到尾端，再進行 size-1 次「將隊首 shift() 後 push() 到尾端」的輪轉，使 x 成為隊首（對應棧頂）。
pop(): 直接 shift() 取隊首。
top(): 讀取 queue[0]。
empty(): 檢查 queue.length === 0。
例：
push(1) → [1]
push(2) → [1,2] → 旋轉1次 → [2,1]
push(3) → [2,1,3] → 旋轉2次 → [3,2,1]
pop() → 3, pop() → 2, pop() → 1
 */
