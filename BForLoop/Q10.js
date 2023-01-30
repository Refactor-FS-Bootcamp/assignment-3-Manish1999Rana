let n=2;
let n2=8;
function check(n){
    let sum=0;
    let a="";
    for(let i=1;i<=n;i++){
        sum+=i;
        a=a+i;
        if(i<n)
        a=a+"+";
    }
    return (a+"="+sum);
}
console.log(check(n));
console.log(check(n2));