function Check(n){
    for(count=0;n>=1;n/=10){
        count++;
    }
    return count;
}
console.log(Check(999));