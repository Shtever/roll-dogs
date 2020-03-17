function rollEm() {
    var quant = parseInt(document.getElementById("quantity").value);
    var dice = parseInt(document.getElementById("dice").value);
    var mod = parseInt(document.getElementById("mod").value);
    // event.preventDefault();
    if (isNaN(quant) || isNaN(dice) || isNaN(mod)) {
        alert("Fill out all fields");
    } else {
        var rollRaw = Math.floor((Math.random()) * dice) + 1
        // TO DO 'rollRaw' x 'quant' number of times
        console.log("quant " + quant);
        console.log("dice " + dice);
        console.log("mod " + mod);
        console.log("raw: " + rollRaw);
        console.log("total: " + rollRaw);
    }
}