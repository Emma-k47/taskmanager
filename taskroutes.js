const express = require("express");
const TaskController = require("./taskController");

const router = express.Router();
router.param('id', TaskController.checkID);

router
  .route("/")
  .get(TaskController.getAllTasks)
  .post(TaskController.createTask);

router
  .route("/:id")
  .get(TaskController.getTask)
  .patch(TaskController.updateTask)
  .delete(TaskController.deleteTask);

module.exports = router;
