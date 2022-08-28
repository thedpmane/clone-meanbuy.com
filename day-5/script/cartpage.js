document.getElementById("clickcart").addEventListener("click", function () {
    window.location.href = "cartpage.html"
});
  

let lsd = JSON.parse(localStorage.getItem("cartiems")) || [];

let tbody = document.querySelector("tbody");





function DisplayTable(data) {
    tbody.innerHTML = null;

  data.forEach(function (element, index) {
      let tr=document.createElement("tr")
      let imgdiv= document.createElement("div");

        let pimg=document.createElement("img");
        pimg.setAttribute("src",element.imgurl);
      imgdiv.append(pimg);
        let imga = document.createElement("td");
        imga=imgdiv
      
        let name = document.createElement("td");
        name.innerText = element.name;

    let ourprice = document.createElement("td");
   
    let text = "<del>₹99999</del>"
   
    
   
    ourprice.innerHTML = text;

        yprice = document.createElement("td");
        yprice.innerText = "₹"+element.price;

        tr.append(imga,name,ourprice,yprice);
        tbody.append(tr);
    });
}
document.getElementById("totalpay").innerHTML = "Total value ₹" + lsd[0].price;

DisplayTable(lsd);


document.getElementById("checkout").addEventListener("click", function () {
  window.location.href="checkoutpage.html"
})