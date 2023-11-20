var login=JSON.parse(localStorage.getItem("login"))
var body=document.querySelector("body")
console.log(login,body);
if(login){
    var amount=JSON.parse(localStorage.getItem("amount"))
    var cname=document.getElementById("name")
    var contact=document.getElementById("contact")
    var email=document.getElementById("email")
    var price=document.getElementById("amount")
    // console.log(cname,contact,email,amount)
    console.log(login,amount);
    cname.innerHTML=`${login.firstname}  ${login.lastname}`
    contact.innerHTML=`${login.number}`
    email.innerHTML=`${login.email}`
    price.innerHTML=`${amount}`
}
else{
    body.innerHTML="Please Login First"
    setTimeout(()=>{
        window.location.href="./login.html"
    },1000)
    
}

function submit(){
    var cardname=document.getElementById("cardname")
    var cardnumber=document.getElementById("cardnumber")
    var cvv=document.getElementById("cvv")
    var regx=/^[a-zA-Z]{2,15}$/
    var regx1=/^[0-9]{12}$/
    var regx2=/^[0-9]{3}$/
    var flag=1
    if(regx.test(cardname.value)){
    }
    else{
        alert("Invalid Card Holder Name")
        flag=0
    }
    if(regx1.test(cardnumber.value)){
    }
    else{
        alert("Invalid Card Number")
        flag=0
    }
    if(regx2.test(cvv.value)){
    }
    else{
        alert("Invalid Cvv Number")
        flag=0
    }
    if(flag==1){
        alert("payment Done")
    }
}

// ================================================Login
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

