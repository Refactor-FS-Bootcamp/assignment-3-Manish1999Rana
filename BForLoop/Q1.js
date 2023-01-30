function sum(arr){
    let red=0;
    for(let i=0;i<arr.length;i++){
        red+=arr[i];
    }
    return red;
}
let arr_1=[3,5,22,5,7,2,45,75,89,21,2];
let arr_2=[9,2,42,55,71,22,4,5,90,25,26];
console.log(sum(arr_1)+"+"+sum(arr_2)+"="+(sum(arr_1)+sum(arr_2)));