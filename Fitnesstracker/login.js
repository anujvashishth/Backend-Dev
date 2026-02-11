import fs from "fs"
function login(req, res) {
  try {
    const { name } = req.body;

    const user = users.find(u => u.name === name);
    if (!user) throw new Error("Invalid User");

    const token = Date.now().toString();
    sessions[token] = user;

    res.json({ token });
  } catch (error) {
    res.status(401).send(error.message);
  }
}