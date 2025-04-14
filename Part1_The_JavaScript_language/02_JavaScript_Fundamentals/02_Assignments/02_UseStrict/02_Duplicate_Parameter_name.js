/* ############# Without use strict #############*/ 

// parameters are a, a, b : Two params are same name
// function addNumbers(a, a, b){
//     sum = a+a+b;
//     console.log("Sum of nums : ", sum);
// }

// addNumbers(5, 5, 6); //16

/* ############# With use strict #############*/ 

//ERROR : SyntaxError: Duplicate parameter name not allowed in this context

'use strict'
function addNumbers(a, a, b){
    sum = a+a+b;
    console.log("Sum of nums : ", sum);
}

addNumbers(5, 5, 6); //SyntaxError: Duplicate parameter name not allowed in this context