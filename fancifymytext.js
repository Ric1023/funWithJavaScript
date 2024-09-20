function makeFontBigger() {
  document.getElementById("texts").style.fontSize = "24px";
}

function makeFontFancy() {
  document.getElementById("texts").style.fontWeight = "bold";
  document.getElementById("texts").style.color = "blue";
  document.getElementById("texts").style.textDecoration = "underline";
}

function makeFontBoring() {
  document.getElementById("texts").style.fontWeight = "normal";
  document.getElementById("texts").style.color = "black";
  document.getElementById("texts").style.textDecoration = "none";
}

function makeMooText() {
  let str = document.getElementById("texts").value.toUpperCase();
  let parts = str.split(".");

  str = parts.join("-moo")     
  document.getElementById("texts").value = str;

  console.log(str);
}