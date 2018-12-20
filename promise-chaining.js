
var cleanTheRoom = new Promise(function(resolve, reject){
    var isClean = true;
    if(isClean){
        resolve('The room is clean.')
    }
    else{
        reject('The room is not clean.')
    }
})


var removeTheGarbage = new Promise(function(resolve, reject){
    var isRemoved = true;
    if(isRemoved){
        resolve('The Garbage is removed.')
    }
    else{
        reject('The Garbage is not removed.')
    }
})

var winTheIceCream = new Promise(function(resolve, reject){
    var youWon = true;
    if(youWon){
        resolve('You won the ice-cream.')
    }
    else{
        reject('you lost the ice-cream.')
    }
})

// Chaining of Promise calling
cleanTheRoom.then(function(result){
    console.log('CleanTheRoom Resolved: '+result);
    removeTheGarbage.then(function(result){
        console.log('RemoveTheGarbage Resolved: '+result);
        winTheIceCream.then(function(result){
            console.log('WinTheIceCream Resolved: '+result);
        }).catch(function(result){
            console.log('WinTheIceCream Rejected: '+result);
        })
    }).catch(function(result){
        console.log('RemoveTheGarbage Rejectied: '+result);
    })
}).catch(function(result){
    console.log('CleanTheRoom Rejectied: '+result);
})