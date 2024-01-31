//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  

let questionOne = document.getElementById("questionOne");
let questionTwo = document.getElementById("questionTwo");
let questionThree = document.getElementById("questionThree");
let questionFour = document.getElementById("questionFour");
let questionFive = document.getElementById("questionFive");
let questionFiveB = document.getElementById("questionFiveB");
let extraCredit1 = document.getElementById("extraCredit1");
let extraCredit2 = document.getElementById("extraCredit2");

let count;

const getData = async () => {
    const promise = await fetch(`../data/quizdata.json`);
    const data = await promise.json();
    console.log(data.People);
    // return data.People;

    answerOne(data.People);
    answerTwo(data.People);
    answerThree(data.People);
    answerFour(data.People);
    answerFive(data.People);
    answerFiveB(data.People);
    extraCreditOne(data.People);
    extraCreditTwo(data.People);
}
getData();

const answerOne = data => {
    count = 0;
    
    data.map(person => {
        if(person.age > 19 && person.age < 30){
            count++;
        }
    });

    questionOne.textContent = `There are ${count} people that are in their 20s.`;
}

const answerTwo = data => {
    count = 0;

    data.map(person => {
        if(person.Active == true){
            count++;
        }
    });

    questionTwo.textContent = `There are ${count} people that are active.`;
}

const answerThree = data => {
    count = 0;

    data.map(person => {
        if(parseInt(person.height) < 72){
            count++;
        }
    });

    questionThree.textContent = `There are ${count} people that are shorter than 6'0".`
}

const answerFour = data => {
    const answerFourData = data.findIndex(person => parseInt(person.height) > 56);

    console.log(answerFourData);
    console.log(data[0].name);

    questionFour.textContent = `The first person in this array that is taller than 56 inches is ${data[0].name}.`;
}

const answerFive = data => {
    const answerFiveData = data.every(person => person.name.length > 15);
    
    console.log(`Question 5 is ${answerFiveData}.`);

    questionFive.textContent = `No, not everyone in this list has a name that is greater than 15 characters long.`;
}

const answerFiveB = data => {
    const answerFiveBData = data.every(person => parseInt(person.height) > 50);

    console.log(`Question 5b is ${answerFiveBData}.`);

    questionFiveB.textContent = "No, not everyone is taller than 50 inches tall.";
}

const extraCreditOne = data => {
    const sortedArray = data.map(person => person.name).sort();

    console.log(sortedArray);

    extraCredit1.textContent = `The new array sorted by first name is: ${sortedArray.join(", ")}.`;
}

const extraCreditTwo = data => {
    const sortedArrayTwo = data.map(person => person.name.split(" ").reverse().join(" ")).sort();

    console.log(sortedArrayTwo);

    extraCredit2.textContent = `The new array sorted by last name is: ${sortedArrayTwo.join(", ")}.`;
}