const people = require("../../schema/peopleSchema");
const contribution = require("../../schema/contributionSchema");

async function remove(req, res) {
  try {
    await Promise.all([people.deleteMany({}), contribution.deleteMany({})]);
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = remove;
