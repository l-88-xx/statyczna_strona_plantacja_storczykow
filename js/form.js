const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.querySelector("#email").value;
    const msg = document.querySelector("#msg").value;
    const temat = document.querySelector("#temat").value;

    if(email === "" || msg === "" || temat === ""){
        alert("Należy uzupełnić wszystkie pola.");
        return;
    }

    alert("Wiadomość wysłana.");

    form.reset();

});