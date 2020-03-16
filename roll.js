rollDice(20, 1)

function rollDice(dice, mod) {
    var roll = (Math.floor((Math.random() * dice) + 1) + mod);
    console.log(roll)
    var total = roll + mod;
    console.log("flat: " + roll);
    console.log("total: " + total);

}