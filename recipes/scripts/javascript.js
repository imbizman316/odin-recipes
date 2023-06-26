







// function add7(num) {
//     return num + 7;
// }

// function multiply(num1,num2) {
//     return num1 * num2;
// }

// function capitalize(word) {
//     return word.toUpperCase();
// }

// function lastLetter(string) {
//     return string[string.length-1];
// }

// console.log(add7(8));
// console.log(multiply(32,90));
// console.log(capitalize("mikey is a mike"));
// console.log(lastLetter("holla"));

// let answer = parseInt(prompt("Please enter the number you would like to FizzFuzz."))
// let fizzfuzz = []

// for (let i =1; i <= answer; i++){

//     if (i % 3 === 0 && i % 5 === 0) {fizzfuzz.push("FizzFuzz");}
//     else if (i % 3 === 0) {fizzfuzz.push("Fizz");}
//     else if (i % 5 === 0) {fizzfuzz.push("Fuzz");}
//     else {fizzfuzz.push(i);}
// }

// console.log(fizzfuzz);


// //write a program that returns 3rd highest number.
// var num_list = [10,9,7,8,4,3,5]
// let max = 0;
// let new_list = [];
// //first I need to iterate through the list.
// //I put the first number as max. and compare it to each number.
// //if a number is bigger than that, it becomes the largest number.
// let index = 0;

// for (let i = 0; i <= 2; i++) {

//     for (let i = 0; i < num_list.length; i++) {
//         console.log(num_list[i])
//         console.log(num_list);
//         if (num_list[i] > max) {
//             max = num_list[i];
//             index = i;
//         };
//     }
//     //after each loop I get rid of the max from num_list and add it to another list.
//     console.log("max number is " + max);
//     new_list.push(max);
//     //and get rid of it from num_list
//     num_list.splice(index,1);
//     console.log(num_list);
    
// }

// //now that I know the biggest, I delete it from the list.
// //and repeat the same process, two more times to get the 3rd highest number.
// console.log(new_list);
// console.log(num_list);