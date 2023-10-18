const accountId = 14432
let accoutEmail = "vaibhav@gmail.com"
var accountpswd = "123455"
accountCity = "Nagpur"
let accountState; //it will give undefined as a value
//accountId = 23 // not allowed as accountId is constant and we cant change it.
console.log(accountId);

//this will give all the entered variables in tabular form.
console.table([accountId, accoutEmail, accountpswd, accountCity, accountState])

//avoid to use 'var' because of issue in block scope and fuctional scope.