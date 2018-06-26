let first_time_run_expo = true;
let first_time_run_bin = true;
let expo_i;
let expo_size;
let mid;
let left;
let right;
let found_number;

function exponentialSearch(searching_array, asked_number) {

    if (first_time_run_expo) {
        expo_i = 1;
        mid = 0;
        left = 0;
        right = 0;
        document.querySelector(`[cell_id='${expo_i}']`).style.backgroundColor = "lightblue";
        expo_size = searching_array.length - 1;
        enableOrDisableInputs();
        first_time_run_expo = false;
    }

    if (asked_number === searching_array[0]) {
        document.querySelector(`[cell_id='${0}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + 0);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        enableOrDisableInputs();
        document.getElementById("pause").click();
        return 0;
    }

    if (expo_i < expo_size) {
        document.querySelector(`[cell_id='${expo_i}']`).style.backgroundColor = "white";
    }

    if (expo_i < expo_size && searching_array[expo_i] <= asked_number) {
        expo_i = expo_i * 2;
        document.querySelector(`[cell_id='${Math.min(expo_i, expo_size)}']`).style.backgroundColor = "red";
        //console.log(`expo_i = '${expo_i}'`);
    }else{
        document.getElementById("pause").click();
        if (first_time_run_bin) {
            left = Math.floor(expo_i / 2);
            document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightblue";
            right = Math.min(expo_i, expo_size);
            document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightblue";
            mid = Math.floor((left + right) / 2);
            document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "orange";
        }
        runBinSearch(searching_array, asked_number);
    }

    return found_number;
}

function binSearch(arr, x) {

    if (first_time_run_bin) {
        left = Math.floor(expo_i / 2);
        document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightblue";
        right = Math.min(expo_i, expo_size);
        document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightblue";
        mid = Math.floor((left + right) / 2);
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "orange";
        first_time_run_bin = false;
    }

    // console.log(`>>left = '${left}', right = '${right}', mid = '${mid}'`);
    // console.log(`>>arr[left] = '${arr[left]}', arr[right] = '${arr[right]}', arr[mid] = '${arr[mid]}', x = '${x}'`);
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
    // console.log(`>>>>left = '${left}', right = '${right}', mid = '${mid}'`);
    // console.log(`>>>>arr[left] = '${arr[left]}', arr[right] = '${arr[right]}', arr[mid] = '${arr[mid]}', x = '${x}'`);
    if (arr[mid] === x) {
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + mid);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        first_time_run_bin = true;
        enableOrDisableInputs();
        document.getElementById("pause").click();
        return mid;
    }
    if (arr[left] === x) {
        document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + left);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        first_time_run_bin = true;
        enableOrDisableInputs();
        document.getElementById("pause").click();
        return left;
    }
    if (arr[right] === x) {
        document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + right);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        first_time_run_bin = true;
        enableOrDisableInputs();
        document.getElementById("pause").click();
        return right;
    }
    if ((right === left ||
            left === mid ||
            right === mid) &&
        (arr[mid] !== x &&
            (arr[left] > x && arr[left] !== x) &&
            (arr[right] < x && arr[right] !== x))) {
        showSnackBar("The number you searched for is not in the generated array!");
        document.getElementById("pause").click();
        first_time_run_expo = true;
        first_time_run_bin = true;
        only_at_next_search_run = true;
        enableOrDisableInputs();
        return -1;
    }
}

function runBinSearch(searching_array, asked_number){
    intervalHandle = setInterval(() => {
        found_number = binSearch(searching_array, asked_number);
    }, intervalSpeed);
}

// Add event listener

document.getElementById("exponentialSearch").addEventListener("click", () => {
    showTheManual(manual.ExponentialSearch.title, manual.ExponentialSearch.message);
    document.getElementById("pause").click();
    console.log("Exponential Search Button Clicked");
    searching_profile = "exponential";
    runTheSearch();
});