// AGREGAR EVENTO VARIABLES
const formulario = document.getElementById('form_agregar_evento')
const nombre_evento = document.getElementById('nombre_evento')
const hora_inicial = document.getElementById('hora_i')
const hora_final = document.getElementById('hora_f')
const fecha_evento = document.getElementById('fecha_evento')
const encargado_funda = document.getElementById('encargado_f')
const nit_empresa = document.getElementById('nit')
const estado_evento = document.getElementById('estado_evento')
const nombre_empresa = document.getElementById('nombre_empresa')
const encargado_empresa = document.getElementById('encargado_e')
const lugar_realizacion = document.getElementById('lugar')
const telefono_encargado = document.getElementById('telefono_e')
const numero_participantes = document.getElementById('numero_p')

// AGREGAR TIPO DE PARTICIPANTE VARIABLES
const formulario_tipo_part = document.getElementById('form_tipo_participante')
const edad_max = document.getElementById('edad_max')
const edad_min = document.getElementById('edad_min')
const tipo_participante = document.getElementById('tipo_part')
const genero_biologico = document.getElementById('genero_b')
const nro_invitados_tipo = document.getElementById('nro_invitados_p')

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

formulario.addEventListener('submit', e =>{
    e.preventDefault()


    validateInputs_Evento()
})

formulario_tipo_part.addEventListener('submit', e =>{
    e.preventDefault()


    validateInputs_tipo_part()
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

const validateInputs_Evento = () =>{

    // VALIDA CAMPOS AGREGAR EVENTO
    const nombre_evento_value = nombre_evento.value.trim()

    const encargado_funda_value = encargado_funda.value.trim()
    const nit_empresa_value = nit_empresa.value.trim()
    const estado_evento_value = estado_evento.value.trim()
    const nombre_empresa_value = nombre_empresa.value.trim()
    const encargado_empresa_value = encargado_empresa.value.trim()
    const lugar_realizacion_value = lugar_realizacion.value.trim()
    const telefono_encargado_value = telefono_encargado.value.trim()
    const numero_participantes_value = numero_participantes.value.trim()



    // VALDIACIONES AGREGAR EVENTO
    // valido nombres

    if(nombre_evento_value === ""){
        setError(nombre_evento, 'No puedes dejar este campo vacio.')
    }else if(!validarNombre(nombre_evento_value)){
        setError(nombre_evento, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    }else{
        setSuccess(nombre_evento)
    }

    if(encargado_funda_value === ""){
        setError(encargado_funda, 'No puedes dejar este campo vacio.')
    }else if(!validarNombre(encargado_funda_value)){
        setError(encargado_funda, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    }else{
        setSuccess(encargado_funda)
    }

    if(nombre_empresa_value === ""){
        setError(nombre_empresa, 'No puedes dejar este campo vacio.')
    }else if(!validarNombre(nombre_empresa_value)){
        setError(nombre_empresa, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    }else{
        setSuccess(nombre_empresa)
    }

    if(lugar_realizacion_value === ""){
        setError(lugar_realizacion, 'No puedes dejar este campo vacio.')
    }else if(!validarNombre(lugar_realizacion_value)){
        setError(lugar_realizacion, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    }else{
        setSuccess(lugar_realizacion)
    }

    if(encargado_empresa_value === ""){
        setError(encargado_empresa, 'No puedes dejar este campo vacio.')
    }else if(!validarNombre(encargado_empresa_value)){
        setError(encargado_empresa, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    }else{
        setSuccess(encargado_empresa)
    }

    // valido numeros

    if(telefono_encargado_value === ""){
        setError(telefono_encargado, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(telefono_encargado_value)){
        setError(telefono_encargado, 'Solo puedes ingresar números.')
    }else{
        setSuccess(telefono_encargado)
    }

    if(numero_participantes_value === ""){
        setError(numero_participantes, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(numero_participantes_value)){
        setError(numero_participantes, 'Solo puedes ingresar números.')
    }else{
        setSuccess(numero_participantes)
    }

    if(nit_empresa_value === ""){
        setError(nit_empresa, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(nit_empresa_value)){
        setError(nit_empresa, 'Solo puedes ingresar números.')
    }else{
        setSuccess(nit_empresa)
    }
    
    // valido select

    if(estado_evento_value === "seleccionar"){
        setError(estado_evento, 'Debes de seleccionar una opción valida')
    }else{
        setSuccess(estado_evento)
    }

    if( validarNombre(nombre_evento_value) && validarNombre(encargado_funda_value) && validarNombre(nombre_empresa_value) &&  validarNombre(lugar_realizacion_value) && validarNombre(encargado_empresa_value) && validarNumero(telefono_encargado_value) && validarNumero(numero_participantes_value) && validarNumero(nit_empresa_value) && estado_evento_value != "seleccionar"){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El evento ha sido modificado.",
            showConfirmButton: false,
            timer: 1500
          });
    }

    
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

