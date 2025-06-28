

const studentList = async (req, res) => {


    const students = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ];
    res.status(200).json(students);



    
}




module.exports = {
    studentList
}
