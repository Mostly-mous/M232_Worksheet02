/**
 * Worksheet 2, exercise 3
 */
const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

function groupByGrade (studentGrades) {
    if (studentGrades.grade >= 90) {
        const feedback = "Excellent Job " + studentGrades.name + ", you got an a!";
        return feedback;
    } else if (studentGrades.grade >= 80 && studentGrades.grade < 90) {
        const feedback = "Nice Job " + studentGrades.name + ", you got an b!";
        return feedback;
    } else if (studentGrades.grade >= 70 && studentGrades.grade < 80) {
        const feedback = "Well done " + studentGrades.name + ", you got an c!";
        return feedback;
    } else if (studentGrades.grade >= 60 && studentGrades.grade < 70) {
        const feedback = "What happened " + studentGrades.name + ", you got an d!";
        return feedback;
    } else {
        const feedback = "Not good " + studentGrades.name + ", you got an f!";
        return feedback;
    }
};

const mapByGrade = studentGrades.map(groupByGrade);

const studentFeedback = studentGrades.reduce(mapByGrade, {});