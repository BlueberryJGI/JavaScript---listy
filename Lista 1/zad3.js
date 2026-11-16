const assert = require('assert').strict;

function maskEmail(email){
    if (typeof email !== "string"){
        return "Invalid type of input";
    } else if (!email.includes('@')){
        return "Not an email format";
    }
    const firstChar = email[0];
    const whereAt = email.indexOf('@');

    return firstChar + '*'.repeat(whereAt - 2) + email.slice(whereAt - 1);
}

let email = 'myMail@mail.com';

console.log(maskEmail(email));

// testy funkcji
assert.strictEqual(maskEmail(1),"Invalid type of input");
assert.strictEqual(maskEmail("1234"), "Not an email format");
assert.strictEqual(maskEmail('testmail@mail.com'), 't******l@mail.com');
console.log("all tests passed");