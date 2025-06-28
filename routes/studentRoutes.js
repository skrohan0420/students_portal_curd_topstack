express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', (req, res) => {
    res.send('Students route is working');
});

router.get('/list', studentController.studentList);

module.exports = router;
