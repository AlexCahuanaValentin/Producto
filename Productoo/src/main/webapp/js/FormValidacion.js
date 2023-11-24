/*-------------------------------------------------------------------------------------------------------*/
//VALIDACIONES

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function(form) {
			form.addEventListener('submit', function(event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()

//VALIDACION DE NOMBRES Y APELLIDOS
document.addEventListener('DOMContentLoaded', function() {
	// Obtener el elemento del nombre
	const frmName = document.getElementById('frmName');
	// Expresión regular para permitir nombres con letras, números, guiones, puntos y espacios
	const regex = /^[A-Za-z0-9.-\s]+$/;

	// Agregar un evento input al campo de nombre
	frmName.addEventListener('input', function() {
		if (!regex.test(frmName.value)) {
			frmName.setCustomValidity('Ingrese un nombre válido');
		} else {
			frmName.setCustomValidity('');
		}
	});
});


//VALIDACION DE CODIGO
// Función para verificar si el id ya existe en el array (ya sea activo o inactivo)
function isNumberDocumentExists(numberDocument) {
    const activeExists = arreglo.some(item => (item.id + '').trim() === numberDocument.trim());
    const inactiveExists = arregloInactivos.some(item => (item.id + '').trim() === numberDocument.trim());
    return activeExists || inactiveExists;
}
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.remove('is-valid');
    formControl.classList.add('is-invalid');
    input.nextElementSibling.textContent = message;
}
document.addEventListener('DOMContentLoaded', function() {
    const frmId = document.getElementById('frmId');
    const numDocError = document.getElementById('numDocError');

    frmId.addEventListener('input', function(event) {
        const value = event.target.value;

        // Verificar si el valor contiene solo números
        if (!/^\d*$/.test(value)) {
            frmId.setCustomValidity('Por favor, ingrese solo Numero en este campo.');
            numDocError.textContent = 'Solo es valido Numero en este campo.';
        } else if (/^\d{7,}$|(\d)\1{6}/.test(value)) {
            showError(frmId, 'Por favor, ingrese exactamente 6 Numeros');
        } else {
            frmId.setCustomValidity('');
            numDocError.textContent = ''; // Limpiar el mensaje de error
        }

        // Verificar si el id ya existe
         if (isNumberDocumentExists(value)) {
            frmId.setCustomValidity('El Codigo ya existe en la lista');
            showError(frmId, 'El Codigo ya existe');
        }
    });
});

//VALIDACION DEL CORREO ELECTRONICO
document.addEventListener('DOMContentLoaded', function() {
	// Obtener el elemento del campo de correo electrónico
	const frmEmail = document.getElementById('frmEmail');

	// Expresión regular para validar correos electrónicos
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

	// Agregar un evento input al campo de correo electrónico
	frmEmail.addEventListener('input', function() {
		if (emailRegex.test(frmEmail.value)) {
			frmEmail.setCustomValidity(''); // Correo válido, eliminar el mensaje de error
		} else {
			frmEmail.setCustomValidity('Ingrese un correo electrónico válido.');
		}
	});
});

//VALIDACION DE CAMPO DE CELULAR
document.addEventListener('DOMContentLoaded', function() {
	// Obtener el elemento del campo de número de celular
	const frmCell_phone = document.getElementById('frmCell_phone');
	const cellPhoneError = document.getElementById('Cell_Phone');

	// Expresión regular para validar números de celular que comiencen con "9" y tengan 9 dígitos en total
	const phoneRegex = /^9\d{8}$/;

	// Agregar un evento input al campo de número de celular
	frmCell_phone.addEventListener('input', function() {
		const value = frmCell_phone.value.trim(); // Elimina espacios en blanco

		// Verificar si el valor contiene caracteres no válidos
		if (/[^0-9]/.test(value)) {
			frmCell_phone.setCustomValidity('No se permiten letras ni símbolos en este campo.');
			cellPhoneError.textContent = 'Por favor, ingrese un número de celular válido.';
		} else if (phoneRegex.test(value)) {
			frmCell_phone.setCustomValidity(''); // Valor válido, eliminar el mensaje de error
			cellPhoneError.textContent = ''; // Clear the error message
		} else {
			frmCell_phone.setCustomValidity('Ingrese un número de celular válido que comience con "9" y tenga 9 dígitos.');
			if (value.charAt(0) !== '9') {
				cellPhoneError.textContent = 'El primer dígito debe ser "9".';
			} else {
				cellPhoneError.textContent = 'Por favor, ingrese un número de celular válido de 9 dígitos.';
			}
		}
	});
});

//VALIDACION DE TYPO DE PRODUCTO







//VALIDACION DEL CAMPO FECHA DE NACIMIENTO
document.addEventListener('DOMContentLoaded', function() {
	// Obtener el elemento del campo de fecha de nacimiento
	const frmBirthdate = document.getElementById('frmBirthdate');

	// Agregar un evento input al campo de fecha de nacimiento
	frmBirthdate.addEventListener('input', function() {
		const birthdate = new Date(frmBirthdate.value);
		const today = new Date();
		const age = today.getFullYear() - birthdate.getFullYear();

		// Comprobar si la edad es menor de 18 años
		if (age < 18) {
			frmBirthdate.setCustomValidity('Debe ser mayor de 18 años.');
		} else {
			frmBirthdate.setCustomValidity('');
		}
	});
});


document.addEventListener('DOMContentLoaded', function() {
	const forms = document.querySelectorAll('.needs-validation');

	forms.forEach(function(form) {
		const inputs = form.querySelectorAll('input, select');

		inputs.forEach(function(input) {
			input.addEventListener('input', function() {
				if (input.checkValidity()) {
					input.classList.remove('is-invalid');
					input.classList.add('is-valid');
				} else {
					input.classList.remove('is-valid');
					input.classList.add('is-invalid');
				}
			});
		});
	});
});

document.addEventListener('DOMContentLoaded', function() {
	const forms = document.querySelectorAll('.needs-validation');
	const saveButton = document.getElementById('btnProcesar'); // Obtén el botón "Guardar"

	forms.forEach(function(form) {
		const inputs = form.querySelectorAll('input, select');

		inputs.forEach(function(input) {
			input.addEventListener('input', function() {
				if (form.checkValidity()) {
					// Habilitar el botón si el formulario es válido
					saveButton.removeAttribute('disabled');
				} else {
					// Deshabilitar el botón si el formulario no es válido
					saveButton.setAttribute('disabled', 'disabled');
				}
			});
		});
	});
});

// En el archivo de validaciones
function reiniciarValidacion() {
	// Reiniciar la validación del formulario
	const forms = document.querySelectorAll('.needs-validation');
	forms.forEach(function(form) {
		form.classList.remove('was-validated');
	});
	// Eliminar clases de validación de Bootstrap
	frmType_document.classList.remove('is-valid', 'is-invalid');
	frmNumber_document.classList.remove('is-valid', 'is-invalid');
	frmNames.classList.remove('is-valid', 'is-invalid');
	frmLast_name.classList.remove('is-valid', 'is-invalid');
	frmEmail.classList.remove('is-valid', 'is-invalid');
	frmCell_phone.classList.remove('is-valid', 'is-invalid');
	frmBirthdate.classList.remove('is-valid', 'is-invalid');
}

