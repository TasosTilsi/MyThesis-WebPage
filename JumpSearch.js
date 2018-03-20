function checkForGeneratedNumbers() {
    if (document.getElementsByClassName("index").item(0) != null) {
        makeTheTableWhite();
        var searching_number = parseInt(document.getElementById("searchingNumber").value);
        if (!isNaN(searching_number)) {
            var position = jumpSearch(the_array, searching_number);
        } else {
            showSnackBar("Please <strong>Specify a Number</strong> for search");
        }
    } else {
        showSnackBar("You have to <strong>Generate Numbers</strong> first");
    }
}

function jumpSearch(searching_array, asked_number) {
    //Finding the array size
    let size = searching_array.length;
    // Finding block size to be jumped
    let step = Math.floor(Math.sqrt(size));
    document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "lightblue";

    // Finding the block where element is present (if it is present)
    let previous = 0;
    document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "orange";

    let handle = setInterval(function () {
        if (searching_array[Math.min(step, size) - 1] < asked_number) {
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "white";
            previous = step;
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "orange";

            if (step < size) {
                document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "white";
                step = Math.min(step + Math.floor(Math.sqrt(size)), size-1);
                document.querySelector("[cell_id='" + (step) + "']").style.backgroundColor = "lightblue";
            }
            if (previous > size) {
                clearInterval(handle);
                console.log("The number you searched for is not in the generated array!");
                showSnackBar("The number you searched for is not in the generated array!");
                return -1;
            }
        }

        let LinearHandle = setInterval(function () {
            if (searching_array[previous] < asked_number) {
                document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "white";
                previous++;
                document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "orange";
                if (previous == size) {
                    clearInterval(handle);
                    console.log("The number you searched for is not in the generated array!!!");
                    showSnackBar("The number you searched for is not in the generated array!");
                    return -1
                }
            }
        }, 500);

        if (searching_array[previous] == asked_number) {
            clearInterval(handle);
            document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "lightgreen";
            console.log("The number you searched found in position " + previous);
            showSnackBar("The number you searched found in position " + previous);
            return previous;
        }
    }, 750);
}

document.getElementById("jumpSearch").addEventListener("click", checkForGeneratedNumbers);