var express = require('express');
var router = express.Router();
var toDo = require('../model/todo');

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
     
/* Retrieve todos */
router.get('/read', asyncMiddleware( async ( req, res, next ) => {
    res.json(await toDo.find({}));
}));

/* Create a new todo */
router.post("/create", asyncMiddleware( async ( req, res, next ) => {
    let todo = new toDo({ task: req.body.task, status: false });
    res.json(await todo.save());
}));
     
/* Update a todo */
router.put('/update', asyncMiddleware( async ( req, res, next ) => {
    res.json(await toDo.findOneAndUpdate({ _id: req.body.params._id }, { $set: { status: req.body.params.status } }, { new: true }));
}));

/* Delete a todo */
router.delete('/delete', asyncMiddleware( async ( req, res, next ) => {
    res.json(await toDo.findOneAndRemove({ _id: req.query._id }));
}));

module.exports = router;
