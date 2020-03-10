const fs = require('fs');
const Task =  require('./task');

class TaskController {
    static async checkID(req, res, next) {
        if (req.params.id * 1 > tasks.length){
            return res.status(404).json({
                status: 'fail',
                message: 'Invalid ID'
            });
        }
        next();
    };

    static async getAllTasks (req, res) {
        try {
            const tasks = await Task.find();

            res.status(200).json({
                status: 'success',
                results: tasks.length,
                data: {
                    tasks
                }
            });
        } catch(err) {
            res.status(404).json({
                status: 'fail',
                message: err.message
            });
        }
    };

    static async createTask (req, res)  {
        try {
            console.log(req.body);
            res.status(201).json({
                status: 'success',
                data: {
                    tasks:"saved"
                }
            });
        }catch(err) {
            res.status(404).json({
                status: 'fail',
                message: err
            });
        }
    };


    static async getTasks (req, res)  {
        try {
            const tasks = await Tasks.findById (req.params.id);

            res.status(200).json({
                status: 'success',
                data: {
                    tasks
                }
            });
        }catch(err) {
            res.status(404).json({
                status: 'fail',
                message: err
            });
        }
    };

     static async updateTask (req, res)  {
        try{

            const tasks = await Task.findByIdAndUpdate(req.params.id, req.body,{
                new: true
            })
            res.status(200).json({
                status: 'success',
                data: {
                    tasks
                }
            });
        }catch(err) {
            res.status(404).json({
                status: 'fail',
                message: err

            });
        }
    };
     static async deleteTask (req, res) {
        try{

            await Tasks.findByIdAndDelete(req.params.id);
            res.status(201).json({
                status: 'success',
                data: null
            });
        }catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err

            });
        }
    }
}
 module.exports = TaskController;