console.log("1");



const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Time 5s to run");
      resolve("I solve it");
    }, 5000);
  });
};

promise().then(data => {
  console.log("data: ",data)
  console.log("2");
console.log("4");
});
console.log("3");


