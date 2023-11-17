const datos_p = [{
  "id": 1,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Sara Cataño",
  "edad": 19,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 2,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Dana Mejia",
  "edad": 18,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 3,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Alison Puerta",
  "edad": 18,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 4,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Diana Alvarez",
  "edad": 18,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 5,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Daniela Giraldo",
  "edad": 31,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 6,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Valentina Usuga",
  "edad": 25,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 7,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Juliana Gil",
  "edad": 19,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 8,
  "tipo_participante": "Beneficiario",
  "nombre_completo": "Maria Arias",
  "edad": 18,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 9,
  "tipo_participante": "Acudiente",
  "nombre_completo": "Briana Ortiz",
  "edad": 23,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}, {
  "id": 10,
  "tipo_participante": "Acudiente",
  "nombre_completo": "Brenda Betancur",
  "edad": 22,
  "genero_biologico": "Femenino",
  "placa_vehiculo": "ASD 132",
  "tipo_documento": "C.C",
  "documento": "123456789011",
  "asistencia": true
}]
  
    const table_p = document.getElementById('tblP');
    const pagination_p = document.getElementById('pagination_p');
    const prevPageButton_p = document.getElementById('prevPage_p');
    const nextPageButton_p = document.getElementById('nextPage_p');
    const currentPageSpan_p = document.getElementById('currentPage_p');
    let pagina_principal_p = 1;
    const itemsPerPage_p = 5; // Cambia esto para ajustar la cantidad de filas por página
  
    function showdatos_p(page) {
      const startIndex = (page - 1) * itemsPerPage_p;
      const endIndex = startIndex + itemsPerPage_p;
      const paginateddatos_p = datos_p.slice(startIndex, endIndex);
  
      table_p.tBodies[0].innerHTML = '';
  
      for (const item of paginateddatos_p) {
        const row = table_p.tBodies[0].insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.tipo_participante;
        row.insertCell(2).textContent = item.nombre_completo;
        row.insertCell(3).textContent = item.edad;
        row.insertCell(4).textContent = item.genero_biologico;
        row.insertCell(5).textContent = item.placa_vehiculo;
        row.insertCell(6).textContent = item.tipo_documento;
        row.insertCell(7).textContent = item.documento;
        row.insertCell(8).textContent = item.asistencia;

        const opcionesCell = row.insertCell(9);
        opcionesCell.className ='Opciones';
  
        opcionesCell.innerHTML = `
        <td class="Opciones">
          <div>
              <img src="../images/borrar.png" alt="icon"
                  class="opc_delete" onclick="mostrarAlerta()">
          </div>
        </td>
          `;
      }
     
  
      pagina_principal_p = page;
      currentPageSpan_p.textContent = pagina_principal_p;
      prevPageButton_p.disabled = pagina_principal_p === 1;
      nextPageButton_p.disabled = pagina_principal_p === Math.ceil(datos_p.length / itemsPerPage_p);
    }
  
    prevPageButton_p.addEventListener('click', () => {
      if (pagina_principal_p > 1) {
        showdatos_p(pagina_principal_p - 1);
      }
    });
  
    nextPageButton_p.addEventListener('click', () => {
      if (pagina_principal_p < Math.ceil(datos_p.length / itemsPerPage_p)) {
        showdatos_p(pagina_principal_p + 1);
      }
    });
  
    showdatos_p(pagina_principal_p); // Mostrar la primera página al cargar la página
  
  