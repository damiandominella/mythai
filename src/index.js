// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

function resetHeight() {
  const element = document.getElementById("full-height");
  element.style.height = window.innerHeight + "px";
}

function resetLinks() {
  var elements = document.getElementsByTagName("a");

  for (let element of elements) {
    element.onclick = function (event) {
      event.preventDefault();

      window.location.href =
        element.getAttribute("href") + window.location.hash;
    };
  }
}

// reset the height whenever the window's resized
// window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();

resetLinks();
