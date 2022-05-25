const form = document.getElementById('subscribe')
form.addEventListener('submit', (e) => {
    
    if (apellido.value === '' || apellido.value == null)
        window.alert('¡El campo "Apellido" no puede estar vacío!')
    else if (nombre.value === '' || nombre.value == null)
        window.alert('¡El campo "Nombres" no puede estar vacío!')
    else if (ID.value < 1000000 || ID.value > 99999999)
        window.alert('¡DNI inválido!')
    else if (repeat_password.value !== password.value)
        window.alert('¡Las contraseñas no coinciden!')
        {
            e.preventDefault()
        }
    })