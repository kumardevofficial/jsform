let lastname = '';
let firstname = '';
let email = '';
let mobileno = '';
let password = '';
let confirmpassword= '';
function firstnamechagne(){
    firstname = document.getElementById("firstname").value;
}

function lastnamechange(){
    lastname = document.getElementById("lastname").value;
}

function emailchange(){
    email = document.getElementById("email").value;
}

function changemobileno(){
    mobileno = document.getElementById("mobileno").value; 
}

function firstpassword(){
    password = document.getElementById("mypassword").value;
}

function changepasswrod(){
    confirmpassword = document.getElementById("confirmpassword").value;
}

function checkalldetails(){
   if( firstname == ''){
    document.getElementById("firstname-error-message").innerHTML="please enter first name";
    document.getElementById("firstname-error-message").style.color="red";
   }

   if( lastname == ''){
    document.getElementById("lastname-error-message").innerHTML="please enter last name";
    document.getElementById("lastname-error-message").style.color="red";
   }

   if( email == ''){
    document.getElementById("email-error-message").innerHTML="please enter your email id";
    document.getElementById("email-error-message").style.color="red";
   } 

   if( mobileno == ''){
    document.getElementById("mobile-error-message").innerHTML="please enter your mobile number";
    document.getElementById("mobile-error-message").style.color="red";
   } else if( mobileno.length != 10){
    document.getElementById("mobile-error-message").innerHTML="please enter 10 digit number";
    document.getElementById("mobile-error-message").style.color="red";
   }

   if( password == ''){
    document.getElementById("password-error-message").innerHTML=" enter password";
    document.getElementById("password-error-message").style.color="red";
   } else if(password.length < 6){
    document.getElementById("password-error-message").innerHTML=" six character ";
    document.getElementById("password-error-message").style.color="red";
   }

   if(confirmpassword == ''){
    document.getElementById("confirmpassword-error-message").innerHTML=" password missmatch";
    document.getElementById("confirmpassword-error-message").style.color="red";
   } else if(confirmpassword != password) {
    document.getElementById("confirmpassword-error-message").innerHTML=" password missmatch";
    document.getElementById("confirmpassword-error-message").style.color="red";
   }



}