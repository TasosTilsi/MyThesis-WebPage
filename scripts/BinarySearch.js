var first_time_run_binary = true;
var firstIndex;
var lastIndex;
var middleIndex;

function binarySearch(searching_array, asked_number) {
    if (first_time_run_binary) {
        firstIndex = 0;
        document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightblue";
        lastIndex = searching_array.length - 1;
        document.querySelector(`[cell_id='${lastIndex}']`).style.backgroundColor = "lightblue";
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";
        first_time_run_binary = false;
    }

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
        console.log(`firstIndex = '${firstIndex}', lastIndex = '${lastIndex}', middleIndex = '${middleIndex}'`);
        //if(lastIndex-firstIndex === 1 && (lastIndex < 4 || lastIndex > searching_array.length-10)){
        //   middleIndex = Math.ceil((lastIndex + firstIndex) / 2);
        //}else{
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        //}

        document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";
    }

    if (searching_array[middleIndex] === asked_number) {
        document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + middleIndex);
        only_at_next_search_run = true;
        first_time_run_binary = true;
        document.getElementById("pause").click();
        return middleIndex;
    }
    /*if (searching_array[firstIndex] === asked_number) {
        document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + firstIndex);
        only_at_next_search_run = true;
        first_time_run_binary = true;
        document.getElementById("pause").click();
        return firstIndex;
    }
    if (searching_array[lastIndex] === asked_number) {
        document.querySelector(`[cell_id='${lastIndex}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + lastIndex);
        only_at_next_search_run = true;
        first_time_run_binary = true;
        document.getElementById("pause").click();
        return lastIndex;
    }*/
    if ((lastIndex === firstIndex ||
        firstIndex === middleIndex ||
        lastIndex === middleIndex) &&
        (searching_array[middleIndex] !== asked_number &&
            (searching_array[firstIndex] > asked_number && searching_array[firstIndex] !== asked_number) &&
            (searching_array[lastIndex] < asked_number && searching_array[lastIndex] !== asked_number))) {
        showSnackBar("The number you searched for is not in the generated array!");
        document.getElementById("pause").click();
        first_time_run_binary = true;
        only_at_next_search_run = true;
        return -1;
    }
}

// Add event listener

document.getElementById("binarySearch").addEventListener("click", () => {
    showTheManual(manual.BinarySearch.title, manual.BinarySearch.message);
    document.getElementById("pause").click();
    console.log("Binary Search Button Clicked");
    searching_profile = "binary";
    let number = parseInt(document.getElementById("searchingNumber").value);
    if (!isNaN(number)) {
        if (searching_number <= the_array[the_array.length - 1]) {
            if (first_time_run_binary) {
                makeTheTableWhite();
                firstIndex = 0;
                document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightblue";
                lastIndex = the_array.length - 1;
                document.querySelector(`[cell_id='${lastIndex}']`).style.backgroundColor = "lightblue";
                middleIndex = Math.floor((lastIndex + firstIndex) / 2);
                document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";
            }
        } else {
            showSnackBar("Please <strong>Specify a Number</strong> within the <strong>Numbers Range</strong>");
            document.getElementById("pause").click();
        }
    } else {
        // Show this message
        showSnackBar("Please <strong>Specify a Number</strong> for search");
    }
    runTheSearch();
});