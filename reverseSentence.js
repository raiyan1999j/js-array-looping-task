function reverseSentence(content){
    const textArr = content.split(" ");
    const len = textArr.length;
    const arr =[];

    for(let repeat=len-1; repeat >=0; repeat--){
        arr.push(textArr[repeat])
    }

    return arr.join(" ");
}

console.log(reverseSentence('I am a hard working person'));