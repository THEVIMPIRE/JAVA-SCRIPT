const accountId = 144553
let accountEmail = "rohit@gmail.com"
var accountPassword ="12345"
accountCity ="bihar"
let accountState;

//accountId = 2// not allowed
console.log(accountId);

accountEmail = "hitesh@gmail.com"
aacountPassword = "23478"
accountCity = "up"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([ accountId , accountEmail, accountPassword, accountCity ,accountState])