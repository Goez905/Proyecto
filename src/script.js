document.getElementById('titulo').addEventListener('click', function() {
    var hiddenInfo = document.getElementById('hiddenInfo');
    hiddenInfo.classList.toggle('hidden');
  });
function showCredits() {
    var credits = document.getElementById('infoOculta');
    credits.style.display = 'block';
}

function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
}
document.getElementById('loginBtn').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var maskedPassword = '*'.repeat(password.length); // Reemplaza la contraseña con asteriscos
    var message = 'MySoft_Store\nCorreo: ' + email + '\nContraseña: ' + maskedPassword;
    alert(message);
});



function validateForm(event) {
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        event.preventDefault();
        errorMessage.classList.remove('hidden');
    }
}


