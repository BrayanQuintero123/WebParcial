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
      editSpan.classList.add('edit-cell'); // Aplica el estilo a la celda de "Edit"
      editarCell.appendChild(editSpan);
  }