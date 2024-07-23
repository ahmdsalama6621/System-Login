
if (location.pathname === `/signup.html` ||
    location.pathname === `/System-Login/signup.html`) {
    let btn = document.getElementById("signup");
    btn.addEventListener("click", function (e) {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let gender = document.getElementById("gender");
        e.preventDefault();
        if (name.value === "") {
            swal("Name is Requerd", "This Name Will Be Your Nick Name");
        } else {
            window.localStorage.setItem("name", name.value);
        }
        if (email.value === "") {
            swal("Email is Requerd", "Enter A Valid Email");
        } else if (!email.value.includes("@")) {
            swal("email Shoud Include '@' And '.'");
        } else {
            window.localStorage.setItem("email", email.value);
        }
        if (password.value === "") {
            swal("Password is Requerd");
        } else if (password.value.length < 8) {
            swal("password Must Be 8 Number Or More ");
        } else {
            window.localStorage.setItem("password", password.value);
        }
        if (gender.value === "male") {
            window.localStorage.setItem("gender", gender.value);
        }
        if (gender.value === "female") {
            window.localStorage.setItem("gender", gender.value);
        }
        name.value = ""
        email.value = ""
        password.value = ""
    });
}
if (location.pathname === `/index.html` ||
    location.pathname === `/System-Login/index.html` ||
    location.pathname === "/System-Login/") {

    let signIn = document.getElementById("signin")
    signIn.addEventListener("click", function (e) {
        e.preventDefault();
        let user = document.getElementById("user")
        let userStorage = localStorage.getItem("email")
        let pass = document.getElementById("pass")
        let passStorage = localStorage.getItem("password")
        if (user.value === userStorage) {
            window.location.href = 'home.html';
        } else {
            swal("Email is not available")
        }
        if (pass.value === passStorage) {
            window.location.href = 'home.html';
        } else {
            swal("The password is incorrect")
        }
    })
}


document.addEventListener('DOMContentLoaded', function () {
    if (location.pathname === `/home.html` ||
        location.pathname === `/System-Login/home.html`) {
        let username = localStorage.getItem('name');
        let gender = localStorage.getItem('gender');
        let welcomeMessage = document.getElementById('welcomeMessage');

        if (username && gender) {
            let title = gender === 'male' ? 'Mr. ' : 'Miss ';
            welcomeMessage.textContent = 'Hello ' + title + username;
        }
    }
}); document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname === "/home.html") {
        let username = localStorage.getItem('name');
        let gender = localStorage.getItem('gender');
        let welcomeMessage = document.getElementById('welcomeMessage');
        if (username && gender) {
            let title = gender === 'male' ? 'Mr. ' : 'Miss ';
            welcomeMessage.textContent = 'Hello ' + title + username;
        }

    }
});

function logOut() {
    location.pathname = `/index.html`; // For my pc
    location.pathname = `/System-Login/index.html`; //for git hup
}
