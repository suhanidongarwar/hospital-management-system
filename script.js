function saveData() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    if(name === "" || date === "" || time === "") {
        alert("Please fill all fields");
        return;
    }

    var data = {
        name: name,
        date: date,
        time: time
    };

    localStorage.setItem("appointment", JSON.stringify(data));

    alert("Appointment Saved!");

    window.location.href = "output.html";
}
