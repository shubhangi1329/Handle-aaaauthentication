var fullname=document.getElementById("full-name");
var email=document.getElementById("email-input");
var pass=document.getElementById("pass-input");

var user=JSON.parse(localStorage.getItem("obj"));
if(!user || !user.token){
    window.location.href="index.html";
}
else{
    fullname.innerHTML=`Full Name:${user.name}`;
    email.innerHTML=`Email:${user.email}`;
    pass.innerHTML=`Password:${user.password}`;
}

document.getElementById("btn2").addEventListener('click',()=>{
    localStorage.removeItem('obj');
    window.location.href="index.html"

});