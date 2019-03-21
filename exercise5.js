let course = {
    courseCode: 'ELEN4010'
}

let course_two = {
    courseCode: 'ELEN3010'
}

let course_three = {
    courseCode: 'ELEN7010'
}

const addYearOffered = function(theCourse) {

    const fourth = '40'
    const second = '20'
    const third = '30'
    const first = '10'

    if (theCourse.courseCode.includes(fourth)) {
        theCourse.year = fourth[0]

    } else if (theCourse.courseCode.includes(third)) {
        theCourse.year = third[0]

    } else if (theCourse.courseCode.includes(second)) {
        theCourse.year = second[0]

    } else if (theCourse.courseCode.includes(first)) {
        theCourse.year = first[0]

    } else {
        theCourse.year = NULL
    }
}

const printYearOffered = function(theCourse) {
    console.log(`${theCourse.courseCode} is offered in year ${theCourse.year}`)
}

addYearOffered(course)
printYearOffered(course)
addYearOffered(course_two)
addYearOffered(course_three)

//test for other forms of issues 4020, 4010, 3040 etc.