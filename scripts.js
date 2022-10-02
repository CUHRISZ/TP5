

window.onload = function() {
  
  document.querySelector("#heading").classList.add("tp");
  // java uses css queryselector to find thing, and find classes attached, and add tp
  
  document.querySelector("#heading").onclick = function() {
    this .classList.toggle("red");
  }
  // java uses css queryselector to find thing and adds an onclick event which toggles the .red class
}

