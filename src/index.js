'use strict';

const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];
let sortEng = coursesEn.sort();
let sortFin = coursesFi.sort();

let lista = document.getElementById("lista");
coursesFi.forEach((item)=>{
let li = document.createElement("li");
li.innerText = item;
lista.appendChild(li);
});

document.getElementById("lang").addEventListener("click", function() {
  let lista = document.getElementById("lista");
coursesEn.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  lista.appendChild(li);
  });
});

//itemit aakkosjärjestykseen

document.getElementById("sort").addEventListener("click", function() {
  let lista2 = document.getElementById("lista2");
sortFin.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  lista2.appendChild(li);
  });
});
