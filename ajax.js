let request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/submitOrder", true);
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
};

request.send();

// 简化版
let request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/submitOrder", true);
request.onload = () => console.log(request.responseText);
request.send();
