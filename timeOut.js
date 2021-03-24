//modda kotha of this code is timeout means print ones after the given time
                      //time-interval print continuous after the given time

function doSomething() {
    console.log(3333);
}
console.log(2222);

//doSomething();

//setTimeout(doSomething,/*timeinterval*/5000) ;

/*setTimeout(function () {
    console.log("Hey vaya")
}, 5000);
*/


// setTimeout(()=> {             //()=>  arrow function
//     console.log("Hey vaya")
// }, 5000);

setInterval(() => {
    console.log('Doing this');   //for stop ctrl + c
}, 2000);

console.log(4444);