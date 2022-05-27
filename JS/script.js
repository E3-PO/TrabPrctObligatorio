const form = document.getElementById('subscribe')
const reg = /^.+@.+$/
const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/  
form.addEventListener('submit', (e) => {
    let messages = []
    
    if (apellido.value == '')
        {window.alert('¡El campo "Apellido" no puede estar vacío!')
        messages.push('Error en "Apellido".')
        }

    if (nombre.value === '')
        {window.alert('¡El campo "Nombres" no puede estar vacío!')
        messages.push('Error en "Nombres".')
        }

    if (ID.value < 1000000 || ID.value > 99999999)
        {window.alert('¡DNI inválido!')
        messages.push('Error en DNI.')
        }

    if (reg.test(e_mail.value) == false)
        {window.alert('¡Dirección de correo inválida!')
        messages.push('Error en dirección de correo.')
        }

    if (passwordReg.test(password.value) == false)
        {window.alert('¡La contraseña debe tener entre 8 y 16 caracteres; debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial!')
        messages.push('Error en contraseña.')
        }    
        
    if (repeat_password.value !== password.value)
        {window.alert('¡Las contraseñas no coinciden!')
        messages.push('Error en ingreso de contraseña.')
        }
    
    if (messages.length > 0){
        e.preventDefault()
        }
    })
      
    
        
    
