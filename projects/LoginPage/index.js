const loginForm = document.querySelector(".loginform");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;

  //we need to write fetch script

  alert("Login Successfull");
  window.location.reload();
});
