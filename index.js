// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push (name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function appendCat(name){
    const copy = cats.slice()
    copy.push(name) 
    return copy 
}

function removeLastCat(name){
    const copy = cats.slice()
    copy.pop(name)
    return copy
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function prependCat(name){
    const copy = cats.slice()
    copy.unshift(name)
    return copy
}

function removeFirstCat(name){
    const copy =cats.slice()
    copy.shift(name)
    return copy
}

