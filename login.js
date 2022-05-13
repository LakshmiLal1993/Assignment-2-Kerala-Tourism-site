let email= document.getElementById("typeEmailX");
let error = document.getElementById("error");
function validate(){

    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.)?$/

    if(regexp.test(email.value)){

       error.innerHTML = "VALID"   ;
       error.style.color = "green";
       alert("hai");
       return true;
    }
    else{
        error.innerHTML =" INVALID";
        error.style.color="red";
        return false;
    }
}