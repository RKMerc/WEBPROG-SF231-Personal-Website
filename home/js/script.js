const button = document.getElementById("myButton");

button.onmouseover = function() {
  this.classList.add("hovered");
};

button.onmouseout = function() {
  this.classList.remove("hovered");
};