var myArgs = parseInt(process.argv[2]);

function getRandomInt() {
 return Math.floor(Math.random() * 6 ) + 1;
}

function rollDice(num) {
 var rolled = '';
 rolled = 'Rolled ' + num + ' dice: '
 for (var i = 0; i < num; i++) {
   rolled += getRandomInt().toString();
   rolled = rolled + ", ";
 }
 return rolled;
}

console.log(rollDice(myArgs));