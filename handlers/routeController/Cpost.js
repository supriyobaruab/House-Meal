const mongoose = require("mongoose");
const contribution = require("../../schema/contributionSchema");
const entry = require("./date");

async function Cpost(req, res) {
  try {
    const { name, result, description, contributions } = req.body;
    console.log(description);
    const created = await contribution.create({
      name,
      result,
      date: new Date().toLocaleDateString("en-GB"),
      description: description,
      contributions: contributions,
      entry: entry(),
    });
    console.log(created);
    res.json(created);
  } catch (error) {
    console.error("Error saving to DB:", error.message);
    res.status(500).send(error.message);
  }
}

module.exports = Cpost;
