function receivesAFunction(callback) {
    callback()

}

function returnsANamedFunction (){

return function dogsDo(){
    console.log("Dogs are doing things")
}
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("Dogs are done")
    }

}