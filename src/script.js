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
// Get the login form
const loginForm = document.getElementById('loginForm');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Redirect the user to maquetacion.html
  window.location.href = 'maquetacion.html';
});





function validateForm(event) {
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        event.preventDefault();
        errorMessage.classList.remove('hidden');
    }
}


