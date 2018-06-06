var first_time_run_expo = true;
var expo_i;
var expo_size;
var mid;
var found_number;

function exponentialSearch(searching_array, asked_number) {

    if (first_time_run_expo) {
        expo_i = 1;
        mid = 0;
        document.querySelector(`[cell_id='${expo_i}']`).style.backgroundColor = "lightblue";
        expo_size = searching_array.length - 1;
        first_time_run_expo = false;
    }

    if (asked_number === searching_array[0]) {
        document.querySelector(`[cell_id='${0}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + 0);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        document.getElementById("pause").click();
        return 0;
    }

    //document.querySelector(`[cell_id='${expo_i}']`).style.backgroundColor = "white";

    if (expo_i < expo_size && searching_array[expo_i] <= asked_number) {
        expo_i = expo_i * 2;
    }
    console.log(`expo_i before binary = '${expo_i}'`);
    /*document.querySelector(`[cell_id='${Math.min(expo_i, expo_size)}']`).style.backgroundColor = "lightblue";
    document.querySelector(`[cell_id='${expo_i / 2}']`).style.backgroundColor = "lightblue";*/

    if (asked_number < Math.min(expo_i, expo_size)) {
        found_number = binSearch(searching_array, asked_number, expo_i / 2, Math.min(expo_i, expo_size));
    }

    return found_number;
}

function binSearch(arr, x, left, right) {

    document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightblue";
    document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightblue";
    document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "orange";

    console.log(`>>left = '${left}', right = '${right}', mid = '${mid}'`);

    if (arr[mid] !== x && left <= right) {
        if (x < arr[mid]) {
            document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "white";
            right = mid - 1;
            document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightblue";
        } else if (x > arr[mid]) {
            document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "white";
            left = mid + 1;
            document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightblue";
        }
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "white";
        mid = Math.floor((right + left) / 2);
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "orange";
    }
    if (arr[mid] === x) {
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + mid);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        document.getElementById("pause").click();
        return mid;
    }
    console.log(`Check for number if not in the array!`);
    console.log(`left = '${left}', right = '${right}', mid = '${mid}', arr[mid] = '${arr[mid]}', x = '${x}'`);
    if ((right === left ||
        left === mid ||
        right === mid) &&
        (arr[mid] !== x &&
            (arr[left] > x && arr[left] !== x) &&
            (arr[right] < x && arr[right] !== x))) {
        showSnackBar("The number you searched for is not in the generated array!");
        document.getElementById("pause").click();
        first_time_run_expo = true;
        only_at_next_search_run = true;
        return -1;
    }
    return binSearch(arr, x, left, right);
}

function runExponentialSearch() {
    if (document.getElementById("searchingNumber").value.length > 0) {
        intervalHandle = setInterval(() => {
            checkForGeneratedNumbers();
        }, intervalSpeed);
    } else {
        checkForGeneratedNumbers();
    }
}

// Add event listener

document.getElementById("exponentialSearch").addEventListener("click", () => {
    document.getElementById("pause").click();
    console.log("Exponential Search Button Clicked");
    searching_profile = "exponential";
    runExponentialSearch();
});