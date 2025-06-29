const studentModel = require('../models/studentModel').studentModel;



const addStudent = async (req, res) => {
    const {name , className, roll} = req.body;
    if (!name || !className || !roll) {
        return res.status(400).json({ message: 'All fields are required' });
    }


    try {
        const newStudent = new studentModel({ name, className, roll });
        await newStudent.save();
        res.status(201).json({status: true, message: 'Student added successfully', student: newStudent });
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({status: false, message: 'Internal server error' });
    }

};


const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, className, roll } = req.body;

    if (!name || !className || !roll) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const updatedStudent = await studentModel.findByIdAndUpdate(id, { name, className, roll }, { new: true });
        
        if (!updatedStudent) {
            return res.status(404).json({status: false, message: 'Student not found' });
        }
        res.status(200).json({status: true, message: 'Student updated successfully', student: updatedStudent });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({status: false, message: 'Internal server error' });
    }
};



const studentList = async (req, res) => {
    try {
        const students = await studentModel.find();
        res.status(200).json({status: true, message: 'Student list retrieved successfully', students });
    } catch (error) {
        console.error('Error retrieving student list:', error);
        res.status(500).json({status: false, message: 'Internal server error' });
    }
}


const getStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await studentModel.findById(id);
        if (!student) {
            return res.status(404).json({status: false, message: 'Student not found' });
        }
        res.status(200).json({status: true, message: 'Student retrieved successfully', student });
    } catch (error) {
        console.error('Error retrieving student:', error);
        res.status(500).json({status: false, message: 'Internal server error' });
    }
};

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await studentModel.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({status: false, message: 'Student not found' });
        }
        res.status(200).json({status: true, message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({status: false, message: 'Internal server error' });
    }
};




module.exports = {
    addStudent,
    studentList,
    getStudent,
    deleteStudent,
    updateStudent
}
