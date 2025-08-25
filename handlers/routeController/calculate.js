const contribution = require("../../schema/contributionSchema");
const people = require("../../schema/peopleSchema");
async function calculate(req, res) {
  try {
    let person = ["supriyo", "debongshi", "waly", "mahmud"];
    let MealSummary = {};
    let ContributionSummary = {};
    for (const name of person) {
      MealSummary[name] = await people
        .findOne({ name })
        .sort({ createdAt: -1 });
      ContributionSummary[name] = await contribution
        .findOne({ name })
        .sort({ createdAt: -1 });
    }
    res.json({ MealSummary, ContributionSummary });
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = calculate;
