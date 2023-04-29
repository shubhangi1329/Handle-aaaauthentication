
var fname=document.getElementById("fname");
var email=document.getElementById("email");
var pass=document.getElementById("pass");
var cpass=document.getElementById("cpass");


function getData(event){
 event.preventDefault();
  console.log("btn clicked");
  var para=document.getElementById("status");

 
 para.innerHTML="";
 if((!fname.value)||(!email.value) ||(!pass.value )||(!cpass.value)){
    para.innerHTML=`<div id="red">Error:All Fields are mandatory</div>`
 }
 else{
     para.innerHTML=`<div id="green">Successfully Signed Up !</div>`
 

 var tokengen=generateId();

 console.log(tokengen);
  
const obj={
    name:fname.value,
    email:email.value,
    password:pass.value,
    confirmpass:cpass.value,
    token:tokengen
}

 

localStorage.setItem("obj",JSON.stringify(obj));
//redirectingto logout pg
setTimeout(function(){
    window.location.assign("page2.html")
},1500);


 }

}
//if local storage exist user can go to signu pg
var user=JSON.parse(localStorage.getItem("obj"));
if((user) || (user.token)){
    window.location.href="page2.html"
}

//generate token fn

    function dec2hex (dec) {
        return dec.toString(16).padStart(2, "0")
      }
      
      // generateId :: Integer -> String
      function generateId () {
        var arr = new Uint8Array((16 || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr,dec2hex).join('')
      }
      
     
      
