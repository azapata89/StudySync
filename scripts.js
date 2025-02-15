// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const goToRegisterButton = document.getElementById('go-to-register');
    const goToLoginButton = document.getElementById('go-to-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordButton = document.getElementById('forgot-password');

    // Mostrar sección de registro y ocultar login
    goToRegisterButton.addEventListener('click', function() {
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    // Mostrar sección de login y ocultar registro
    goToLoginButton.addEventListener('click', function() {
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Manejar el envío del formulario de login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Validación simple (mock)
        if (email === "usuario@example.com" && password === "password123") {
            alert('Inicio de sesión exitoso');
            // Redirigir al dashboard (simulado)
            window.location.href = 'dashboard.html';
        } else {
            alert('Correo o contraseña incorrectos');
        }
    });

    // Manejar el envío del formulario de registro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        // Validación simple (mock)
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Simular registro exitoso
        alert('Registro exitoso');
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Manejar la recuperación de contraseña
    forgotPasswordButton.addEventListener('click', function() {
        alert('Se ha enviado un correo para restablecer la contraseña');
    });
});