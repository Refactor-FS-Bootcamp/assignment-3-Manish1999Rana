let arr=[3,4,6,7,8,4,2];
let res=[];
let k=0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            res[k]=arr[i];
        }
    }
}
console.log(res)