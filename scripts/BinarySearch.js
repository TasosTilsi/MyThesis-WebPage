let first_time_run_binary = true;
let firstIndex;
let lastIndex;
let middleIndex;

function binarySearch(searching_array, asked_number) {
    if (first_time_run_binary) {
        firstIndex = 0;
        document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightblue";
        lastIndex = searching_array.length;
        document.querySelector(`[cell_id='${Math.min(lastIndex, searching_array.length - 1)}']`).style.backgroundColor = "lightblue";
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";
        first_time_run_binary = false;
        checks = 1;
        getValuesforBinarySteps(firstIndex, lastIndex, middleIndex, false, checks);
        document.getElementById("searchingNumber").disabled = true;
    }

    if (searching_array[middleIndex] !== asked_number && firstIndex < lastIndex) {
        if (asked_number < searching_array[middleIndex]) {
            document.querySelector(`[cell_id='${Math.min(lastIndex, searching_array.length - 1)}']`).style.backgroundColor = "transparent";
            lastIndex = middleIndex - 1;
            checks++;
            document.querySelector(`[cell_id='${Math.min(lastIndex, searching_array.length - 1)}']`).style.backgroundColor = "lightblue";
        } else if (asked_number > searching_array[middleIndex]) {
            document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "transparent";
            firstIndex = middleIndex + 1;
            document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightblue";
            checks++;
        }
        document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "transparent";
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";
        getValuesforBinarySteps(firstIndex, lastIndex, middleIndex, false, checks);
        console.log(`firstIndex = '${firstIndex}', lastIndex = '${lastIndex}', middleIndex = '${middleIndex}'`);
    }

    if (searching_array[middleIndex] === asked_number) {
        document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "lightgreen";
        getValuesforBinarySteps(firstIndex, lastIndex, middleIndex, true, checks);
        showSnackBar("The number you searched found in position " + middleIndex);
        only_at_next_search_run = true;
        document.getElementById("searchingNumber").disabled = false;
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
        getValuesforBinarySteps(firstIndex, lastIndex, middleIndex, false, checks);
        showSnackBar("The number you searched for is not in the generated array!");
        document.getElementById("pause").click();
        first_time_run_binary = true;
        document.getElementById("searchingNumber").disabled = false;
        only_at_next_search_run = true;
        return -1;
    }

    if ((lastIndex === firstIndex &&
            firstIndex === middleIndex &&
            lastIndex === middleIndex) && searching_array[middleIndex] !== asked_number) {
        getValuesforBinarySteps(firstIndex, lastIndex, middleIndex, false, checks);
        showSnackBar("The number you searched for is not in the generated array!");
        document.getElementById("pause").click();
        first_time_run_binary = true;
        document.getElementById("searchingNumber").disabled = false;
        only_at_next_search_run = true;
        return -1;
    }
}

function getValuesforBinarySteps(l, r, m, found, checks) {
    let left = document.querySelector(`[cell_id='${l}']`);
    let right = document.querySelector(`[cell_id='${Math.min(r, the_array.length - 1)}']`);
    let middle = document.querySelector(`[cell_id='${m}']`);
    binaryDrawSteps(left, right, middle, found, checks);
}

// Add event listener

document.getElementById("binarySearch").addEventListener("click", () => {
    showTheManual(manual.BinarySearch.title, manual.BinarySearch.message);
    document.getElementById("pause").click();
    console.log("Binary Search Button Clicked");
    searching_profile = "binary";
    let number = parseInt(document.getElementById("searchingNumber").value);
    if (!isNaN(number)) {
        if (first_time_run_binary) {
            makeTheTableWhite();
            firstIndex = 0;
            document.querySelector(`[cell_id='${firstIndex}']`).style.backgroundColor = "lightblue";
            lastIndex = the_array.length;
            document.querySelector(`[cell_id='${Math.min(lastIndex, the_array.length - 1)}']`).style.backgroundColor = "lightblue";
            middleIndex = Math.floor((lastIndex + firstIndex) / 2);
            document.querySelector(`[cell_id='${middleIndex}']`).style.backgroundColor = "orange";
            checks = 1;
            getValuesforBinarySteps(firstIndex, lastIndex, middleIndex, false, checks);
        }
    } else {
        // Show this message
        showSnackBar("Please <strong>Specify a Number</strong> for search");
    }
    runTheSearch();
});