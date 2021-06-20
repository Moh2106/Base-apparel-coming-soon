let email = document.getElementById("email");
let button = document.getElementById("button");
let mess = document.getElementById("mess");
let pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

button.addEventListener("click", function(e){
    if(email.value == "")
    {
        mess.innerHTML = "Please fill in the email field"
    }

    else if(pattern.test(email.value))
    {
        alert("Sent succesfully");
    }

    else{
        mess.innerHTML = "Error please fill in your email address"
    }

});

