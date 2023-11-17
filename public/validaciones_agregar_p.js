
// AGREGAR PARTICIPANTE
const formulario_participantes = document.getElementById('form_agregar_participante')
const nombre_participante = document.getElementById('nombre_participante')
const edad = document.getElementById('edad')
const genero_b_p = document.getElementById('genero_b_p')
const asistencia = document.getElementById('asistencia')
const tipo_do = document.getElementById('tipo_do')
const placa_vehiculo_p = document.getElementById('placa_vehiculo_p')
const tipo_part = document.getElementById('tipo_part')
const nro_documento = document.getElementById('nro_documento')
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



formulario_participantes.addEventListener('submit', e =>{
    e.preventDefault()


    validateInputs_participante()
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


// VALIDACION AGREGAR UN PARTICIPANTE

const validateInputs_participante= () =>{


    // VALIDA CAMPOS AGREGAR UN PARTICIPANTE
    const nombre_participante_value = nombre_participante.value.trim()
    const edad_value = edad.value.trim()
    const genero_b_p_value = genero_b_p.value.trim()
    const asistencia_value = asistencia.value.trim()
    const tipo_do_value = tipo_do.value.trim()
    const placa_vehiculo_p_value = placa_vehiculo_p.value.trim()
    const tipo_part_value = tipo_part.value.trim()
    const nro_documento_value = nro_documento.value.trim()

    // valido nombre
    if(nombre_participante_value === ""){
        setError(nombre_participante, 'No puedes dejar este campo vacio.')
    }else if(!validarNombre(nombre_participante_value)){
        setError(nombre_participante, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    }else{
        setSuccess(nombre_participante)
    }

    // valido select
    if(genero_b_p_value === "seleccionar"){
        setError(genero_b_p, 'Debes de seleccionar una opción valida.')
    }else{
        setSuccess(genero_b_p)
    }

    if(asistencia_value === "seleccionar"){
        setError(asistencia, 'Debes de seleccionar una opción valida.')
    }else{
        setSuccess(asistencia)
    }

    if(tipo_do_value === "seleccionar"){
        setError(tipo_do, 'Debes de seleccionar una opción valida.')
    }else{
        setSuccess(tipo_do)
    }

    if(tipo_part_value === "seleccionar"){
        setError(tipo_part, 'Debes de seleccionar una opción valida.')
    }else{
        setSuccess(tipo_part)
    }





  

    // valido numeros
    if(edad_value === ""){
        setError(edad, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(edad_value)){
        setError(edad, 'Solo puedes ingresar números.')
    }else{
        setSuccess(edad)
    }

    if(nro_documento_value === ""){
        setError(nro_documento, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(nro_documento_value)){
        setError(nro_documento, 'Solo puedes ingresar números.')
    }else{
        setSuccess(nro_documento)
    }


    if(validarNumero(nro_documento_value) && validarNumero(edad_value) && validarNombre(nombre_participante_value) && genero_b_p_value != "seleccionar" && asistencia_value != "seleccionar" && tipo_do_value != "seleccionar" && tipo_part_value != "seleccionar"){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El participante ha sido registrado.",
            showConfirmButton: false,
            timer: 1500
          });
    }
}