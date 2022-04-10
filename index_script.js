var username=document.getElementById("username");
var password=document.getElementById("password");
var unameErr=document.getElementById("nameErr");
var pwdErr=document.getElementById("passErr");
var form=document.getElementById("form1");
function validateForm(callback){
    if(username.value=="admin" && password.value=="12345"){
        callback();
    }
    else{
        if(username.value!="admin"){
            unameErr.innerHTML="Invalid username";
            return false;
        }
        if(password.value!="12345"){
            pwdErr.innerHTML="Invalid password";
            return false;
        }
    }
}
function callback(){
    form.setAttribute("action","main.html");
    return true;
}




