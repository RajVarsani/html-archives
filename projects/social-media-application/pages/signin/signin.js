const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const loginbtn = document.querySelector(".loginButton");
const signupbtn = document.querySelector(".signupButton");

// function to validate email
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// function to validate password
function validatePassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}

loginbtn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector(".emailSignIn").value;
  const password = document.querySelector(".passwordSignIn").value;
  console.log(email, password);

  //validating email addresss
  if (!validateEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email...",
      text: "Please try again :(",
    })
  } else {
    fetch(`/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error === "user does not exist, signup instead!") {
          console.log("User does not exist");
          Swal.fire({
            icon: "error",
            title: "User doesn't exists...",
            text: "Sign up instead!",
          })
        } else if (data.error === "Wrong password!") {
          // wrong password
          Swal.fire({
            icon: "error",
            title: "Incorrect Password",
            text: "Please try again!",
          })
        } else if (data.token) {
          // sign in successful
          const { token } = data;

          localStorage.setItem("jwt", token);
          Swal.fire({
            icon: "success",
            title: "Sign in successful...",
            text: "We hope you leave with some great ideas :)",
          }).then(() => {
            window.location.href = "/pages/feed/";
          });
        }
      })
      // error while fetching data
      .catch((err) => {
        // serverError();
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Server Error Occured, Please Try Again Later !!",
        });
      });
  }
});

window.addEventListener("load", () => {
  body.classList.add("visible");
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

signupbtn.addEventListener("click", (event) => {
  event.preventDefault();

  // const username = document.querySelector(".userName").value;
  const email = document.querySelector(".emailSignUp").value;
  const password = document.querySelector(".passwordSignUp").value;
  const confirmPassword = document.querySelector(
    ".confirmPasswordSignUp"
  ).value;
  console.log(email, password, confirmPassword);
  // validating email address
  if (!validateEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email...",
      text: "Please try again :(",
    })
  } else {
    // checking if password is same or not
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password doesn't match..",
        text: "Please try again :(",
      })
    } else {
      // if password is same
      if (!validatePassword(password)) {
        // validating password
        Swal.fire({
          icon: "error",
          title: "Invalid Password..",
          text: "Password should be 8 characters long, should have one numerical, capital and a special character",
        })
      } else {
        // this case => email, password is valid, & both password matches
        fetch(`/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "user already exists") {
              Swal.fire({
                icon: "error",
                title: "User already exists...",
                text: "Sign In instead!",
              })
            } else if (data.error) {
              // POP UP DATABASE ERROR OCCURED
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "Incorrect Password",
                text: "Please try again!",
              })
            } else if (data.token) {
              const { token } = data;
              localStorage.setItem("jwt", token);

              Swal.fire({
                icon: "success",
                title: "Sign Up Successful...",
                text: "We hope you leave with some great ideas :)",
              }).then(() => {
                window.location.href = "/pages/completeProfile/";
              });
            }
          })
          .catch((err) => {
            // POP UP DATABASE ERROR OCCURED
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Server Error Occured, Please Try Again Later !",
            });
            console.log(err);
          });
      }
    }
  }
});

$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});
