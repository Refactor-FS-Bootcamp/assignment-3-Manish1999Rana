function fibo(n){
    let a=[];
    a[1]=0;
    a[2]=1;
    function fabo(n){
        if(typeof(a[n])=="undefined"){
            a[n]=fabo(n-1)+fabo(n-2);
            console.log(a[n]);
        }
        return a[n];
    }
    console.log(a[1]);
    console.log(a[2]);
    if(n>2)
        fabo(n);
}
   fibo(40);