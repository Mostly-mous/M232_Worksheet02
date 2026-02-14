/**
 * Worksheet 2, exercise 1
 */
//creating a consitent variable with a primitive Datatype
const imString = "This String cannot be overwritten."

//creating a consistent varibale containing an object with three items
const conObject = {
    Name: "Eliot",
    Age: 25,
    Birthday: "1998-07-13"
};

//Updating Object information ins consideration of immutability
const updateObject = {
    ...conObject,
    LastName: "Reed"
};

//testing
console.log(updateObject);

//chaning element after the consept of immutability
const updateObject2 = {
    ...conObject,
    Age: conObject.Age + 10
};

const updateObject3 = {
    ...updateObject,
    Name: "Ellen"
};

//testing
console.log(updateObject2);
console.log(updateObject3);

//removing element form object after consept of immutability
const {Birthday, ...updateObject4} = conObject;

//testing
console.log(updateObject4);