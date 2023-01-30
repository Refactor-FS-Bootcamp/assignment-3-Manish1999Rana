let n=0704;
a=prompt("Guess a no:","");
for(let i=0;i<4;i++)
if(a==n){
    alert("correct");
}
else{
    a=prompt("Incorrect.\nTry again")
}