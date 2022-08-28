let lsd = JSON.parse(localStorage.getItem("prodata" )) || [];


let div= document.getElementById("imgshow");

let productimg=document.createElement("img");
productimg.setAttribute("src",lsd[0].imgurl);
div.append(productimg)
let names = document.getElementById("named");
names.innerText = lsd[0].name;


let price = document.getElementById("priced");
price.innerText = "₹"+lsd[0].price;

document.getElementById("clickcart").addEventListener("click", function () {
    window.location.href = "cart.html";
  });
  
   let cart = [];
  cartitem= JSON.parse(localStorage.getItem("cartiems")) || [];
  
  document.getElementById("addingcart").addEventListener("click", function () {
   
      localStorage.setItem("cartiems", JSON.stringify(lsd))
      cart.push(cartitem[0])
      localStorage.setItem("cart", JSON.stringify(cart))
      
  
    })
document.getElementById("clickcart").addEventListener("click", function () {
    window.location.href = "cartpage.html"
  });