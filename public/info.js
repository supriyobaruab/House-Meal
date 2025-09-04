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
  class="group grid grid-cols-2 gap-x-4 gap-y-2 p-8 w-78 h-54  border border-gray-200 rounded-xl shadow-md transition-all active:h-64 duration-300 "
>
  <div class="font-bold text-gray-500">Name :</div>
  <div class = "font-bold text-blue-700">${capitalizeFirst(element.name)}</div>

  <div class="font-bold text-gray-500">Fund :</div>
  <div class="text-green-800 font-bold">${element.result}৳</div>

  <div class="font-bold text-gray-500">Date :</div>
  <div>${element.date}</div>

  <div class="font-bold text-gray-500">Description :</div>
  <div class="truncate group-transition-all group-hover:whitespace-normal group-hover:break-words duration-300">${
    element.description
  }</div>
</div>`;
  });
}
information();
function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
