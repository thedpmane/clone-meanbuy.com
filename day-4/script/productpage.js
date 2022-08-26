let lsd = JSON.parse(localStorage.getItem("prodata" )) || [];
console.log(lsd)

let div= document.getElementById("imgshow");

let productimg=document.createElement("img");
productimg.setAttribute("src",lsd[0].imgurl);
div.append(productimg)
let names = document.getElementById("named");
names.innerText = lsd[0].name;


let price = document.getElementById("priced");
price.innerText = lsd[0].price;

