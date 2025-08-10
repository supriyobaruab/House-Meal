async function calculate(req, res) {
  try {
    res.render("calculate");
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = calculate;
