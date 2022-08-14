const asyncHandlre = require("express-async-handler");

const getGoals = asyncHandlre(async (req, res) => {
  res.status(200);
  res.json({ message: "Get goals" });
});

const addGoals = asyncHandlre(async (req, res) => {
  console.log(req.body);
  if (!req.body.title) {
    res.status(400);
    throw new Error("title is required");
  }
  res.status(201);
  res.json({ message: "set goals" });
});

const updateGoals = asyncHandlre(async (req, res) => {
  res.status(200);
  res.json({ message: `Update goal ${req.params.id}` });
});

const deleteGoals = asyncHandlre(async (req, res) => {
  res.status(200);
  res.json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  addGoals,
  updateGoals,
  deleteGoals,
};
