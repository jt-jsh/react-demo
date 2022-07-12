const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', ( req, res ) => {
    const data = {
        lastname: '승현',
        firstname: '조'
    };
    res.json(data);
});

app.listen( PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});