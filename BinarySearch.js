//Runs on click

function checkForGeneratedNumbers() {
    // If there are generated numbers
    if (document.getElementsByClassName("index").item(0) != null) {
        // Clearing the backgound colors if there is any
        makeTheTableWhite();
        // Getting the searching number
        var searching_number = parseInt(document.getElementById("searchingNumber").value);
        if (!isNaN(searching_number)) {
            // If is number do the search
            var position = binarySearch(the_array, searching_number);
        } else {
            // Show this message
            showSnackBar("Please <strong>Specify a Number</strong> for search");
        }
    } else {
        // Show this message
        showSnackBar("You have to <strong>Generate Numbers</strong> first");
    }
}

function binarySearch(searching_array, asked_number) {
    let firstIndex = 0;
    document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightblue";
    let lastIndex = searching_array.length - 1;
    document.querySelector(`[cell_id='${lastIndex}']`).style.backgroundColor = "lightblue";
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";

    let handle = setInterval(function () {
        if (searching_array[middleIndex] !== asked_number && firstIndex < lastIndex) {
            if (asked_number < searching_array[middleIndex]) {
                document.querySelector(`[cell_id='${lastIndex}']`).style.backgroundColor = "white";
                lastIndex = middleIndex - 1;
                document.querySelector(`[cell_id='${lastIndex}']`).style.backgroundColor = "lightblue";
            } else if (asked_number > searching_array[middleIndex]) {
                document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "white";
                firstIndex = middleIndex + 1;
                document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightblue";
            }
            document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "white";
            middleIndex = Math.floor((lastIndex + firstIndex) / 2);
            document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";
        }
        if (searching_array[middleIndex] === asked_number) {
            document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "lightgreen";
            clearInterval(handle);
            showSnackBar("The number you searched found in position " + middleIndex);
            return middleIndex;
        }
        if (lastIndex === firstIndex &&
            firstIndex === middleIndex &&
            lastIndex === middleIndex &&
            (searching_array[middleIndex] !== asked_number ||
                (searching_array[firstIndex] > asked_number && searching_array[firstIndex] !== asked_number) ||
                (searching_array[lastIndex] < asked_number && searching_array[lastIndex] !== asked_number))) {
            showSnackBar("The number you searched for is not in the generated array!");
            clearInterval(handle);
            return -1;
        }
    }, 750);
}

// Add event listener

document.getElementById("binarySearch").addEventListener("click", checkForGeneratedNumbers);