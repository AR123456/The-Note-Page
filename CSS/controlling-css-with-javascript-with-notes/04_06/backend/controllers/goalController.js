// @desc  Get goals
//@route GET /api.goals
//@access Private
const getGoals = (req, res) => {
  //
  res.status(200).json({ message: "Get Goals" });
};
// @desc  Set goals
//@route POST /api.goals
//@access Private
const setGoal = (req, res) => {
  // need some middleware to send body stuff- server.js
  // client error is a 400
  if (!req.body.text) {
    // one way to do
    // res.status(400).json({ message: "Please add text field" });
    // way using built in express error handler
    res.status(400);
    throw new Error("Please add text field");
  }
  console.log(req.body);
  res.status(200).json({ message: "Set Goals" });
};
// @desc  Update goals
//@route PUT /api.goals/:id
//@access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};
// @desc  Remove goals
//@route DELETE /api.goals
//@access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
