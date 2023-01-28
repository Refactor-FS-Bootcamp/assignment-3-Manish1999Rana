function arrMax(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
console.log(arrMax([45,3,34,-54,6,44,6,8]));