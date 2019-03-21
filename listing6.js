let student = {
    name: 'Kwezi',
    studentNumber: 453528
}

console.log(student)

console.log(`${student.name}'s student numnber is ${student.studentNumber}`)

const addAge = function(theStudent, age) {
    theStudent.age = age
}

addAge(student, 20)

console.log(student.age)