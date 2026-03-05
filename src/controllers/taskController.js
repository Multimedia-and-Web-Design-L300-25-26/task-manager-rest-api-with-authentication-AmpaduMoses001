import Task from "../models/Task.js";

/* CREATE TASK */
export const createTask = async (req, res) => {
  try {

    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      owner: req.user._id 
    });

    res.status(201).json(task);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


/* GET USER TASKS */
export const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({ owner: req.user._id });

    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* DELETE TASK */
export const deleteTask = async (req, res) => {
  try {

    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};