const SNACKBAR_TIME_OUT = 3000;
const MAX_INPUT_LENGTH = 4;

// Showing a message with this android like snackbar

function showSnackBar(message) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = message;
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, SNACKBAR_TIME_OUT);
}

// Clearing only the cells that has background colors

function makeTheTableWhite() {
    for (var i = 0; i < the_array.length; i++) {
        let cell = document.querySelector(`[cell_id='${i}']`).style.backgroundColor;
        if (cell.length > 0 && cell !== "white") {
            console.log("Clearing "+i+" cell");
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "white";
        }
    }
}

// Allow only numbers on input

function onlyNumbersOnInput() {
    if (isNumber(parseInt(this.value))) {
        if (this.value.length > MAX_INPUT_LENGTH) {
            this.value = this.value.slice(0, MAX_INPUT_LENGTH);
        }
    } else {
        this.value = this.value.slice(0, 0);
    }
}

// Check a value if is number

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Add event listeners

document.getElementById("arraySize").addEventListener("input", onlyNumbersOnInput);
document.getElementById("numbersRange").addEventListener("input", onlyNumbersOnInput);
document.getElementById("searchingNumber").addEventListener("input", onlyNumbersOnInput);