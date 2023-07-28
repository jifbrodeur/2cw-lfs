"use strict";
const objDemo = {
  texte: "Bonjour à vous",
  couleur: "red",
};
console.log("objDemo.texte: " + objDemo.texte);
const elemDemo = document.getElementById("demo");
elemDemo.innerHTML = objDemo.texte;
elemDemo.style.color = objDemo.couleur;
