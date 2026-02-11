import fs from "fs"

function addLog(req, res) {
  try {
    const { date, activity, caloriesBurned } = req.body;

    if (!date || !activity || caloriesBurned <= 0) {
      throw new Error("Invalid Data");
    }

    req.user.logs.push({ date, activity, caloriesBurned });
    res.send("Log Added");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export default addLog