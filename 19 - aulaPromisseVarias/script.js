const eu = Promise.resolve("eu");

const sou = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("sou");
  }, 5000);
});

const thais = new Promise((resolve) => {
  resolve("Thaís");
});

Promise.all([eu, sou, thais]).then((values) => {
  console.log(values);
});
