const assert = require('assert').strict;
const lunches = [];
function addLunchToEnd(array, string){
    if (!Array.isArray(array)){
        console.log("wrong input type, first parameter should be array");
        return 0;
    }
    if (typeof string !== 'string'){
        console.log("wrong input type, second parameter should be string");
        return 0;
    }
    array.push(string);
    console.log(string + " added to the end of the lunch menu.");
    return array;
}

function addLunchToStart(array, string){
    if (!Array.isArray(array)){
        console.log("wrong input type, first parameter should be array");
        return 0;
    }
    if (typeof string !== 'string'){
        console.log("wrong input type, second parameter should be string");
        return 0;
    }
    array.unshift(string);
    console.log(string + " added to the start of the lunch menu.");
    return array;
}

function removeLastLunch(array){
    if (!Array.isArray(array)){
        console.log("wrong input type, first parameter should be array");
        return 0;
    }    
    if (array.length === 0){
        console.log("No lunches to remove.");
        return 0;
    }
    const removed = array.pop();
    console.log(removed + " removed from the end of the lunch menu.");
    return array;
}

function removeFirstLunch(array){
    if (!Array.isArray(array)){
        console.log("wrong input type, first parameter should be array");
        return 0;
    }        
    if (array.length === 0){
        console.log("No lunches to remove.");
        return 0;
    }
    const removed = array.shift();
    console.log(removed + " removed from the start of the lunch menu.");
    return array;
}

function getRandomLunch(array){
    if (!Array.isArray(array)){
        console.log("wrong input type, first parameter should be array");
        return 0;
    }        
    if (array.length === 0){
        console.log("No lunches available.")
        return 2;
    }
    const randomLunch = array[Math.round(Math.random() * array.length)];
    console.log("Randomly selected lunch: " + randomLunch);
    return 1;
}

function showLunchMenu(array){
    if (!Array.isArray(array)){
        console.log("wrong input type, first parameter should be array");
        return 0;
    }        
    if (array.length === 0){
        console.log("The menu is empty.");
        return 2;
    }
    console.log("Menu items: " + array.join(", "));
    return 1;
}

// testy funkcji
// test funkcji addLunchToEnd
assert.deepEqual(addLunchToEnd(lunches, 'zupa pomidorowa'), ['zupa pomidorowa']);
assert.strictEqual(addLunchToEnd('pomidorowa', lunches), 0);
assert.strictEqual(addLunchToEnd(lunches, lunches), 0);

// test funkcji addLunchToStart
assert.deepEqual(addLunchToStart(lunches, 'rosol'), ['rosol', 'zupa pomidorowa']);
assert.strictEqual(addLunchToStart('pomidorowa', lunches), 0);
assert.strictEqual(addLunchToStart(lunches, lunches), 0);

// test funkcji getRandomLunch
assert.strictEqual(getRandomLunch(lunches), 1);
assert.strictEqual(getRandomLunch('lunches'), 0);

// test funkcji showLunchMenu
assert.strictEqual(showLunchMenu(lunches), 1);
assert.strictEqual(showLunchMenu('lunches'), 0);

// test funkcji removeLastLunch
assert.deepEqual(removeLastLunch(lunches), ['rosol']);
assert.strictEqual(removeLastLunch('lunch'), 0);

// test funkcji removeFirstLunch
assert.deepEqual(removeFirstLunch(lunches), []);
assert.strictEqual(removeFirstLunch('lunches'), 0);
assert.strictEqual(removeFirstLunch(lunches), 0);

// ponownie remove LastLunch
assert.strictEqual(removeLastLunch(lunches), 0);
// ponownie getRandomLunch
assert.strictEqual(getRandomLunch(lunches), 2);
// ponownie showLunchMenu
assert.strictEqual(showLunchMenu(lunches), 2);

console.log('\nall tests passed')