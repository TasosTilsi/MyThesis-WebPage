var handle;

function checkForGeneratedNumbers() {
    if (document.getElementsByClassName("index").item(0) != null) {
        makeTheTableWhite();
        var searching_number = parseInt(document.getElementById("searchingNumber").value);
        if (!isNaN(searching_number)) {
            handle = setInterval(jumpSearch(the_array, searching_number), 750);
        } else {
            showSnackBar("Please <strong>Specify a Number</strong> for search");
        }
    } else {
        showSnackBar("You have to <strong>Generate Numbers</strong> first");
    }
}

function jumpSearch(arrayToSearch, valueToSearch) {
    let length = arrayToSearch.length;
    let step = Math.floor(Math.sqrt(length));
    document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "orange";
    let index = Math.min(step, length) - 1;
    let lowerBound = 0;
    document.querySelector("[cell_id='" + (lowerBound) + "']").style.backgroundColor = "orange";
    while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
        document.querySelector("[cell_id='" + (lowerBound) + "']").style.backgroundColor = "white";
        lowerBound = step;
        document.querySelector("[cell_id='" + (lowerBound) + "']").style.backgroundColor = "orange";
        document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "white";
        step += step;
        document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "orange";
        if (lowerBound >= length) {
            clearInterval(handle);
            showSnackBar("The number you searched for is not in the generated array!");
            return -1;
        }
    }

    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch) {
        document.querySelector("[cell_id='" + (lowerBound) + "']").style.backgroundColor = "white";
        lowerBound++;
        document.querySelector("[cell_id='" + (lowerBound) + "']").style.backgroundColor = "orange";
        if (lowerBound == upperBound) {
            clearInterval(handle);
            showSnackBar("The number you searched for is not in the generated array!");
            return -1;
        }
    }
    if (arrayToSearch[lowerBound] == valueToSearch) {
        clearInterval(handle);
        document.querySelector("[cell_id='" + (lowerBound) + "']").style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + lowerBound);
        return lowerBound;
    }
    clearInterval(handle);
    showSnackBar("The number you searched for is not in the generated array!");
    return -1;
}

/*function jumpSearch(searching_array, asked_number) {
    //Finding the array size
    let size = searching_array.length;
    // Finding block size to be jumped
    let step = Math.floor(Math.sqrt(size));
    document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "orange";

    // Finding the block where element is present (if it is present)
    let previous = 0;
    document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "orange";

    let handle = setInterval(function () {
        if (searching_array[Math.min(step, size) - 1] < asked_number) {
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "white";
            previous = step;
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "orange";

            document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "white";
            step += Math.floor(Math.sqrt(size));
            document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "orange";

            if (previous >= size) {
                clearInterval(handle);
                showSnackBar("The number you searched for is not in the generated array!");
                return -1;
            }
        }

        if (searching_array[previous] < asked_number) {
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "white";
            previous++;
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "orange";
            if (previous == Math.min(step, size)) {
                clearInterval(handle);
                showSnackBar("The number you searched for is not in the generated array!");
                return -1
            }
        }

        if (searching_array[previous] == asked_number) {
            clearInterval(handle);
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + previous);
            return previous;
        }

        clearInterval(handle);
        showSnackBar("The number you searched for is not in the generated array!");
        return -1;
    }, 750);
}*/

document.getElementById("jumpSearch").addEventListener("click", checkForGeneratedNumbers);