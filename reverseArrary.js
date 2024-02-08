function reverseArr(arr){
    let len = arr.length;
    let array=[];

    for(let repeat=len-1; repeat >= 0; repeat--){
        array.push(arr[repeat]);
    }

    return array;
}

console.log(reverseArr(['orange','apple','mango','jackFruit','banana','pineapple','apple']));