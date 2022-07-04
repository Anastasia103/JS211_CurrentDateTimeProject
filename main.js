// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:


const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = () => {
let num = 15;
let text= num.toString()

document.getElementById("display-element2").innerHTML = (`The typeof ${text} is ${typeof text}`)
}
// Write a JavaScript program to convert a string to the number.
const stringNumber = () => {
let num = 15  
let text= parseInt(num)
document.getElementById("display-element3").innerHTML = (`The typeof ${text} is ${typeof text}`)



} 


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const dataTypeLocator = () => {
    let stat1 = Boolean (10 >10)
    let stat2 = null
    let stat3 
    let stat4 = parseInt(26)
    let stat5 = Math.sqrt()
    let stat6 = "hello"
    document.getElementById("display-element8").innerHTML = (`${stat1} is ${typeof stat1},${stat2} is ${typeof stat2},${stat3} is ${typeof stat3}, ${stat4} is ${typeof stat4}, ${stat5} is ${typeof stat5}, ${stat6} is ${typeof stat6}`)
    
  }
  

  
// Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers = () => {
  let num1 = parseInt(10)
  let num2 = parseInt(15)
  let sum = num1 + num2
  document.getElementById("display-element4").innerHTML = (`The sum of ${num1} and ${num2} is ${sum}`)
  
}


// Write a JavaScript program that runs only when 2 things are true.
const twoTrue = () => {
  let stat1 =  40 > 10
  let stat2 = 20 > 10
  if (stat1 === true && stat2 === true) {
  document.getElementById("display-element5").innerHTML = (`Both statements are true`);
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = () => {
  let stat1 =  Boolean (9> 10)
  let stat2 = Boolean(30 > 10)
  if (stat1 === true || stat2 === true) {
  document.getElementById("display-element6").innerHTML = (`One of these statements is true`);
  }
}



// Write a JavaScript program that runs when both things are not true.  
const noneTrue = () => {
  let stat1 =  Boolean (9> 10)
  let stat2 = Boolean(7 > 10)
  if (stat1 === false && stat2 === false) {
  document.getElementById("display-element7").innerHTML = (`Both of these statements are false`);
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
