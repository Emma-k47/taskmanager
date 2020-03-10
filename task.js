const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'A user name is required']
    },
    password:{
        type: String,
        required: [true, 'A password is required']
    },
    createdAt: {
      type: Date,
      default: Date.now()

    },
    email:{
        type: String,
        required: [true, 'An email is required']
    }

});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;