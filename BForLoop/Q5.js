let str1="javascript";
let str=[];
for(let i=0;i<str1.length;i++){
    if(i%2==1)
    str[i]='Z';
    else
    str[i]=str1[i];
    
}
let res=str.toString().replaceAll(",","");
console.log(res);