let str3="racecar";
let str4="java";
function check(str3){
    let a="string2 palindrome?\n";
    let res="Yes";
    for(let i=0;i<str3.length/2;i++){
        if(str3[i]!=str3[str3.length-1-i]){
            res="No";
            break;
        }
    }
    return (a+res);
}
console.log(check(str3));
console.log(check(str4));