function printEvenInArray(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0)
        console.log(arr[i]);
    }
}
let arr=[3,5,6,7,4,5,7,54,34];
printEvenInArray(arr);