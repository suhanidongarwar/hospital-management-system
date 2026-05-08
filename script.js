function saveAppointment(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let time = document.getElementById("time").value;

    let patient = {
        name:name,
        age:age,
        doctor:doctor,
        time:time
    };

    let data = JSON.parse(localStorage.getItem("patients")) || [];

    data.push(patient);

    localStorage.setItem("patients", JSON.stringify(data));

    alert("Appointment Saved");

    window.location.href = "output.html";
}

window.onload = function(){

    let table = document.getElementById("tableBody");

    if(table){

        let data = JSON.parse(localStorage.getItem("patients")) || [];

        data.forEach(function(patient){

            table.innerHTML += `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.doctor}</td>
                <td>${patient.age}</td>
                <td>${patient.time}</td>
            </tr>
            `;
        });
    }
}
section{
    min-height:100vh;
    padding:50px;
}
