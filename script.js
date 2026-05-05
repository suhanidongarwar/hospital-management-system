const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const doctor = document.getElementById("doctor").value;

  const row = `
    <tr>
      <td>${name}</td>
      <td>${date}</td>
      <td>${doctor}</td>
    </tr>
  `;

  output.innerHTML += row;

  form.reset();
});
