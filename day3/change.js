function changeImage() {
  document.getElementById("image").src =
    "https://www.looper.com/img/gallery/the-untold-truth-of-marvels-loki/intro-1622826186.jpg";
}

function getValue() {
  var inp = document.getElementById("inp").value;
  document.getElementById("getname").innerText = inp;
  console.log(document.getElementById("inp").value);
}

function changeStyle() {
  document.getElementById("one").style.backgroundColor = "black";
}
