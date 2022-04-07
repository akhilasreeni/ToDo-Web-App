let uname =document.getElementById("username");
let pwd =document.getElementById("password");
let unameErr=document.getElementById("nameErr");
let pwdErr=document.getElementById("passErr");
function validateForm(callback){
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)(\.)([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(uname.value=="admin" && pwd.value=="12345"){
        callback(true);
    }
    else{
        if(regexp.test(uname.value)){
            error.innerHTML=" Invalid Username";
           
    }
    else{
        if(email.value==""){
            
            error.innerHTML=" ";
        }
        else{ 
        error.innerHTML="Invalid Email-id";
        error.style.color="red";
        return false;
        }
       
    }
*/
    function callback(val){
        if(val=='true'){
            location.href="./main.html";
        }
        else{
            pwdErr.innerHTML="Invalid Email-id";
        }
    }
}