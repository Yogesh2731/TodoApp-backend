const todoModel = require('../models/ToDoModels');


//read todo
module.exports.getTodo = async (req, res) =>{
    const toDo = await todoModel.find()
    res.send(toDo);
}


//creat todo
module.exports.saveTodo = async (req,res) => {
    const {Title} = req.body
    todoModel.create({Title})
    .then((data) =>{
        console.log("Data Added successfully");
        //console.log(data);
        res.send(data);
    })
}

//updte todo
module.exports.updateTodo = async (req, res) => {
    const {_id, Title} = req.body
    todoModel.findByIdAndUpdate(_id, {Title})
    .then(() =>{
        res.set(201).send("Todo Updated Successfully")
    })
    .catch((err) => console.log(err)); 
}

//delete todo
module.exports.deleteTodo = async(req, res) => {
    const {_id} = req.body
    todoModel.findByIdAndDelete(_id)
    .then(() =>{
        res.send("Deleted Successfully");
    })
    .catch((err) => console.log(err));
}









