express = require('express');
const app = express();
const studentsRoutes = require('./routes/studentRoutes');
const mongoDB = require('./database/db');

mongoDB();

app.get('/', (req, res) => {
    res.send('Server is running on http://localhost:8080');
});


app.use('/students', studentsRoutes);


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});