function arrayToString(arr){
    let text ="";

    for(let repeat of arr){
        text +=repeat;
    }

    return text;
}

console.log(arrayToString(['Tom','Tim','Tin','Ton']));