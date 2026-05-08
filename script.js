function saveAppointment(){

    let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;

    let doctor = document.getElementById("doctor").value;

    let date = document.getElementById("date").value;

    let time = document.getElementById("time").value;

    let problem = document.getElementById("problem").value;

    let patient = {

        name:name,
        age:age,
        doctor:doctor,
        date:date,
        time:time,
        problem:problem

    };

    let data = JSON.parse(localStorage.getItem("appointments")) || [];

    data.push(patient);

    localStorage.setItem("appointments", JSON.stringify(data));

    alert("Appointment Saved");

    window.location.href = "output.html";
}

window.onload = function(){

    let tableBody = document.getElementById("tableBody");

    if(tableBody){

        let data = JSON.parse(localStorage.getItem("appointments")) || [];

        data.forEach(function(patient){

            tableBody.innerHTML += `

            <tr>

            <td>${patient.name}</td>

            <td>${patient.age}</td>

            <td>${patient.doctor}</td>

            <td>${patient.date}</td>

            <td>${patient.time}</td>

            <td>${patient.problem}</td>

            </tr>

            `;
        });
    }
}
