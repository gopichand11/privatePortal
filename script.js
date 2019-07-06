
function addUsers() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("jsondata").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
}


// function makeTable() {



// var col = [];
// for (var i = 0; i < jd.length; i++) {
//     for (var key in jd[i]) {
//         if (col.indexOf(key) === -1) {
//             col.push(key);
//         }
//     }

//   }
// }