function draw(b){
    for(let k=1;k<=b;k+=2){
        let a="";
        let c="";
        for(i=((b+1)-k)/2;i>=1;i--){
            a=a+" ";
        }
        for(j=1;j<=k;j++){
            c=c+"*";
        }
        console.log(a,c)
   }
}
draw(20);