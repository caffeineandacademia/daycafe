let attempts = 3;
let actualCustomers;

const BASE_CUSTOMERS = 100;
const RATIO = 0.1;

function initialize() {
    document.getElementById("twoMonthsAgo").textContent = "350";
    document.getElementById("lastMonth").textContent = "400";
    document.getElementById("residents").textContent = "3000";
}

function generateActualCustomers() {
    // Generate a random number of customers around our prediction
    let residents = parseInt(document.getElementById("residents").textContent);
    let expectedCustomers = BASE_CUSTOMERS + RATIO * residents;
    return Math.floor(expectedCustomers + (Math.random() * 50 - 25)); // +/- 25 variance
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
