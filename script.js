
function getUsers() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("jsondata").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
}

function XMLHttpRequest() {
  //
  //
  //
  this.onreadystatechange = function() {
    
  }
}


// function makeTable() {


function user(name, email) {

  this.user = name;
  this.email = email;

  this.getUser = function () {
    return this.user
  }
}
var user1 = new user("gopi", "gmail")
var user2 = new user("ak", "gmail")
console.log(user1);
console.log(user2);
var userName = user1.getUser();
console.log(userName)
