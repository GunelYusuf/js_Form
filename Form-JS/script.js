let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
var tel = document.getElementById("tel");
let email=document.getElementById("email");
let submit=document.getElementById("submit");
let errorStatus = true;
let timeout;
let password = document.getElementById("PassEntry");
let strengthBadge = document.getElementById("StrengthDisp");

function validFirstname(){
    let check= /^(?:[a-zA-Z])[\w]{2,14}$/;
    if(!check.test(fname.value)){
        document.getElementById("firstNameError").innerHTML="Please,enter the correct format";
        document.getElementById("fname").style.backgroundColor="yellow";
    }else{
        document.getElementById("firstNameError").innerHTML ="";
        document.getElementById("fname").style.backgroundColor="";
    }
};

function validLastname() {
    let check =/^(?:[a-zA-Z])[\w]{2,14}$/;
    if(!check.test(lname.value)){
        document.getElementById("lastNameError").innerHTML="Username must between 3 and 15 characters and must begin with a letter. Only letters,numbers and underscore are allowed.";
        document.getElementById("lname").style.backgroundColor="yellow";
    }else{
        document.getElementById("lastNameError").innerHTML = "";
		document.getElementById("lname").style.backgroundColor="";
    }
};
function validTel(){
    let check =/^\+994(77|70|50|51|55|99)[2-9]{7}$/;
        if(!check.test(tel.value)){
            document.getElementById("telError").innerHTML = "Type a valid telephone number";
            document.getElementById("tel").style.backgroundColor="yellow";
        }else{
            document.getElementById("telError").innerHTML ="";
            document.getElementById("tel").style.backgroundColor="";
        }
    }
function validEmail() {
   let check =/^[-.\w]+@([\w-]+\.)+[\w-]{2,15}$/;
   if(!check.test(email.value)){
       document.getElementById("emailError").innerHTML="Type a valid email address!";
       document.getElementById("email").style.backgroundColor="yellow";
   }else{
    document.getElementById("emailError").innerHTML="";
    document.getElementById("email").style.backgroundColor="";
   }
};

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
function StrengthChecker(PasswordParameter) { 
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue';
        strengthBadge.textContent = 'Medium';
    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak';
    }
};

password.addEventListener("input", () => {
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});

function formSubmit(){
    errorStatus = false;
    if(lname.value=="" || email.value=="" || fname.value==""|| password.value=="" || tel.value==""){
        event.preventDefault();
        document.getElementById("formError").innerHTML = "Please,Fill in all the fields"
    }
     if(fname.value==""){
        document.getElementById("firstNameError").innerHTML ="Firstname cannot be blank";
        document.getElementById("fname").style.backgroundColor="yellow";
        errorStatus = true;
    }else{
        errorStatus = false;
    }
    if(lname.value==""){
        document.getElementById("lastNameError").innerHTML ="Lastname cannot be blank";
        document.getElementById("lname").style.backgroundColor="yellow";
        errorStatus = true;
    }else{
        errorStatus = false;
    }
    if(tel.value==""){
        document.getElementById("telError").innerHTML ="Telephone cannot be blank";
        document.getElementById("tel").style.backgroundColor="yellow";
        errorStatus = true;
    }else{
        errorStatus = false;
    }
    if(email.value==""){
        document.getElementById("emailError").innerHTML ="Email is required";
        document.getElementById("email").style.backgroundColor="yellow";
        errorStatus = true;
    }else{
        errorStatus = false;
    }
    if(password.value==""){
        document.getElementById("passwordError").innerHTML ="Password cannot be blank";
        document.getElementById("password").style.backgroundColor="yellow";
        errorStatus = true;
    }else{
        errorStatus = false;
    }
    if(errorStatus==true){
        return false;
    }else{
        return true;
    }
}


