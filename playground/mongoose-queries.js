const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '5b33ca8c01aa7e5f962a778911';
var userId = '5b33ce6777c654f5e8e2b435';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}



// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) =>{
    if (!user) {
        return console.log('No users by that ID');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));
