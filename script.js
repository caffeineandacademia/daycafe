let attempts = 5;
let actualCustomers;

const BASE_CUSTOMERS = 100;
const RATIO = 0.1;

function initialize() {
    // ... Previous initialization code ...
}

function generateActualCustomers() {
    // ... Previous logic ...
}

function checkPrediction() {
    if (attempts > 0) {
        let predictedCustomers = document.getElementById("predictedCustomers").value;
        let supplies = document.getElementById("supplies").value;
        actualCustomers = generateActualCustomers();
        
        // Adding attempt history
        let historyTableBody = document.getElementById("historyTableBody");
        let newRow = historyTableBody.insertRow();
        newRow.insertCell().textContent = 5 - attempts + 1; // Attempt Number
        newRow.insertCell().textContent = predictedCustomers;
        newRow.insertCell().textContent = actualCustomers;
        newRow.insertCell().textContent = actualCustomers - predictedCustomers;

        // ... Rest of the checkPrediction function ...

        attempts--;
        document.getElementById("remainingAttempts").textContent = attempts;
    } else {
        document.getElementById("feedback").textContent = "You've exhausted all attempts!";
        document.getElementById("predictedCustomers").disabled = true;
        document.getElementById("supplies").disabled = true;
    }
}
