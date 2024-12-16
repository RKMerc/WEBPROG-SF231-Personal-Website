function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }


document.getElementById("myBtn").addEventListener("click", function() {
  alert("Congratulations!");
});
function mOver(obj) {
  obj.innerHTML = "Click the button!"
}

function mOut(obj) {
  obj.innerHTML = "Psst! Hey!"
}
