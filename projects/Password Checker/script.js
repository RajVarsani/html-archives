const input = document.querySelector("input");
const msg = document.querySelector(".msg");
let c=document.querySelector(".check");

let WeakPassword = /[a-z]/;
let MediumPassword = /\d+/;
let StrongPassword = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function Check() {
    if (input.value !== "") {
        if (
            input.value.length <= 3 &&
            (input.value.match(WeakPassword) ||
                input.value.match(MediumPassword) ||
                input.value.match(StrongPassword))
        ) {
            msg.textContent = "Very Weak";
            c.style.backgroundColor = "red";
        } else if (
            input.value.length > 3 &&
            input.value.match(WeakPassword) &&
            input.value.match(MediumPassword)
        ) {
            msg.textContent = "Medium";
            c.style.backgroundColor = "yellow";
        }
        if (
            input.value.length > 8 &&
            input.value.match(WeakPassword) &&
            input.value.match(MediumPassword) &&
            input.value.match(StrongPassword)
        ) {
            msg.textContent = "Very Strong";
            c.style.backgroundColor = "green";
        }

    }


}
