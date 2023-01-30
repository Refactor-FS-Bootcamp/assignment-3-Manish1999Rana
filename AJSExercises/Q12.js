function ProductArr(arr1,arr2){
    let arr=[];
    for(let i=0;i<arr1.length;i++){
        arr[i]=[];
        for(let j=0;j<arr2.length;j++){
            arr[i][j]=arr1[j]*arr2[i];
        }
        console.log(arr[i]);
    }
}
let a=[2,3,4];
let b=[1,2,3];
ProductArr(a,b);
