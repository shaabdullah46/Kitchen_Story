
//Customer.js
function Adminclick(){
    document.location.href="LogIn.html";
  }
  function Customerclick(){
    document.location.href="ItemCustomer.html";
  }

function search(){
const searchinput = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");
// console.log(rows);
searchinput.addEventListener("keyup",function(event){
// console.log(event);
const q = event.target.value.toLowerCase();
rows.forEach((row) => {
row.querySelector("td").textContent.toLowerCase().startsWith(q)
?(row.style.display="")
: (row.style.display="none");
});

});
}

function Buy(n){
var namep =document.getElementById("name"+n);
var pricep=document.getElementById("price"+n);
localStorage.setItem("Name",namep.innerHTML);
  localStorage.setItem("Price",pricep.innerHTML);
  location.href="./OrderDetails.html"
}
    function data(){
        document.getElementById("nameproduct").innerHTML=localStorage.getItem("Name");
        document.getElementById("priceproduct").innerHTML=localStorage.getItem("Price");
         
       }
       function next(){
               document.location.href="Confirm.html";
             }
