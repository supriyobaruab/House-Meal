const load = document.getElementById("load");
const summary = document.getElementById("summary");

async function loading() {
  load.classList.remove("hidden");
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("/calculate");
    load.classList.add("hidden");
    summary.classList.remove("hidden");
  } catch (error) {}
}
loading();
