function bookAppointment() {

    // input values lena
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let doctor = document.getElementById("doctor").value;

    // validation
    if (name === "" || date === "" || doctor === "") {
        alert("Please fill all fields!");
        return;
    }

    // table select karna
    let table = document.getElementById("outputTable");

    // new row add karna
    let newRow = table.insertRow(-1);

    // cells create
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    // values insert
    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = doctor;

    // form reset
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("doctor").value = "";
}
