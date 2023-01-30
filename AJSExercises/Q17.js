function binary(arr,n){
    let start=0;
    let end=arr.length-1;
    return search(arr,n,start,end);
}
function search(arr,n,start,end){
    let mid=parseInt((start+end)/2);
    if(arr[mid]==n)
    return mid;
    else{
        if(start<end){
            if(arr[mid]>n)
            return search(arr,n,start,mid-1);
            else
            return search(arr,n,mid+1,end);
        }
        else
        return -1;
    }
}
console.log(binary([2,3,4,5,7,8,34,67],67));