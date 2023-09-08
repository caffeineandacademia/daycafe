let attempts = 5;
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
    return Math.floor(expectedCustomers + (Math.random() * 50 - 25)); // +/- 25 variance for unpredictability
}

function checkPrediction() {
    if (attempts > 0) {
        let predictedCustomers = parseInt(document.getElementById("predictedCustomers").value);
        let supplies = parseInt(document.getElementById("supplies").value);
        actualCustomers = generateActualCustomers();

        let feedbackMessage = "";
        if (supplies === actualCustomers) {
            feedbackMessage = "Just Right!";
        } else if (supplies < actualCustomers) {
            feedbackMessage = "Shortage! ";
        } else {
            feedbackMessage = "Oversupplied! ";
        }
        feedbackMessage += "The actual customers were " + actualCustomers + ".";
        document.getElementById("feedback").textContent = feedbackMessage;

        // Adding attempt history to the table
        let historyTableBody = document.getElementById("historyTableBody");
        let newRow = historyTableBody.insertRow();
        newRow.insertCell().textContent = 5 - attempts + 1; // Attempt Number
        newRow.insertCell().textContent = predictedCustomers;
        newRow.insertCell().textContent = actualCustomers;
        newRow.insertCell().textContent = actualCustomers - predictedCustomers;

        attempts--;
        document.getElementById("remainingAttempts").textContent = attempts;
    } else {
        document.getElementById("feedback").textContent = "You've exhausted all attempts!";
        document.getElementById("predictedCustomers").disabled = true;
        document.getElementById("supplies").disabled = true;
    }
}
