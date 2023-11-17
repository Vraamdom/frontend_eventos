
// AGREGAR TIPO DE PARTICIPANTE VARIABLES
const formulario_tipo_part = document.getElementById('form_tipo_participante')
const edad_max = document.getElementById('edad_max')
const edad_min = document.getElementById('edad_min')
const tipo_participante = document.getElementById('tipo_part')
const genero_biologico = document.getElementById('genero_b')
const nro_invitados_tipo = document.getElementById('nro_invitados_p')


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


formulario_tipo_part.addEventListener('submit', e =>{
    e.preventDefault()


    validateInputs_tipo_part()
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


    

// VALDIACIONES AGREGAR TIPO PARTICIPANTE =============================================================================
const validateInputs_tipo_part = () =>{


    // VALIDA CAMPOS AGREGAR TIPO PARTICIPANTE
    const edad_max_value = edad_max.value.trim()
    const edad_min_value = edad_min.value.trim()
    const tipo_participante_value = tipo_participante.value.trim()
    const genero_biologico_value = genero_biologico.value.trim()
    const nro_invitados_tipo_value = nro_invitados_tipo.value.trim()


    // valido select
    if(tipo_participante_value === "seleccionar"){
        setError(tipo_participante, 'Debes de seleccionar una opción valida')
    }else{
        setSuccess(tipo_participante)
    }



    if(genero_biologico_value === "seleccionar"){
        setError(genero_biologico, 'Debes de seleccionar una opción valida')
    }else{
        setSuccess(genero_biologico)
    }

    // valido numeros
    if(edad_max_value === ""){
        setError(edad_max, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(edad_max_value)){
        setError(edad_max, 'Solo puedes ingresar números.')
    }else{
        setSuccess(edad_max)
    }

    if(edad_min_value === ""){
        setError(edad_min, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(edad_min_value)){
        setError(edad_min, 'Solo puedes ingresar números.')
    }else{
        setSuccess(edad_min)
    }

    if(nro_invitados_tipo_value === ""){
        setError(nro_invitados_tipo, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(nro_invitados_tipo_value)){
        setError(nro_invitados_tipo, 'Solo puedes ingresar números.')
    }else{
        setSuccess(nro_invitados_tipo)
    }
    if(validarNumero(nro_invitados_tipo_value) && validarNumero(edad_min_value) && validarNumero(edad_max_value) && genero_biologico_value != "seleccionar" && tipo_participante_value != "seleccionar"){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El tipo de participante ha sido modificado.",
            showConfirmButton: false,
            timer: 1500
          });
    }

}


