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

        // Adding attempt history
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
