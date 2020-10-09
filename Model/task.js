const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    _id:            ObjectIdSchema,
    taskTitle:  String,
    taskType: {
        type: String,
        enum : ['Feature', 'Subtask','Enhancement','Bug', 'Task'],
        default: 'Feature'
    },
    taskDescription: String,
    taskAcceptanceCriteria:   String,
    taskStatus: String,
    taskStartDate:   String,
    taskDueDate: String,
    taskOriginalEstimate:   String,
    taskAssignee: String,
    taskReporter:   String
});
module.exports = mongoose.model("task",taskSchema);