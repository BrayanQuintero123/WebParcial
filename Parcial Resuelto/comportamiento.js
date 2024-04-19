function agregarGusto() {
    var inputGusto = document.getElementById('gusto');
    var gustoValue = inputGusto.value; // Obtener el valor actual del input
    if (!gustoValue) {
      alert("Por favor, introduce un gusto.");
      return;
    }
    inputGusto.value = ""; // Limpiar el input después de agregar
  
    var tablaGustos = document.getElementById('tablaGustos').getElementsByTagName('tbody')[0];
    var newRow = tablaGustos.insertRow();
  
    // Columna para la bandera verde
    var flagCell = newRow.insertCell(0);
    flagCell.classList.add('flag-cell');
    flagCell.innerHTML = '<i class="bi bi-clipboard-plus-fill"></i>';
  
    // Columna para el gusto
    var gustoCell = newRow.insertCell(1);
    gustoCell.textContent = gustoValue;
  
    // Columna para el %
    var porcentajeCell = newRow.insertCell(2);
    porcentajeCell.textContent = '0%';
  
    // Columna para el botón de editar
    var editarCell = newRow.insertCell(3);
      var editSpan = document.createElement('span');
      editSpan.textContent = 'Edit';
      editSpan.classList.add('edit-cell'); 
      editarCell.appendChild(editSpan);
  }

  function enviarFormulario() {
    // Verifica si hay al menos un gusto
    var tablaGustos = document.getElementById('tablaGustos').getElementsByTagName('tbody')[0];
    var numFilas = tablaGustos.rows.length;
    if (numFilas === 0) {
        alert("Debes agregar al menos un gusto antes de enviar el formulario.");
        return;
    }

    // Construye la URL con los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var gustos = [];
    var porcentajes = [];
    for (var i = 0; i < numFilas; i++) {
        gustos.push(tablaGustos.rows[i].cells[1].textContent);
        porcentajes.push(tablaGustos.rows[i].cells[2].textContent);
    }
    var url = 'envio.html' + '?nombre=' + encodeURIComponent(nombre) + '&email=' + encodeURIComponent(email) + '&gustos=' + encodeURIComponent(gustos.join(',')) + '&porcentajes=' + encodeURIComponent(porcentajes.join(','));

    // Redirige a la otra página HTML con los datos del formulario en la URL
    window.location.href = url;
}
