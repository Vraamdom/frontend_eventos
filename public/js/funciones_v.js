
const url = 'https://backend-eventos.onrender.com/vehiculos_contratados'

const url_dolar = 'https://www.datos.gov.co/resource/mcec-87by.json'

function actualizarValorDolar() {
    const dolarInput = document.getElementById('dolar');

    // Realizar la petición a la URL utilizando fetch
    fetch(url_dolar, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => {
        // Verificar si la respuesta es un JSON válido
        if (!response.ok) {
            throw new Error('Error en la solicitud de la API');
        }
        return response.json();
    })
    .then(dataArray => {
        // Verificar si hay al menos un objeto en el array
        if (dataArray && dataArray.length > 0) {
            // Tomar el primer objeto del array (asumiendo que eso es lo que necesitas)
            const primerObjeto = dataArray[0];

            // Actualizar el valor del input con el valor del objeto
            dolarInput.value = `${primerObjeto.valor}`;
        } else {
            throw new Error('Formato de respuesta incorrecto o array vacío');
        }
    })
    .catch(error => {
        console.error('Error al obtener el valor del dólar:', error);
        dolarInput.value = 'Error al obtener el valor del dólar';
    });
}
  


const listarVehiculos = async () => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido_v')
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(function (data) {//Se manipulan los datos obtenidos de la url
            let listaVehiculos = data.msg //msg es el nombre de la lista retorna con json
            console.log(listaVehiculos)
            listaVehiculos.map(function (vehiculo) {
                //Configurar el objeto para enviarlo por url
                objetoVehiculo = Object.keys(vehiculo).map(key => key + '=' +
                    encodeURIComponent(vehiculo[key])).join('&');
                console.log(vehiculo)
                contenido = contenido + `<tr>` +
                    `<td>` + vehiculo.tipo_vehiculo + `</td>` +
                    `<td>` + vehiculo.puestos_vehiculo + `</td>` +
                    `<td>` + vehiculo.placa_vehiculo + `</td>` +
                    `<td>` + vehiculo.precio_dolar + `</td>` +
                    `<td><button onclick="redireccionarEditar('${objetoVehiculo}')"
            style= "border: none; background: none;"><img
                         src="../images/editar.png" alt="icon"
                         class="opc_edit"></button>
            </td>`+
                    `<td>
        <button onclick="eliminarVehiculo('${vehiculo.placa_vehiculo}')"
                style="border: none; background: none;">
            <img src="../images/borrar.png" alt="icon" class="opc_delete">
        </button>
    </td>`+
                    `</tr>`
            })
            objectId.innerHTML = contenido
        })

}

const registrarVehiculo = () => {
    const tipo_vehiculo = document.getElementById('tipo_ve').value;
    const placa_ve = document.getElementById('placa_ve').value
    const puestos_ve = document.getElementById('puestos_ve').value
    const dolar_precio = document.getElementById('dolar').value


    if (placa_ve.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if (puestos_ve.length == 0) {
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }
    else if (tipo_vehiculo == "") {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }else if (dolar_precio == "") {
        document.getElementById('dolarHelp').innerHTML = 'Dato requerido'
    } else {
        let vehiculo = {
            tipo_vehiculo: tipo_vehiculo,
            placa_vehiculo: placa_ve,
            puestos_vehiculo: puestos_ve,
            precio_dolar: dolar_precio
        }

        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(vehiculo),//Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {
                alert(json.msg) //Imprimir el mensaje de la transacción
            })
    }
}

const actualizarVehiculo = () => {
    const tipo_vehiculo = document.getElementById('tipo_ve').value;
    const placa_ve = document.getElementById('placa_ve').value
    const puestos_ve = document.getElementById('puestos_ve').value
    const dolar_precio = document.getElementById('dolar').value

    if (placa_ve.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if (puestos_ve.length == 0) {
        document.getElementById('passwordHelp').innerHTML = 'Dato requerido'
    }
    else if (tipo_vehiculo == "") {
        document.getElementById('rolHelp').innerHTML = 'Dato requerido'
    }else if (dolar_precio == "") {
        document.getElementById('dolarHelp').innerHTML = 'Dato requerido'
    } else {
        let vehiculo = {
            tipo_vehiculo: tipo_vehiculo,
            placa_vehiculo: placa_ve,
            puestos_vehiculo: puestos_ve,
            precio_dolar: dolar_precio
        }

        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(vehiculo),//Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {
                alert(json.msg) //Imprimir el mensaje de la transacción
            })
    }
}

const redireccionarEditar = (objetoVehiculo) => {
    document.location.href = 'editar_vehiculo?vehiculo=' + objetoVehiculo
}

const editarVehiculo = () => {
    // Obtener datos de la url
    var urlParams = new URLSearchParams(window.location.search);
    //Asignar valores a cajas de texto
    document.getElementById('tipo_ve').value = urlParams.get('tipo_vehiculo')
    document.getElementById('placa_ve').value = urlParams.get('placa_vehiculo')
    document.getElementById('puestos_ve').value = urlParams.get('puestos_vehiculo')
    document.getElementById('dolar').value = urlParams.get('precio_dolar')

}

const eliminarVehiculo = (placa) => {
    if (confirm("¿Estás seguro de que quieres eliminar este vehículo?")) {
        fetch(`${url}?placa_vehiculo=${placa}`, {
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
            listarVehiculos();
        })
        .catch(error => console.error('Error al eliminar el vehículo:', error.message));
    }
}





if (document.querySelector('#boton')) { //Si objeto exitste
    document.querySelector('#boton')
        .addEventListener('click', registrarVehiculo)
}

if (document.querySelector('#boton_e')) {//Si objeto existe
    document.querySelector('#boton_e')
        .addEventListener('click', actualizarVehiculo)
}
