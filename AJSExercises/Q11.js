function checkZero(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr[i].length);j++){
            if(arr[i][j]==0)
            count++;
        }
    }
    return count;
}
console.log(checkZero([[2,1,3],[5,0,4],[0,4,2]]))