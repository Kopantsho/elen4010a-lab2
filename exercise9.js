let students = [{
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
}, {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
}, {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
}, {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
}]

let deleteStudent = function(student, student_array) {

    let index = 0
    index = student_array.findIndex(function(element) {
        return element.name === student.name &&
            element.studentNumber === student.studentNumber &&
            element.yearOfStudy === student.yearOfStudy
    })

    if (index != -1) {
        student_array.splice(index, 1)
        return student_array
    } else {
        return student_array
    }
}

const modifiedArray = deleteStudent({
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
}, students)

console.log(modifiedArray)