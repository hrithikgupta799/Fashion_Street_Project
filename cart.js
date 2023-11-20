var storage=JSON.parse(localStorage.getItem("cart"))
// localStorage.removeItem("cart")
console.log(storage);
var table=document.getElementById("table")
// console.log(table);
storage.forEach((e)=>{
                        table.innerHTML += ` <tr>
                        <td class="image"><img src=${e.src} alt=""></td>
                        <td class="name">${e.name}</td>
                        <td class="quantity"> <select name="">
                        <option value="">M</option>
                        <option value="">S</option>
                        <option value="">XL</option>
                        <option value="">XXL</option>
                    </select></td>
                    <td class="price">${e.price}</td>
                    <td class="quantity"><input type="number" value="1" class="number"></td>
                    <td class="subtotal">${e.price}</td>
                    <td class="delete"><i class="fa-solid fa-trash"></i></td>
                    </tr>`
})
function subtotalfunction() {
    var input = document.querySelectorAll(".number")
    // console.log(input);
    input.forEach((e) => {
        e.addEventListener("input", () => {
            if (e.value<= 1) {
                e.value = 1
            }
            var parent = e.parentElement.parentElement
            var price = parent.querySelector(".price").innerHTML
            // console.log(price);
            var subtotal = parent.querySelector(".subtotal")
            // console.log(subtotal);

            subtotal.innerHTML = `${price * e.value}`
           totalfunction()
        })
    })

}
var totalamount
var total=document.querySelector("h4")
// -----------------------------------------------------------------------
var addsub=document.querySelectorAll(".subtotal")
if(addsub.length<1){
    localStorage.removeItem("cart")
}
// ----------------------------------------------------------------------
var sum=0
function totalfunction(){
    var addsub=document.querySelectorAll(".subtotal")
    // console.log(addsub);
    
    addsub.forEach((sub)=>{
        var subnumber=parseInt(sub.innerHTML)
        sum=sum+subnumber
        total.innerHTML=`Total :RS ${sum}`
        totalamount=sum
    })
    if(addsub.length<1){
        total.innerHTML=`Total :RS 0`
        localStorage.removeItem("cart")

    }
}
function deletefuction(){
    var remove= document.querySelectorAll(".fa-trash")
    // console.log(remove);
    remove.forEach((e) => {
        e.addEventListener("click", () => {
            e.parentElement.parentElement.remove()
            totalfunction()
        })
    })
}
subtotalfunction()
totalfunction()
deletefuction()
//*****************************Apply Coupon***************************** */
var input=document.querySelector("#apply-input")
var discountdiplay=document.getElementById("discount-display")
// console.log(discountdiplay)
var discount
function coupons(){
if(input.value=="VIGNESH50"){
    discount=totalamount-(totalamount*0.50)
    discount=Math.floor(discount)
    discountdiplay.innerHTML=`Discount Total : RS ${discount}`
}
else if(input.value=="HRITHIK30"){
    discount=totalamount-(totalamount*0.30)
    discount=Math.floor(discount)
    discountdiplay.innerHTML=`Discount Total : RS ${discount}`
}
else if(input.value=="DIWALI40"){
    discount=totalamount-(totalamount*0.40)
    discount=Math.floor(discount)
    discountdiplay.innerHTML=`Discount Total : RS ${discount}`
}else{
            alert("Invalid Coupons!!Try Again")
        }
    }  
// **************************PAYMENT MESSAGE***************************************
function makepayment(){
    var amount
    if(discount){
        amount=discount
        
    }
    else{
        amount=sum
    }
    
    localStorage.setItem("amount",JSON.stringify(amount))
}


// ================================================LOgin
var header=document.querySelector(".fa-user")
var login = JSON.parse(localStorage.getItem("login"))
// console.log(header,login)
if(login){
    header.innerHTML=` <span>${login.firstname}</span><span>   </span><button id="logout"><i class="fa-solid fa-right-from-bracket"></i></button>`
    var logout=document.getElementById("logout")
    console.log(logout)
    logout.addEventListener("click",()=>{
        localStorage.removeItem("login")
        header.innerHTML = `<ul>
        <a href="./cart.html"><li><i class="fa-solid fa-cart-shopping"> CART</i></li></a>
        <a href="./login.html"><li><i class="fa-solid fa-user"> LOGIN</i></li></a>
    </ul>` 
    })
}  
