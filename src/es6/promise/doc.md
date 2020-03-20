# promise A+

两个问题：
+ PromiseAPI上面的 Promise.all 和 Promise.race 如何去实现
+ Promise 如何和 async/await 进行结合

流程：
+ 实现 promise 的基本框架
+ 增加状态机
+ 实现 then 方法
+ 实现异步调用
+ 实现 then 的链式调用
+ 实现 catch 的异常处理