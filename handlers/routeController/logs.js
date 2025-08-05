const contribution = require("../../schema/contributionSchema");
async function logs(req, res) {
  try {
    const data = await contribution.find().sort({_id : -1});
    res.json({data});
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = logs;
