document.addEventListener("DOMContentLoaded", function() {
    // Get the input field and buttons
    const inputField = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button");

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.innerText;

            // AC (All Clear) logic
            if (buttonText === "AC") {
                inputField.value = "";
            }

            // Clear last character logic
            else if (buttonText === "clr") {
                inputField.value = inputField.value.slice(0, -1);
            }

            // Plus-Minus logic
            else if (buttonText === "+/-") {
                inputField.value = eval(inputField.value * -1);
            }

            // Multiplication logic
            else if (buttonText === "x") {
                inputField.value += "*";
            }

            // Equals (=) logic
            else if (buttonText === "=") {
                try {
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = "Error";
                }
            }

            // Handle other buttons
            else {
                inputField.value += buttonText;
            }
        });
    });
});