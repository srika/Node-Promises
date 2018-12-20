
//cleanTheRoom is a Asynchronous Function but not a variable
var cleanTheRoom = function(){
    return new Promise(function(resolve, reject){
        var isClean = true;
        if(isClean){
            resolve('The room is clean.')
        }
        else{
            reject('The room is not clean.')
        }
    })
}

var removeTheGarbage = function(){
    return new Promise(function(resolve, reject){
        var isRemoved = true;
        if(isRemoved){
            resolve('The Garbage is removed.')
        }
        else{
            reject('The Garbage is not removed.')
        }
    })
}

var winTheIceCream = function(message){
    return new Promise(function(resolve, reject){
        var youWon = true;
        if(youWon){
            resolve('You won the ice-cream.')
        }
        else{
            reject('you lost the ice-cream.')
        }
    })
}

/* Promise.all([cleanTheRoom(),removeTheGarbage(),winTheIceCream()])
.then(function(result){
    console.log('All of the promises are resolved.');
}).catch(function(result){
     console.log('One of the promise failed.');
})
*/

Promise.race([cleanTheRoom(),removeTheGarbage(),winTheIceCream()])
.then(function(result){
    console.log('One of them is resolved.');
}).catch(function(result){
    console.log('One of them is failed.');
})