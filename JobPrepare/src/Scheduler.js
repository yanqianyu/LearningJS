/*
 * js实现一个带并发限制的异步调度器，保证同时运行的任务最多有两个
 */
class Scheduler {
  constructor() {
      this.queue = [];
      this.count = 0;
  }
  async add(promiseCreator) {
      if (this.count >= 2) {
          await new Promise((resolve) => {
              this.queue.push(resolve);
          })
      }

      this.count += 1;
      const result = await promiseCreator();
      this.count -= 1;
      if (this.queue.length) {
          this.queue.shift()();
      }
      return result;
  }
}

const timeout = (time) => new Promise((resolve) => {
    setTimeout(resolve, time);
});
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms 时，2完成，输出2，任务3进队
// 800ms 时，3完成，输出3，任务4进队
// 1000ms 时，1完成，输出1
