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
        document.getElementById("searchingNumber").disabled = true;
        checks = 0;
        first_time_run_expo = false;
    }

    if (asked_number === searching_array[0]) {
        document.querySelector(`[cell_id='${0}']`).style.backgroundColor = "lightgreen";
        checks++;
        getValuesforExponentialSteps(0, 0, left, right, mid, expo_size, true, checks);
        showSnackBar("The number you searched found in position " + 0);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        document.getElementById("searchingNumber").disabled = false;
        document.getElementById("pause").click();
        return 0;
    }

    //if (expo_i < expo_size) {
    document.querySelector(`[cell_id='${Math.min(expo_i, expo_size)}']`).style.backgroundColor = "transparent";
    //

    if (expo_i < expo_size && searching_array[expo_i] <= asked_number) {
        expo_i = expo_i * 2;
        document.querySelector(`[cell_id='${Math.min(expo_i, expo_size)}']`).style.backgroundColor = "red";
        checks++;
        getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, false, checks);
        //console.log(`expo_i = '${expo_i}'`);
    } else {
        document.getElementById("pause").click();
        if (first_time_run_bin) {
            left = Math.floor(expo_i / 2);
            document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightblue";
            right = Math.min(expo_i, expo_size);
            document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightblue";
            mid = Math.floor((left + right) / 2);
            document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "orange";
            checks++;
        }
        getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, false, checks);
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
        getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, false, checks);
    }

    // console.log(`>>left = '${left}', right = '${right}', mid = '${mid}'`);
    // console.log(`>>arr[left] = '${arr[left]}', arr[right] = '${arr[right]}', arr[mid] = '${arr[mid]}', x = '${x}'`);
    if (arr[mid] !== x && left <= right) {
        if (x < arr[mid]) {
            document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "transparent";
            right = mid - 1;
            document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightblue";
            checks++;
        } else if (x > arr[mid]) {
            document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "transparent";
            left = mid + 1;
            document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightblue";
            checks++;
        }
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "transparent";
        mid = Math.floor((right + left) / 2);
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "orange";
    }
    getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, false, checks);
    // console.log(`>>>>left = '${left}', right = '${right}', mid = '${mid}'`);
    // console.log(`>>>>arr[left] = '${arr[left]}', arr[right] = '${arr[right]}', arr[mid] = '${arr[mid]}', x = '${x}'`);
    if (arr[mid] === x) {
        document.querySelector(`[cell_id='${mid}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + mid);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        first_time_run_bin = true;
        getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, true, checks);
        document.getElementById("searchingNumber").disabled = false;
        document.getElementById("pause").click();
        return mid;
    }
    if (arr[left] === x) {
        document.querySelector(`[cell_id='${left}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + left);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        first_time_run_bin = true;
        getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, true, checks);
        document.getElementById("searchingNumber").disabled = false;
        document.getElementById("pause").click();
        return left;
    }
    if (arr[right] === x) {
        document.querySelector(`[cell_id='${right}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + right);
        only_at_next_search_run = true;
        first_time_run_expo = true;
        first_time_run_bin = true;
        getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, true, checks);
        document.getElementById("searchingNumber").disabled = false;
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
        getValuesforExponentialSteps(expo_i / 2, expo_i, left, right, mid, expo_size, false, checks);
        document.getElementById("searchingNumber").disabled = false;
        return -1;
    }
}

function runBinSearch(searching_array, asked_number) {
    intervalHandle = setInterval(() => {
        found_number = binSearch(searching_array, asked_number);
    }, intervalSpeed);
}

function getValuesforExponentialSteps(previous, expo_i, first, last, mid, size, found, checks) {
    let pr = document.querySelector(`[cell_id='${previous}']`);
    let index = document.querySelector(`[cell_id='${Math.min(expo_i, size)}']`);
    let f = document.querySelector(`[cell_id='${first}']`);
    let l = document.querySelector(`[cell_id='${last}']`);
    let m = document.querySelector(`[cell_id='${mid}']`);
    //console.log(pr,index,f,l,m,found);
    exponentialDrawSteps(pr, index, f, l, m, found, checks);
}

// Add event listener

document.getElementById("exponentialSearch").addEventListener("click", () => {
    showTheManual(manual.ExponentialSearch.title, manual.ExponentialSearch.message);
    document.getElementById("pause").click();
    console.log("Exponential Search Button Clicked");
    searching_profile = "exponential";
    runTheSearch();
});