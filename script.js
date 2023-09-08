let attempts = 3;
let actualCustomers;

function initialize() {
    document.getElementById("twoMonthsAgo").textContent = "350";
    document.getElementById("lastMonth").textContent = "400";
    document.getElementById("residents").textContent = "3000";
}

function generateActualCustomers() {
    // Generate a random number of customers between 300 and 500
    return Math.floor(Math.random() * (500 - 300 + 1)) + 300;
}

function checkPrediction() {
    if (attempts > 0) {
        let predictedCustomers = document.getElementById("predictedCustomers").value;
        let supplies = document.getElementById("supplies").value;
        actualCustomers = generateActualCustomers();

        if (predictedCustomers == actualCustomers && supplies == actualCustomers) {
            document.getElementById("feedback").textContent = "Just Right!";
        } else if (supplies < actualCustomers) {
            document.getElementById("feedback").textContent = "Shortage!";
        } else {
            document.getElementById("feedback").textContent = "Oversupplied!";
        }

        attempts--;
        document.getElementById("remainingAttempts").textContent = attempts;
    } else {
        document.getElementById("feedback").textContent = "You've exhausted all attempts!";
        document.getElementById("predictedCustomers").disabled = true;
        document.getElementById("supplies").disabled = true;
    }
}
