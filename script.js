// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    // Si estamos en contact.html, manejar el envío del formulario
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar recarga de página
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const feedback = document.getElementById('formFeedback');
            
            if (name && email && message) {
                feedback.style.color = 'green';
                feedback.textContent = `Thank you ${name}! Your message has been sent. We'll reply to ${email} soon.`;
                emailForm.reset(); // Limpiar el formulario
            } else {
                feedback.style.color = 'red';
                feedback.textContent = 'Please fill out all fields.';
            }
        });
    }
    
    // Puedes agregar más interactividad aquí, como búsqueda dinámica
    console.log("Travel Recommendations Website loaded successfully!");
});