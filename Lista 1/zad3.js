function maskEmail(email){
    const firstChar = email[0];
    const whereAt = email.indexOf('@');
    return firstChar + '*'.repeat(whereAt - 2) + email.slice(whereAt - 1);
}

let email = '275264@student.pwr.edu.pl';

console.log(maskEmail(email));

// testy funkcji