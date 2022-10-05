function promiseFn(num, timeout = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num) {
        resolve(`success ${num}`);
      } else {
        reject("failed");
      }
    }, timeout);
  });
}

promiseFn(1, 2000).then(
  (res) => {
    console.log(res);
  },
  (rej) => {
    console.log(rej);
  }
);

promiseFn(1, 2000).then(
  (res) => {
    console.log(res);
  },
  (rej) => {
    console.log(rej);
  }
);

Promise.all([promiseFn(1, 2000), promiseFn(0, 500), promiseFn(3, 5000)])
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

const promise = new Promise(function (resolve, reject) {
  resolve(1);
});

const p = promise;

const p1 = promise.then((value) => {
  console.log(value);
  return value + 1;
});

const p2 = promise.then((value) => {
  console.log(value);
  return value + 1;
});

setTimeout(() => {
  console.log(p1);
  console.log(p2);
  console.log(p1 === p2); //false
  console.log(p === promise); //true
}, 5000);

function doSomething1() {
  console.log("doSomething1 start");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("doSomething1 end");
      resolve(1);
    }, 1000);
  });
}

function doSomething2() {
  console.log("doSomething2 start");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("doSomething2 end");
      resolve(2);
    }, 1000);
  });
}

function finalThing(value) {
  console.log("finalThing start");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("finalThing end");
      console.log(value);
      resolve(0);
    }, 1000);
  });
}

doSomething1().then(doSomething2).then(finalThing);

doSomething1().then(doSomething2()).then(finalThing);

doSomething1()
  .then(function () {
    doSomething2();
  })
  .then(finalThing);

doSomething1()
  .then(function () {
    return doSomething2();
  })
  .then(finalThing);
