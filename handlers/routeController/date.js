function entry() {
  const date = new Date();
  const dateStrap = date.toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
  });
  const month = dateStrap.split(" ")[0];
  const year = dateStrap.split(" ")[1];
  const together = `${month}` + "_" + `${year}`;
  return together;
}
module.exports = entry;
