const express = require('express');
const app = express();
const user = require('./api/users/');
const post = require('./api/post/');

app.get('/', (req, res) => res.json({ succes: true }));

// user endpoint
app.post('/api/users', user.create);
app.get('/api/users', user.findAll);
app.put('/api/users', user.update);
app.delete('/api/users', user.delete);


// post endpoint
app.post('/api/post', post.create);
app.get('/api/post', post.findAll);
app.put('/api/post', post.update);
app.delete('/api/post', post.delete);

const PORT = 4500 || process.env.PORT;
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));