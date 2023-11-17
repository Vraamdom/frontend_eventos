function mostrarAlerta() {
    Swal.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "advertencia",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Eliminado!",
          text: "Su archivo ha sido eliminado.",
          icon: "success"
        });
      }
    });
    }


function exportTableToExcel(tableID, filename = '') {
        var downloadLink;
        var dataType = 'application/vnd.ms-excel';
        var tableSelect = document.getElementById(tableID);
       
        // Obtén las filas de la tabla
        var rows = tableSelect.getElementsByTagName('tr');
       
        // Crear un objeto HTML para almacenar solo las columnas deseadas
        var filteredTable = document.createElement('table');
       
        // Agregar encabezados a la nueva tabla
        var headerRow = filteredTable.createTHead().insertRow(0);
        headerRow.innerHTML = "<th>ID</th><th>Servicio</th><th>Categoria</th><th>Fecha de registro</th><th>Disponibilidad</th>";
       
        // Recorrer las filas de la tabla original y copiar solo las columnas deseadas a la nueva tabla
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            if (cells.length >= 5) { // Asegurarse de que haya al menos 5 celdas (las columnas deseadas)
                var newRow = filteredTable.insertRow(-1);
                for (var j = 0; j < 5; j++) { // Copiar solo las primeras 5 celdas (las columnas deseadas)
                    var newCell = newRow.insertCell(j);
                    newCell.innerHTML = cells[j].innerHTML;
                }
            }
        }
       
        // Convertir la nueva tabla a HTML
        var tableHTML = filteredTable.outerHTML.replace(/ /g, '%20');
       
        // Especificar el nombre de archivo
        filename = filename ? filename + '.xls' : 'tabla_servicios.xls';
       
        // Crear el elemento de enlace de descarga
        downloadLink = document.createElement("a");
       
        document.body.appendChild(downloadLink);
       
        if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(['ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Crear un enlace al archivo
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
       
            // Establecer el nombre de archivo
            downloadLink.download = filename;
           
            // Activar la función
            downloadLink.click();
        }
    }
    