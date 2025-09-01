import { url } from "./app.js";
const table = document.getElementById("table");
const mobile_log = document.getElementById("mobile_log");
async function information() {
  const response = await fetch(`${url}/logs`);
  const data = await response.json();
  data.data.forEach((element) => {
    table.innerHTML += `
      <tr class="border-b bg-gray-50">
        <td class="px-4 w-48 py-2 ">${element.name.toUpperCase()}</td>
        <td class="px-4 w-48 py-2">${element.date}</td>
        <td class="px-4 w-64 py-2">৳${element.result}</td>
        <td class="px-4 py-2">
          ${element.description}
        </td>
      </tr>`;
    mobile_log.innerHTML += `
     <div
      class="flex flex-col justify-evenly p-6 w-74 h-64 border-1 border-gray-200 rounded-xl space-y-1"
    >
      <p class=" "><span class="font-bold">Name : </span>${element.name.toUpperCase()}</p>
      <p class=""><span class="font-bold">Fund : </span>${element.result}</p>
      <p class=""><span class="font-bold">Date : </span>${element.date}</p>
      <p class="">
        <span class="font-bold">Description :</span> ${element.description}
      </p>
    </div>`;
  });
}
information();
