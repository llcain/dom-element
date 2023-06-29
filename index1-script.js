// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

const element = document.getElementById('myBtn');
element.addEventListener('click', myFunction);

function myFunction() {
  document.getElementById('demo').innerHTML = "Chicken";
}


function changeColor() {
  document.getElementById('btn').style.backgroundColor = 'green';
}

/* create element */

const li = document.createElement('LI');

li.innerHTML = "home";

/* append li to ul */

document.getElementById('list').appendChild(li);

