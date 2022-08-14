const express = require("express");

const router = express.Router();

const {
  getGoals,
  addGoals,
  updateGoals,
  deleteGoals,
  searchGoals,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, addGoals);
router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoals);
router.get("/search", protect, searchGoals);
module.exports = router;
