var first_time_run_fib = true;
var size;
var low;
var high;
var delta;
var position;

function fibonacciSearch(searching_array, asked_number) {

    /*if (first_time_run_fib) {
        console.log("Starting the Interpolation search...");
        //Finding the array size
        size = searching_array.length;
        low = 0;
        high = size - 1;
        console.log("Setting the low " + low + " and high " + high);
        document.querySelector(`[cell_id='${low}']`).style.backgroundColor = "lightblue";
        document.querySelector(`[cell_id='${high}']`).style.backgroundColor = "lightblue";
        delta = (asked_number - searching_array[low]) / (searching_array[high] - searching_array[low]);
        position = low + Math.floor((high - low) * delta);
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";
        first_time_run_fib = false;
    }

    if (low <= high && asked_number >= searching_array[low] && asked_number <= searching_array[high]) {
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "white";
        delta = (asked_number - searching_array[low]) / (searching_array[high] - searching_array[low]);
        position = low + Math.floor((high - low) * delta);
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";

        if (searching_array[position] === asked_number) {
            document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + position);
            first_time_run_fib = true;
            only_at_next_search_run = true;
            document.getElementById("pause").click();
            return position;
        }

        if (searching_array[position] < asked_number) {
            document.querySelector(`[cell_id='${low}']`).style.backgroundColor = "white";
            low = position + 1;
            document.querySelector(`[cell_id='${low}']`).style.backgroundColor = "lightblue";
            console.log("Setting the low " + low + " and high " + high);
        } else {
            document.querySelector(`[cell_id='${high}']`).style.backgroundColor = "white";
            high = position - 1;
            document.querySelector(`[cell_id='${high}']`).style.backgroundColor = "lightblue";
            console.log("Setting the low " + low + " and high " + high);
        }
    } else {
        showSnackBar("The number you searched for is not in the generated array!");
        first_time_run_fib = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";
        return -1;
    }*/

}

function runFibonacciSearch() {
    if (document.getElementById("searchingNumber").value.length > 0) {
        intervalHandle = setInterval(() => {
            checkForGeneratedNumbers();
        }, 750);
    } else {
        checkForGeneratedNumbers();
    }
}

document.getElementById("fibonacciSearch").addEventListener("click", () => {
    document.getElementById("pause").click();
    console.log("Fibonacci Search Button Clicked");
    searching_profile = "fibonacci";
    runFibonacciSearch();
});