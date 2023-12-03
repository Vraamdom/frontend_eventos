
const url = 'http://localhost:1121/tipo_participantes'

const listarTP = async () => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido_tp')
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(function (data) {//Se manipulan los datos obtenidos de la url
            let listaTP = data.msg //msg es el nombre de la lista retorna con json
            console.log(listaTP)
            listaTP.map(function (TP) {
                //Configurar el objeto para enviarlo por url
                objetoTP = Object.keys(TP).map(key => key + '=' +
                    encodeURIComponent(TP[key])).join('&');
                console.log(TP)
                contenido = contenido + `<tr>` +
                    `<td>` + TP.tipo_ps + `</td>` +
                    `<td>` + TP.genero_biologico + `</td>` +
                    `<td>` + TP.edad_minima + `</td>` +
                    `<td>` + TP.edad_maxima + `</td>` +
                    `<td>` + TP.nro_tp + `</td>` +
                    `<td><button onclick="redireccionarEditar('${objetoTP}')"
            style= "border: none; background: none;"><img
                         src="../images/editar.png" alt="icon"
                         class="opc_edit"></button>
            </td>`+
                    `<td>
        <button onclick="eliminarTipoParticipante('${TP.tipo_ps}')"
                style="border: none; background: none;">
            <img src="../images/borrar.png" alt="icon" class="opc_delete">
        </button>
    </td>`+
                    `</tr>`
            })
            objectId.innerHTML = contenido
        })

}

const registrarTP = () => {
    const tipo_ps = document.getElementById('tipo_part').value;
    const genero_biologico = document.getElementById('genero_b').value
    const nro_tp = document.getElementById('nro_invitados_p').value
    const edad_minima = document.getElementById('edad_min').value
    const edad_maxima = document.getElementById('edad_max').value


    if (tipo_ps.length === "seleccionar") {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if (genero_biologico.length === "seleccionar") {
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }
    else if (nro_tp.length == 0) {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }else if (edad_minima.length == 0) {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    } else if (edad_maxima.length == 0) {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }  else {
        let tipo_participante = {
            tipo_ps: tipo_ps,
            genero_biologico: genero_biologico,
            edad_minima: edad_minima,
            edad_maxima: edad_maxima,
            nro_tp: nro_tp,
        }

        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(tipo_participante),//Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {
                alert(json.msg) //Imprimir el mensaje de la transacción
            })
    }
}

const actualizarTP = () => {
    const tipo_ps = document.getElementById('tipo_part').value;
    const genero_biologico = document.getElementById('genero_b').value
    const nro_tp = document.getElementById('nro_invitados_p').value
    const edad_minima = document.getElementById('edad_min').value
    const edad_maxima = document.getElementById('edad_max').value


    if (tipo_ps.length === "seleccionar") {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if (genero_biologico.length === "seleccionar") {
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }
    else if (nro_tp.length == 0) {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }else if (edad_minima.length == 0) {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    } else if (edad_maxima.length == 0) {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    } else {
        let tipo_participante = {
            tipo_ps: tipo_ps,
            genero_biologico: genero_biologico,
            edad_minima: edad_minima,
            edad_maxima: edad_maxima,
            nro_tp: nro_tp,
        }

        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(tipo_participante),//Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {
                alert(json.msg) //Imprimir el mensaje de la transacción
            })
    }
}

const redireccionarEditar = (objetoVehiculo) => {
    document.location.href = 'editar_tipo_participante?tipo_participante=' + objetoVehiculo
}

const editarTP = () => {
    // Obtener datos de la url
    var urlParams = new URLSearchParams(window.location.search);
    //Asignar valores a cajas de texto
    document.getElementById('tipo_part').value = urlParams.get('tipo_ps')
    document.getElementById('genero_b').value = urlParams.get('genero_biologico')
    document.getElementById('nro_invitados_p').value = urlParams.get('nro_tp')
    document.getElementById('edad_min').value = urlParams.get('edad_minima')
    document.getElementById('edad_max').value = urlParams.get('edad_maxima')



}

const eliminarTipoParticipante = (tipo_ps) => {
    if (confirm("¿Estás seguro de que quieres eliminar este tipo de participante?")) {
        fetch(`${url}?tipo_ps=${tipo_ps}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error de red - Código de estado ${res.status}`);
            }
            return res.json();
        })
        .then(json => {
            alert(json.msg);
            // Volver a cargar la lista después de eliminar
            listarTP();
        })
        .catch(error => console.error('Error al eliminar el tipo de participante:', error.message));
    }
}



if (document.querySelector('#boton')) { //Si objeto exitste
    document.querySelector('#boton')
        .addEventListener('click', registrarTP)
}

if (document.querySelector('#boton_tp')) {//Si objeto existe
    document.querySelector('#boton_tp')
        .addEventListener('click', actualizarTP)
}
