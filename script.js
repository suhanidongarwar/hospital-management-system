function saveData() {

    var name = document.getElementById("name").value;
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    if(name=="" || doctor=="" || date=="" || time==""){

        alert("Please fill all fields");

        return;
    }

    var oldData = JSON.parse(localStorage.getItem("appointments")) || [];

    var newData = {

        name:name,
        doctor:doctor,
        date:date,
        time:time
    };

    oldData.push(newData);

    localStorage.setItem("appointments", JSON.stringify(oldData));

    alert("Appointment Booked Successfully!");

    window.location.href = "output.html";
}
