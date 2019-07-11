var users = [];
function getUsers() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      makeTable(JSON.parse(this.responseText))
      // JSON.parse(this.responseText)
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
}

function makeTable(data) {
  
  var tbody = '';
  
  console.log(data[1]);
  // var td = document.getElementById("tabledata").innerHTML
  for (var i = 0; i < data.length; i++) {
    for(var j =0;j<data.length;j++){
      data.innerHTML = array[i][j];
    }
  
  tbody=tbody+"<tr><td>"+data[i].userId+"</td><td>"+data[i].id+"</td><td>"+data[i].title+"</td><td>"+data[i].body+"</td></tr>"
        
  }
        document.getElementById("tabledata").innerHTML = tbody;
}


















// function makeTable() {


// function user(name, email) {

//   this.user = name;
//   this.email = email;

//   this.getUser = function () {
//     return this.user
//   }
// }
// var user1 = new user("gopi", "gmail")
// var user2 = new user("ak", "gmail")
// console.log(user1);
// console.log(user2);
// var userName = user1.getUser();
// console.log(userName)
