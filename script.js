console.log("JS Connected");

const doctors = {
  "Dr. Sharma": "Cardiologist",
  "Dr. Khan": "Dermatologist",
  "Dr. Patel": "Neurologist"
};

const doctorList = document.getElementById("doctorList");
const doctorDropdown = document.getElementById("doctor");
const form = document.getElementById("appointmentForm");
const output = document.getElementById("output");

let appointments = [];

// ✅ Doctors show on homepage
function loadDoctors() {
  for (let doc in doctors) {
    doctorList.innerHTML += `
      <tr>
        <td>${doc}</td>
        <td>${doctors[doc]}</td>
      </tr>
    `;

    doctorDropdown.innerHTML += `
      <option value="${doc}">${doc}</option>
    `;
  }
}

// ✅ Form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const doctor = doctorDropdown.value;
  const specialization = doctors[doctor];

  const newAppointment = {
    name,
    date,
    doctor,
    specialization
  };

  appointments.push(newAppointment);
  displayData();
  form.reset();
});

// ✅ Show appointments
function displayData() {
  output.innerHTML = "";

  appointments.forEach(function(app) {
    output.innerHTML += `
      <tr>
        <td>${app.name}</td>
        <td>${app.date}</td>
        <td>${app.doctor}</td>
        <td>${app.specialization}</td>
      </tr>
    `;
  });
}

// Load doctors
loadDoctors();