// export-table.js

function exportTableToExcel(printId) {
  var tableHTML = document.getElementById(printId).innerHTML;

  // Generate current date and time for filename
  var now = new Date();
  var day = ('0' + now.getDate()).slice(-2);
  var month = ('0' + (now.getMonth() + 1)).slice(-2);
  var year = now.getFullYear();

  var hours = now.getHours();
  var minutes = ('0' + now.getMinutes()).slice(-2);
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = ('0' + hours).slice(-2);

  var filename = `report-${year}-${month}-${day}_${hours}-${minutes}${ampm}.xls`;

  var htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><title>Report</title></head>
    <body>${tableHTML}</body>
    </html>`;

  var blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel' });
  var url = URL.createObjectURL(blob);

  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
