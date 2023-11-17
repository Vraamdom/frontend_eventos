

// AGREGAR VEHICULO CONTRATADO
const formulario_vehiculos = document.getElementById('form_vehiculos')
const tipo_vehiculo = document.getElementById('tipo_ve')
const placa_vehiculo = document.getElementById('placa_ve')
const puestos_vehiculo = document.getElementById('puestos_ve')

// VOLVER AL INDEX DE  EVENTO
const boton_volver = document.getElementById('boton_volver')

const volver_index = () =>{
    Swal.fire({
        title: "Quieres salir del formulario?",
        showDenyButton: true,
        confirmButtonText: "Seguir",
        denyButtonText: `Volver`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire("Seguiras en el fomrulario", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Redireccionando...", "", "info");
          location.href = 'eventos'
        }
      });
}
boton_volver.addEventListener('click', e =>{
    e.preventDefault()

    volver_index()
})

formulario_vehiculos.addEventListener('submit', e =>{
    e.preventDefault()


    validateInputs_vehiculos()
})





const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = elemento =>{
    const inputControl = elemento.parentElement
    const errorDisplay = inputControl.querySelector('.error')


    errorDisplay.innerText = ""
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

// VALIDA QUE EL FORMATO DEL CORREO ESTE BIEN(TEXTO @ TEXTO . TEXTO)
const validarCorreo = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// VALIDA QUE TENGA ALMENOS 8 CARACTERES
const validarContraseña = pass =>{
    const re = /^.{8,}$/
    return re.test(pass)
}

// VALIDA QUE SOLO SEAN LETRAS(SE PUEDEN ESPACIOS Y LETRAS CON ACENTOS)
const validarTexto = text => {
    const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/
    return re.test(String(text))
}

// VALIDA QUE SOLO SE INGRESEN LETRAS Y QUE LA PRIMERA SEA MAYUSCULA (LA PUEDEN USAR PARA CAMPOS COMO NOMBRES)
const validarNombre = nombre => {
    const re = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/

// /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-z\u00DF-\u00F6\u00F8-\u00FF ]*$/ (ESTA LINEA VALIDA QUE LA PRIMERA SEA MAYUSCULA PERO SI PONES TODAS MAYUSCULA TE MUESTRA ERROR DEPRONTO A ALGUIEN LE SIRVA POR ESO LA DEJO)
    return re.test(nombre)
}

// VALIDA QUE SOLO SE PUEDAN INGRESAR NUMEROS
const validarNumero = numero => {
    const re = /^\d+$/
    return re.test(numero)
}
// VALIDA EL NUMERO DE PLACA (SOLO PERMITE 3 LETRAS 3 NUMEROS Y UN ESPACIO)
const validarPlaca = nro_placa => {
    const re = /^[a-zA-Z]{3}\s\d{3}$/
    return re.test(nro_placa)
}



//  VALIDO VEHICULOS CONTRATADOS ==========================================================================================
const validateInputs_vehiculos= () =>{


    // VALIDA CAMPOS AGREGAR VEHICULOS CONTRATADOS
    const tipo_vehiculo_value = tipo_vehiculo.value.trim()
    const placa_vehiculo_value = placa_vehiculo.value.trim()
    const puestos_vehiculo_value = puestos_vehiculo.value.trim()



    // valido select
    if(tipo_vehiculo_value === "seleccionar"){
        setError(tipo_vehiculo, 'Debes de seleccionar una opción valida')
    }else{
        setSuccess(tipo_vehiculo)
    }

    if(placa_vehiculo_value === ""){
        setError(placa_vehiculo, 'No puedes dejar este campo vacio.')
    }else if(!validarPlaca(placa_vehiculo_value)){
        setError(placa_vehiculo, 'No ingresaste una placa de vehículo valida.')
    }else{
        setSuccess(placa_vehiculo)
    }

  

    // valido numeros
    if(puestos_vehiculo_value === ""){
        setError(puestos_vehiculo, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(puestos_vehiculo_value)){
        setError(puestos_vehiculo, 'Solo puedes ingresar números.')
    }else{
        setSuccess(puestos_vehiculo)
    }


    if(validarNumero(puestos_vehiculo_value) && validarPlaca(placa_vehiculo_value) && tipo_vehiculo_value != "seleccionar"){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El vehículo contratado ha sido modificado.",
            showConfirmButton: false,
            timer: 1500
          });
    }
}

