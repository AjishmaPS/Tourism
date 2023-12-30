const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// Form Validation

const form=document.getElementById("form1"),
email=document.getElementById("email"),
password=document.getElementById("password");
confirmpass=document.getElementById("confirmpassword")
form.addEventListener('submit',fun = (e) =>
{
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const confirmpassword=confirmpass.trim();
    const emailpattern=/^[^ ]+\.[a-z]{2,3}$/;
    if(emailval=="" || !email.value.match(emailpattern))
    {
        document.getElementById("emailerror").innerHTML="Sorry!Incorrect Mail Id";
        return false;
    }
    const passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(passwordval==="" || !password.value.match(passwordpattern))
    {
        document.getElementById("passworderror").innerHTML="Password should contain atleast 8 characters... <br> Include(symbols,numbers,small and capital letters)"
    }
    if(passwordval!=confirmpassword)
    {
        document.getElementById("confirmpassworderror").innerHTML="Password don't match"
    }
});


