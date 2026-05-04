
const form = document.getElementById("form");
const output = document.getElementById("output");

let appointments = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const doctor = document.getElementById("doctor").value;

  const newApp = { name, date, doctor };

  appointments.push(newApp);
  display();

  form.reset();
});

function display() {
  output.innerHTML = "";

  appointments.forEach(app => {
    output.innerHTML += `
      <tr>
        <td>${app.name}</td>
        <td>${app.date}</td>
        <td>${app.doctor}</td>
      </tr>
    `;
  });
}
