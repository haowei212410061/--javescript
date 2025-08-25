var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */

// pop():在js的array中 pop代表移除陣列的最後一個元素並回傳
MyQueue.prototype.pop = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length === 0) {
    while (length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.outStack.length === 0 && this.inStack.length === 0;
};

// ✅ 重點：

// 1. 題目核心
// Queue（佇列）：先進先出 (FIFO)，像排隊。
// Stack（堆疊）：後進先出 (LIFO)，像疊盤子。
// 限制：只能用 stack 的操作（push、pop、peek、empty）。

// inStack 專門用來接收新元素。
// outStack 專門用來給 queue 出隊。
// 只有當 outStack 空了，才需要把 inStack 整批搬過來。

/**
 * 題目重點

Queue 要支援四個功能：

push(x) → 把元素放到隊尾

pop() → 移除並回傳隊首元素

peek() → 查看隊首元素（但不移除）

empty() → 判斷 queue 是否為空

但題目限制：
只能用 stack 的標準操作：push（入棧）、pop（出棧）、peek（查看頂端）、isEmpty（判斷是否為空）、size（長度）。
在 JavaScript 裡，通常用 陣列 ([]) 當作 stack，因為 push 和 pop 正好符合 stack 的行為。
不建議用物件，因為 stack 本質上是線性結構，陣列就是最直觀的模擬方式。
 */
