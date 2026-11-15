const lunches = [];
function addLunchToEnd(array, string){
    array.push(string);
    console.log(string + " added to the end of the lunch menu.");
    return array;
}

function addLunchToStart(array, string){
    array.unshift(string);
    console.log(string + " added to the start of the lunch menu.");
    return array;
}

function removeLastLunch(array){
    if (array.length === 0){
        console.log("No lunches to remove.");
        return;
    }
    const removed = array.pop();
    console.log(removed + " removed from the end of the lunch menu.");
    return array;
}

function removeFirstLunch(array){
    if (array.length === 0){
        console.log("No lunches to remove.");
        return;
    }
    const removed = array.shift();
    console.log(removed + " removed from the start of the lunch menu.");
    return array;
}

function getRandomLunch(array){
    if (array.length === 0){
        console.log("No lunches available.")
        return;
    }
    const randomLunch = array[Math.round(Math.random() * array.length)];
    console.log("Randomly selected lunch: " + randomLunch);
}

function showLunchMenu(array){
    if (array.length === 0){
        console.log("The menu is empty.");
        return;
    }
    console.log("Menu items: " + array.join(", "));
}

// testy funkcji