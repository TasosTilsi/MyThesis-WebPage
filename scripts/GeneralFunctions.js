const SNACKBAR_TIME_OUT = 3000;
const MAX_INPUT_LENGTH = 4;

var searching_number;
var searching_profile;
var only_at_next_search_run;

// Checking for generated numbers and doing the selected search

function checkForGeneratedNumbers() {
    // If there are generated numbers
    if (document.getElementsByClassName("index").item(0) != null) {
        // Clearing the backgound colors if there is any
        if (only_at_next_search_run) {
            makeTheTableWhite();
            only_at_next_search_run = false;
        }
        // Getting the searching number
        searching_number = parseInt(document.getElementById("searchingNumber").value);
        if (!isNaN(searching_number)) {
            if (searching_number <= the_array[the_array.length - 1]) {
                // If is number do the search
                enableStepButtons();
                if (searching_profile === "linear") {
                    linearSearch(the_array, searching_number);
                } else if (searching_profile === "binary") {
                    binarySearch(the_array, searching_number);
                } else if (searching_profile === "jump") {
                    jumpSearch(the_array, searching_number);
                } else if (searching_profile === "interpolation") {
                    interpolationSearch(the_array, searching_number);
                } else if (searching_profile === "exponential") {
                    exponentialSearch(the_array, searching_number);
                } else if (searching_profile === "fibonacci") {
                    fibonacciSearch(the_array, searching_number);
                }
                /*else if (searching_profile === "stratos") {

                           }*/

            } else {
                document.getElementById("pause").click();
                showSnackBar("Please <strong>Specify a Number</strong> within the <strong>Numbers Range</strong>");
            }
        } else {
            // Show this message
            showSnackBar("Please <strong>Specify a Number</strong> for search");
        }
    } else {
        // Show this message
        showSnackBar("You have to <strong>Generate Numbers</strong> first");
    }
}

function runTheSearch() {
    if (document.getElementById("searchingNumber").value.length > 0) {
        intervalHandle = setInterval(() => {
            checkForGeneratedNumbers();
        }, intervalSpeed);
    } else {
        checkForGeneratedNumbers();
    }
}

function resetSearches() {
    document.getElementById("pause").click();
    document.getElementById("searchingNumber").disabled = false;
    first_time_run_linear = true;
    first_time_run_binary = true;
    first_time_run_jump = true;
    first_time_run_inter = true;
    first_time_run_expo = true;
    first_time_run_bin = true; // comes with expo
    first_time_run_fib = true;
}

// Enable Step Buttons only if a search button clicked

function enableStepButtons() {
    if (searching_profile !== undefined) {
        //document.getElementById("undo").disabled = false;
        document.getElementById("pause").disabled = false;
        document.getElementById("next").disabled = false;
        document.getElementById("skipForward").disabled = false;
    }
}

// Showing a message with this android like snackbar

function showSnackBar(message) {
    let x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = message;
    console.log("SnackBar Shows");
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, SNACKBAR_TIME_OUT);
}

// Clearing only the cells that has background colors

function makeTheTableWhite() {
    for (let i = 0; i < the_array.length; i++) {
        let cell = document.querySelector(`[cell_id='${i}']`).style.backgroundColor;
        if (cell.length > 0 && cell !== "white") {
            console.log("Clearing " + i + " cell");
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