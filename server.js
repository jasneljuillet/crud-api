const express = require('express');
const app = express();

const PORT = 4500 || process.env.PORT;
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));