function print2DArray(arr){
for(let i=0;i<arr.length;i++){
    let a="";
    for(let j=0;j<arr[i].length;j++){
        a=a+arr[i][j]+"    ";
    }
    console.log(a);
}
}
let arr=[[1,4,5],[4,6,3]];
print2DArray(arr);