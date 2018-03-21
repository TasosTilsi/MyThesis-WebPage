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
            var position = linearSearch(the_array, searching_number);
        } else {
            // Show this message
            showSnackBar("Please <strong>Specify a Number</strong> for search");
        }
    } else {
        // Show this message
        showSnackBar("You have to <strong>Generate Numbers</strong> first");
    }
}

function linearSearch(searching_array, asked_number) {
    // Setting the step
    var i = 0;
    // Doing an interval loop
    let handle = setInterval(function () {
        if (i < searching_array.length) {
            document.querySelector("[cell_id='" + Math.max(i - 1, 0) + "']").style.backgroundColor = "white";
            if (searching_array[i] == asked_number) {
                document.querySelector("[cell_id='" + i + "']").style.backgroundColor = "lightgreen";
                clearInterval(handle);
                showSnackBar("The number you searched found in position " + i);
                return i;
            } else if (asked_number < searching_array[i + 1]) {
                document.querySelector("[cell_id='" + (i) + "']").style.backgroundColor = "orange";
                document.querySelector("[cell_id='" + (i+1) + "']").style.backgroundColor = "lightblue";
                showSnackBar("The number you searched for is not in the generated array!");
                clearInterval(handle);
                return -1;
            } else if (searching_array.length - 1 == i) {
                //document.querySelector("[cell_id='" + (searching_array.length - 1) + "']").style.backgroundColor = "white";
                showSnackBar("The number you searched for is not in the generated array!");
                clearInterval(handle);
                return -1;
            } else {
                document.querySelector("[cell_id='" + (i) + "']").style.backgroundColor = "orange";
                i++;
            }
        }

    }, 500);
}

document.getElementById("linearSearch").addEventListener("click", checkForGeneratedNumbers);