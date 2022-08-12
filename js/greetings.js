const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    if () {
    }
}

//loginButton.addEventListener("click", handleLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);