document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.querySelector(".submit-btn");
    const warnMsg = document.querySelector(".pwd-check-message");
    const pwd1 = document.querySelector("#password1");
    const pwd2 = document.querySelector("#password2");

    function validatePasswords() {
        if (pwd1.value !== "" && pwd1.value === pwd2.value) {
            warnMsg.textContent = "";
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
            warnMsg.textContent = "*Passwords do not match";
        }
    }

    pwd1.addEventListener("input", validatePasswords);
    pwd2.addEventListener("input", validatePasswords);
});
