let a=[];
a[1]=0;
a[2]=1;
function fabo(n){
    if(typeof(a[n])=="undefined"){
        a[n]=fabo(n-1)+fabo(n-2);
    }
    return a[n];
}
console.log(fabo(6));