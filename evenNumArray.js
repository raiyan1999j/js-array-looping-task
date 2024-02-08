function evenNumber(arr){
    let array =[];

    for(let repeat of arr){
        if(repeat % 2 === 0){
            array.push(repeat)
        }
    }

    return array;
}

console.log(evenNumber([12, 98, 5, 41, 23, 78, 46]));