function power(a,b){
    let pro=1;
    for(let i=0;i<b;i++){
        pro*=a;
    }
    return pro;
}
console.log(power(2,4));