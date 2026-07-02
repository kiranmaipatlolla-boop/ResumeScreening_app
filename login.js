document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(email === "admin@gmail.com" && password === "admin123"){

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }else{

        alert("Invalid Email or Password");

    }

});

document.getElementById("showPassword").addEventListener("change", function(){

    let password = document.getElementById("password");

    if(this.checked){

        password.type = "text";

    }else{

        password.type = "password";

    }

});