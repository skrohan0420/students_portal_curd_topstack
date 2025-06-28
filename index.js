express = require('express');
const app = express();
const studentsRoutes = require('./routes/studentRoutes');
const mongoDB = require('./database/db');

mongoDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 


app.get('/', (req, res) => {
    res.send('Server is running on http://localhost:4000');
});


app.use('/students', studentsRoutes);


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});