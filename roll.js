function rollEm() {
    var quant = parseInt(document.getElementById("quantity").value);
    var dice = parseInt(document.getElementById("dice").value);
    var mod = parseInt(document.getElementById("mod").value);
    // event.preventDefault();
    if (isNaN(quant) || isNaN(dice) || isNaN(mod)) {
        alert("Fill out all fields");
    } else {
        var rollTotal = 0
        for (var i = 0; i < quant; i++) {
            var rollRaw = Math.floor((Math.random()) * dice) + 1
            console.log("Die " + (i + 1) + ":" + rollRaw);
            rollTotal = rollTotal + rollRaw
        };
        console.log("TOTAL: " + rollTotal);
        console.log("quant " + quant);
        console.log("dice " + dice);
        console.log("mod " + mod);
    }
}