function CSum(n){
    for(count=0;n>=1;n/=10){
        count+=parseInt(n%10);
    }
    return count;
}
console.log(CSum(999));