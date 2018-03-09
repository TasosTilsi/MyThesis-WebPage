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
    var i = 0;
    let handle = setInterval(function () {
        if (i < searching_array.length) {
			document.querySelector("[cell_id='" + Math.max(i-1,0) + "']").style.backgroundColor = "white";
            if (searching_array[i] == asked_number) {
                document.querySelector("[cell_id='" + i + "']").style.backgroundColor = "lightgreen";
                showSnackBar("The number you searched found in position " + i.toString());
                clearInterval(handle);
                return i;
            }
			document.querySelector("[cell_id='" + (i) + "']").style.backgroundColor = "orange";
            i++;
        }
        return -1;
    }, 500);
}

document.getElementById("linearSearch").addEventListener("click", checkForGeneratedNumbers);