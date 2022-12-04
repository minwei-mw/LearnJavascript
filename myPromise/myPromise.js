function myPromise(executor) {
    // 将this从window绑定在实例对象上
    const self = this;
    // 初始化promise状态、值
    self.myPromiseState = "pending";
    self.myPromiseResult = null

    function resolve(data) {
        if (self.myPromiseState !== "pending") return;
        self.myPromiseState = "resolved";
        self.myPromiseResult = data;
    }

    function reject(data) {
        if (self.myPromiseState !== "pending") return;
        self.myPromiseState = "rejected";
        self.myPromiseResult = data;
    }
    try {
        // 执行构造器
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

myPromise.prototype.then = function (onResoleved, onRejected) {
    if (this.myPromiseState === 'resolved')
        onResoleved(this.myPromiseResult);
    if (this.myPromiseState === 'rejected')
        onRejected(this.myPromiseResult)
}