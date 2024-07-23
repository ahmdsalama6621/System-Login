document.addEventListener('DOMContentLoaded', function () {
    // Check if the page is signin.html or signup.html or home.html under /System-Login/
    var currentPath = window.location.pathname;

    if (currentPath.endsWith('/System-Login/') || currentPath.endsWith('/System-Login/index.html')) {
        // Sign Up functionality
        let btn = document.getElementById("signup");
        btn.addEventListener("click", function (e) {
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let password = document.getElementById("password");
            let gender = document.getElementById("gender");
            e.preventDefault();
            if (name.value === "") {
                swal("Name is Required", "This Name Will Be Your Nick Name");
            } else {
                window.localStorage.setItem("name", name.value);
            }
            if (email.value === "") {
                swal("Email is Required", "Enter A Valid Email");
            } else if (!email.value.includes("@")) {
                swal("Invalid Email", "Email should include '@' and '.'");
            } else {
                window.localStorage.setItem("email", email.value);
            }
            if (password.value === "") {
                swal("Password is Required");
            } else if (password.value.length < 8) {
                swal("Weak Password", "Password must be 8 characters or more");
            } else {
                window.localStorage.setItem("password", password.value);
            }
            if (gender.value === "male" || gender.value === "female") {
                window.localStorage.setItem("gender", gender.value);
            }
            name.value = "";
            email.value = "";
            password.value = "";
        });
    }

    if (currentPath.endsWith('/System-Login/') || currentPath.endsWith('/System-Login/index.html')) {
        // Sign In functionality
        let signIn = document.getElementById("signin");
        signIn.addEventListener("click", function (e) {
            e.preventDefault();
            let user = document.getElementById("user");
            let userStorage = localStorage.getItem("email");
            let pass = document.getElementById("pass");
            let passStorage = localStorage.getItem("password");
            if (user.value === userStorage && pass.value === passStorage) {
                window.location.href = 'home.html';
            } else if (user.value === userStorage) {
                swal("Incorrect Password", "The password you entered is incorrect");
            } else {
                swal("Email Not Found", "Please check your email address");
            }
        });
    }

    // Display welcome message on home.html
    if (currentPath.endsWith('/System-Login/home.html')) {
        let username = localStorage.getItem('name');
        let gender = localStorage.getItem('gender');
        let welcomeMessage = document.getElementById('welcomeMessage');

        if (username && gender) {
            let title = gender === 'male' ? 'Mr. ' : 'Miss ';
            welcomeMessage.textContent = 'Hello ' + title + username;
        }
    }
});
