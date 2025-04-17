const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({
        message: "Server is running"
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})