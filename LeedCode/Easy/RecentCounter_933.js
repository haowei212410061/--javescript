function RecentCounter() {
  this.Counters = [];
}

RecentCounter.prototype.ping = function (t) {
  this.Counters.push(t);
  while (this.Counters[0] < t - 3000) {
    this.Counters.shift();
  }
  return this.Counters.length;
};

/**
 * 保持一個 Queue 儲存所有請求時間。
每次 ping(t)：
把 t 加進 Queue。
把所有 < t - 3000 的請求移出 Queue。
回傳 Queue 的長度。
 */
