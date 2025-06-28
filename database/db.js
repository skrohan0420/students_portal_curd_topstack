const mongoose = require('mongoose');


const mongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://BecGbWLy2urBa0gE:BecGbWLy2urBa0gE@rohan.baf7f9w.mongodb.net/students_portal?retryWrites=true&w=majority");
        console.log('---- DB Connected ----');
    } catch (error) {
        console.error('---- DB Connection Error ----', error.message);
    }
};

module.exports = mongoDB;
