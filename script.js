function saveData() {

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let doctor = document.getElementById("doctor").value;

    let data = {name, date, time, doctor};

    localStorage.setItem("appointment", JSON.stringify(data));

    alert("Data Saved!");
}

function showData() {

    let data = JSON.parse(localStorage.getItem("appointment"));

    if (data == null) return;

    let table = document.getElementById("table");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = data.name;
    row.insertCell(1).innerHTML = data.date;
    row.insertCell(2).innerHTML = data.time;
    row.insertCell(3).innerHTML = data.doctor;
}
