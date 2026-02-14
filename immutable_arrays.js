/**
 * Worksheet 2, exercise 2
 */
//creating array with 2 object elements
const imArray = [
    {id: 1, name: "object1", describtion: "this is an object."},
    {id: 2, name: "object2", describtion: "this is a second object."}
];
//updating array while considering concept of immutability
const updateArray = [
    ...imArray,
    {id: 3, name: "object3", describtion: "this is a third object."}
];

//testing
console.log(imArray);
console.log(updateArray);

//changing element with map-method
const updateArray2 = updateArray.map(changeDescribtion);

function changeDescribtion(updateArray) {
    if (updateArray.id === 3) {
        return {...updateArray, describtion: "this is the changed description for the third object."};
    } return updateArray
};

//testing
console.log(updateArray2);

//removing objects with smallest identifier
const updateArray3 = updateArray.filter((object) => {
    return object.id != 1;
});

//testing
console.log(updateArray3);

//creating array with numbers
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const total = reviews.reduce((x, y) => x + y);
const avarage = total/reviews.length;

//testing
console.log(avarage);

//grouping array elements
const groupByNumber = (groups, reviews) => {
    const {good = 0, ok = 0, bad = 0} = groups;
    if (reviews >= 4) {
        return {...groups, good: good + 1};
    } else if (reviews >= 2.5) {
        return {...groups, ok: ok + 1};
    } else {
        return {...groups, bad: bad + 1};
    }
};

const groupNumbers = reviews.reduce(groupByNumber, {});

//testing
console.log(groupNumbers);