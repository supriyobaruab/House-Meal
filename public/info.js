import { url } from "./app.js";
const table = document.getElementById("table");
async function information() {
  const response = await fetch(`${url}/logs`);
  const data = await response.json();
  data.data.forEach((element) => {
    table.innerHTML += `
      <tr class="border-b">
        <td class="px-4 w-48 py-2 ">${element.name.toUpperCase()}</td>
        <td class="px-4 w-48 py-2">${element.date}</td>
        <td class="px-4 w-64 py-2">৳${element.result}</td>
        <td class="px-4 py-2">
          ${element.description}
        </td>
      </tr>`;
  });
}
information();
