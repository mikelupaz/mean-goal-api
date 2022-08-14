const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200);
  res.json({ data: goals });
});

const addGoals = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("title is required");
  }

  const goals = await Goal.create({
    title: req.body.title,
    description: req.body.description || "",
  });

  res.status(201);
  res.json({ data: goals });
});

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    res.json({ message: "Goal not found" });
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200);
  res.json({ data: updatedGoal });
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    res.json({ message: "Goal not found" });
  }

  await goal.remove();

  //   const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  res.status(200);
  res.json({ data: req.params.id });
});

const searchGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find({
    title: { $regex: `^${req.body.title}.*`, $options: "si" },
  });

  res.status(200);
  res.json({ data: goal });
});

module.exports = {
  getGoals,
  addGoals,
  updateGoals,
  deleteGoals,
  searchGoals,
};
