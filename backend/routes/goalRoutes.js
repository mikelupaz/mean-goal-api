const express = require("express");

const router = express.Router();

const {
  getGoals,
  addGoals,
  updateGoals,
  deleteGoals,
  searchGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(addGoals);
router.route("/:id").delete(deleteGoals).put(updateGoals);
router.get("/search", searchGoals);
module.exports = router;
