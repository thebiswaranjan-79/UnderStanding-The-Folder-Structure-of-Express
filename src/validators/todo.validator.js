function createTodoValidator(req, res, next){ // It is kind of a Middleware 
    if(!req.body.todoText){
        return res.json({msg : ' Invalid Request '})
    }
    // if u are sending everything request
    next();
}

module.exports = {
    createTodoValidator
}