const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    { 
        name: {
            type: String,
            trim: true,
            maxlength: [15, 'Name cannot exceed 15 characters'],
        },
        className: {
            type: String,
            trim: true,
            maxlength: [10, 'Class name cannot exceed 10 characters'],
        },
        roll: {
            type: Number,
            required: [true, 'Roll number is required'],
            unique: true,
            min: [1, 'Roll number must be at least 1'],
        },
    },
    { timestamps: true }
);

const studentModel = mongoose.model('students', studentSchema);

module.exports = {
    studentModel,
};
