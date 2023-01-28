function deleteElement(arr,e){
    let res=arr.toString().split(",");
    let a=[];
    let j=0;
    if(typeof(arr[0])=="number"){
        for(let i=0;i<res.length;i++){
            if(res[i]==e)
            continue;
            else{
                a[j++]=parseInt(res[i]);
            }
        }
    }
    else{
        for(let i=0;i<res.length;i++){
            if(res[i]==e)
            continue;
            else{
                a[j++]=res[i];
            }
        }
    }
    console.log(a)
}
deleteElement(["2","5","3","2","32"],2);
deleteElement(["2","5","3","2","32"],"2");
deleteElement([2,5,3,2,32],"2");
deleteElement([2,5,3,2,32],2);
