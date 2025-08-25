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
async function calculate() {
  const response = await fetch("/calculate");
  const { ContributionSummary, MealSummary } = await response.json();
  let totalMeal = 0;
  let totalCont = 0;
  for (const name in ContributionSummary) {
    totalMeal += ContributionSummary[name].result;
    totalCont += MealSummary[name].total;
  }
  console.log(totalMeal, totalCont);
  const tbody = document.getElementById("table-body");
}
calculate();
