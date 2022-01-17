const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`App listning on port ${PORT}`);
});