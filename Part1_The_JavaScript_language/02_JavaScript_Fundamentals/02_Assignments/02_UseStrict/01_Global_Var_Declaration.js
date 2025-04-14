
/* ############# Without use strict #############*/ 
/*
// declare function
function showMessage(){
    message = "Hello, Joshi"
}

//function call
showMessage();

//access message variable from function
console.log("Message : ", message); //Message :  Hello, Joshi
*/

/* ############# With use strict #############*/ 

'use strict'

function showMessage(){
    message = "Hello, Joshi"
}

showMessage();

console.log("Message : ", message); //ReferenceError: message is not defined
