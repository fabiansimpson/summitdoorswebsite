"use strict";

function includeHTML(includeComponent) {
  var z, i, elmnt, file, wholeFile, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute(includeComponent);
    wholeFile = `/${file}`;
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute(includeComponent);
          includeHTML();
        }
      };
      xhttp.open("GET", wholeFile, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
includeHTML("include-header");
includeHTML("include-footer");
