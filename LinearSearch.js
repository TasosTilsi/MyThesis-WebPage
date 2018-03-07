function checkForGeneratedNumbers() {
    if (document.getElementsByClassName("index").item(0) != null) {
        var searching_number = parseInt(document.getElementById("searchingNumber").value);
        // alert(the_array);
        if (!isNaN(searching_number)) {
            doTheSearch(the_array, searching_number);
        } else {
            showSnackBar("Please <strong>Specify a Number</strong> for search");
        }
    } else {
        showSnackBar("You have to <strong>Generate Numbers</strong> first");
    }
}

function doTheSearch(searching_array, asked_number) {
    // var cell_ids = document.querySelectorAll("[cell_id]");
    // var cell_value = cell_ids[0].getElementsByClassName("value").item(0).innerHTML;
    for (var i = 0; i < parseInt(searching_array.length); i++) {
        if (searching_array[i] == asked_number) {
            document.querySelector("[cell_id='" + i + "']").style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + i.toString());
            return i;
        }
    }
    return -1;
}

document.getElementById("linearSearch").addEventListener("click", checkForGeneratedNumbers);