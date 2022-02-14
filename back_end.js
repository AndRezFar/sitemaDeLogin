const button = document.getElementById("button")

function validar() {
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const emailc = "admin@admin.com";
    const senhac = "admin";
    let semDados = true;

    if (email.value == ""){
        document.querySelector(".e-mail").style.border = "2px solid #FF0000";
        document.querySelector(".senha").style.border = "2px solid #FF0000";
        console.log("estou dentro");
        semDados = false;
    } if (email.value === emailc && senha.value === senhac) {
        localStorage.setItem("acesso", true);
        window.location.replace("open.html");
    } if(semDados) {
        document.querySelector(".senha").style.border = "2px solid #FF0000";
        document.querySelector(".e-mail").style.border = "2px solid #FF0000";
        document.querySelector(".alert").style.display = "flex";
    }
    
}