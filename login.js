document.getElementById("showPassword").addEventListener("change", function () {

    const password = document.getElementById("password");

    if (this.checked) {

        password.type = "text";

    } else {

        password.type = "password";

    }

});

document.getElementById("loginForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if(email==="admin@gmail.com" && password==="admin123"){

        alert("Login Successful!");

        window.location.href="dashboard.html";

    }

    else{

        message.innerHTML="Invalid Email or Password";

    }

});