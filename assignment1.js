function generateTable() {
  
    var rows = parseInt(document.getElementById('rows').value);
    var columns = parseInt(document.getElementById('columns').value);
    var table = document.createElement('table');

    for (var i = 1; i <= rows; i++) {
        var row = table.insertRow();
        for (var j = 1; j <= columns; j++) {
            var cell = row.insertCell();
            cell.textContent = i * j;
        }
    }

    var tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}