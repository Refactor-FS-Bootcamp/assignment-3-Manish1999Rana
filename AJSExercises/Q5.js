for(let i=0;i<10;i++){
    setTimeout(function (){displey(i)},1000*i)
}
function displey(i){
    console.log("This message appears after "+i+" seconds of execution.")
}
