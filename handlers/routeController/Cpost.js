const mongoose = require("mongoose");
const contribution = require("../../schema/contributionSchema");

async function Cpost(req, res) {
  try {
    const { name, result, description } = req.body;
    console.log(description);
    const created = await contribution.create({
      name,
      result,
      date: new Date().toLocaleDateString("en-GB"),
      description: description,
    });
    console.log(created);
    res.json(created);
  } catch (error) {
    console.error("Error saving to DB:", error.message);
    res.status(500).send(error.message);
  }
}

module.exports = Cpost;
