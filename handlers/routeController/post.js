const mongoose = require("mongoose");
const people = require("../../schema/peopleSchema");
const entry = require("./date");

async function post(req, res) {
  try {
    const { name, result } = req.body;

    const created = await people.create({
      name,
      total: result.total,
      today: result.today,
      lastDate: result.lastDate,
      submittedToday: result.submittedToday,
      entry: entry(),
    });

    console.log("Created:", created);
    res.json(created);
  } catch (error) {
    console.error("Error saving to DB:", error.message);
    res.status(500).send(error.message);
  }
}

module.exports = post;
