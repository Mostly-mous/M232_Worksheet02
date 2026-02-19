/**
 * Worksheet 2, exercise 3
 */
const studentGrades = [
    { name: 'Joe', grade: 88 },
    { name: 'Jen', grade: 94 },
    { name: 'Steph', grade: 77 },
    { name: 'Allen', grade: 60 },
    { name: 'Gina', grade: 54 },
];

const giveFeedback = (createFeedback) => (student) => {
    const { name, grade } = student;
    const { message, letter } = createFeedback(grade);

    return `${message} ${name}, you got an ${letter}!`;
}
const createFeedback = (grade) => {
    if (grade >= 90) {
        return { message: "Excellent Job ", letter: "a" };
    } else if (grade >= 80) {
        return { message: "Nice Job ", letter: "b" };
    } else if (grade >= 70) {
        return { message: "Well done ", letter: "c" };
    } else if (grade >= 60) {
        return { message: "What happened ", letter: "d" };
    } else {
        return { message: "Not good ", letter: "f" };
    }
};

const studentFeedback = studentGrades.map(giveFeedback(createFeedback));

console.log(studentFeedback);