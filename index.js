console.log("Promena");
fetch("https://jsonplaceolder.typicode.com/posts")
  .then(function (call) {
    return call.json();
  })
  .then(function (jsoncall) {
    console.log(jsoncall);
  })
  .catch(function (error) {
    console.log(error);
  });
