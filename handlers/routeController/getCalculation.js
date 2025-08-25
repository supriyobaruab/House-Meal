async function getCalculation(req, res) {
  try {
    res.render("calculate");
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = getCalculation;
