var historyVar = 1

function rollEm() {
    var quant = parseInt(document.getElementById("quantity").value);
    var dice = parseInt(document.getElementById("dice").value);
    var mod = parseInt(document.getElementById("mod").value);
    // event.preventDefault();
    if ((document.getElementById("dice").value) === "other") {
        console.log("other")
    } else if (isNaN(quant) || isNaN(dice)) {
        alert("Fill out all fields");
    } else {
        document.getElementById("result").innerHTML = "";
        document.getElementById("rolling").innerHTML = "";
        document.getElementById("diceRolls").innerHTML = "";
        var rollTotal = 0
        document.getElementById("rolling").append("Rolling " + quant + " d" + dice + " + " + mod);
        document.getElementById("result").innerHTML = "<hr>"
        for (var i = 0; i < quant; i++) {
            var rollRaw = Math.floor((Math.random()) * dice) + 1;
            document.getElementById("diceRolls").append(" -" + rollRaw + "- ");
            // document.createElement("br");
            console.log("Die " + (i + 1) + ":" + rollRaw);
            rollTotal = rollTotal + rollRaw;
        }

        console.clear();
        console.log("TOTAL: " + rollTotal);
        console.log("quant " + quant);
        console.log("dice " + dice);
        console.log("mod " + mod);
        document.getElementById("result").append("TOTAL: " + parseInt(rollTotal + mod));
        document.getElementById("history").prepend("Roll-" + historyVar + ":" + parseInt(rollTotal + mod));
        historyVar++
    }
}