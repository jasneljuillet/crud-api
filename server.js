const express = require('express');
const app = express();


app.get('/', (req, res) => res.json({ succes: true }));

// user endpoint
app.get('/api/users', require('./api/users').findAll);
app.post('/api/users', require('./api/users').create);


const PORT = 4500 || process.env.PORT;
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));