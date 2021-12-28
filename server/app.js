const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded( bodyparser.urlencoded({ extended: true }) ));

const db = require('./queries');

app.get('/', (req, res) => res.send('Hello Everyone'));
app.get('/users', db.getUsers);
app.get('/user/:id', db.getUserById);
app.post('/user', db.createUser)
app.put('/user/:id', db.updateUser)
app.delete('/user/:id', db.deleteUser)

app.listen(port, () => console.log(`server is running on port ${port}`));





