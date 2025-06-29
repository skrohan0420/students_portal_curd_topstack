express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', (req, res) => {
    res.send('Students route is working');
});

router.post('/add',  studentController.addStudent);
router.get('/get/:id', studentController.getStudent);   
router.get('/list', studentController.studentList);
router.put('/update/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;
