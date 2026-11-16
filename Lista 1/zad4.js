const assert = require('assert').strict;
let count = 0;

function cardCounter(card){
    if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
        ++count;
    } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A"){
        --count;
    } else {
        return "Not valid input"
    }

    if (count > 0){
        return count + " Bet";
    }
    return count + " Hold";
}

// testy funkcji
assert.strictEqual(cardCounter(1), "Not valid input");
assert.strictEqual(cardCounter(undefined), "Not valid input");
assert.strictEqual(cardCounter(2), "1 Bet");
assert.strictEqual(cardCounter("J"), "0 Hold");
console.log("all tests passed");