function ongetDeleted() {

    try {
       fetch('/api/getDeletedJiras')
          .then(res => res.json())
          .then(data => {
 
             let deletedTickets = data;
             console.log(deletedTickets);
             //generate HTML Table:
             _fillTable(deletedTickets);
 
 
          })
    } catch (error) {
       console.log(error);
    }
 
 }
 
 function _fillTable(aTicketList) {
    var tbl = document.getElementById("tblDeletedItems");
    for (let i = 0; i < aTicketList.length; i++) {
       var row = tbl.insertRow();
       var dateCel = row.insertCell();
       var low = row.insertCell();
       var medium = row.insertCell();
       var high = row.insertCell();
       var veryHigh = row.insertCell();
       tbl.insertRow();
       const datev = new Date( (parseInt(aTicketList[i][0]), 10) ) ;
       let formatted_date = datev.getFullYear() + "-" + (datev.getMonth() + 1) + "-" + datev.getDate();
 
 
 
          dateCel.innerHTML = formatted_date;
       low.innerHTML = _calcTickets(aTicketList[i][1].P00)
       medium.innerHTML = _calcTickets(aTicketList[i][1].P01)
       high.innerHTML = _calcTickets(aTicketList[i][1].P02)
       veryHigh.innerHTML = _calcTickets(aTicketList[i][1].P03)
       var bod = tbl.tbody;
       tbl.appendChild(row)
 
    }
 }
 
 
 function _calcTickets(aTicketsPerPrio) {
    if (aTicketsPerPrio) {
       return (aTicketsPerPrio.length)
    } else {
       return 0;
    }
 }
 
 