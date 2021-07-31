const express = require('express');
const app = express();
const user = require('./api/users/');

app.get('/', (req, res) => res.json({ succes: true }));

// user endpoint
app.get('/api/users', user.findAll);
app.post('/api/users', user.create);
app.delete('/api/users/', user.delete);
app.put('/api/users/', user.update);

const PORT = 4500 || process.env.PORT;
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));