function checkForGeneratedNumbers() {
    if (document.getElementsByClassName("index").item(0) != null) {
        makeTheTableWhite();
        var searching_number = parseInt(document.getElementById("searchingNumber").value);
        // alert(the_array);
        if (!isNaN(searching_number)) {
            var position = linearSearch(the_array, searching_number);
        } else {
            showSnackBar("Please <strong>Specify a Number</strong> for search");
        }
    } else {
        showSnackBar("You have to <strong>Generate Numbers</strong> first");
    }
}

function linearSearch(searching_array, asked_number) {
    var i = 0;
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