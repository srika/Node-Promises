
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

var removeTheGarbage = function(message){
    return new Promise(function(resolve, reject){
        var isRemoved = true;
        if(isRemoved){
            resolve(message + 'The Garbage is removed.')
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
            resolve(message + 'You won the ice-cream.')
        }
        else{
            reject('you lost the ice-cream.')
        }
    })
}

// Chaining of Promise calling
cleanTheRoom().then(function(result){
    return removeTheGarbage(result)
}).then(function(result){
    return winTheIceCream(result)
}).then(function(result){
    console.log(result)
}).catch(function(error){
    console.log('OOPS!! You boke the Promises ' + error);
})