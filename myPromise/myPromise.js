function myPromise(executor) {
    // 将this从window绑定在实例对象上
    const self = this;
    // 初始化promise状态、值
    self.myPromiseState = "pending";
    self.myPromiseResult = null

    function resolve(data) {
        self.myPromiseState = "resolved";
        self.myPromiseResult = data;
    }
    function reject() {
        self.myPromiseState = "rejected";
        self.myPromiseResult = data;
    }
    // 执行构造器
    executor(resolve, reject)
}

myPromise.prototype.then = function (onResoleved, onRejected) {
    if (this.myPromiseState === 'resolved')
        onResoleved(this.myPromiseResult);
    if (this.myPromiseState === 'rejected')
        onRejected(this.myPromiseResult)
}