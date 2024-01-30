const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength:50
    },
    completed: {
        type: Boolean
    }
},
 {
    timestamps: true
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;