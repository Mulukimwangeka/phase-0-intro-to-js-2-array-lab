// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");
}


function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    let newCatOrder = [...cats, "Broom"];
    return newCatOrder;
    
}

function prependCat(){
    let newCatOrder = ["Arnold", ...cats];
    return newCatOrder;
}

function removeLastCat(){
    return cats.slice(0, -1);
    
    
}

function removeFirstCat(){
    return cats.slice(1);
}
