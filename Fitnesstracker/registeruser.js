import fs from "fs"

function register(req, res) {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Name is required");

    users.push({
      name,
      dailyGoal: 2000,
      logs: []
    });

    res.send("User registered");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export default register
