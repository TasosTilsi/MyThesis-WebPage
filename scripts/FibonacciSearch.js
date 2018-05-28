var first_time_run_fib = true;
var size;
var m2 = 0;
var m1 = 1;
var position;

function min(x, y) {
    return (x <= y) ? x : y;
}

function fibonacciSearch(searching_array, asked_number) {

    if (first_time_run_fib) {
        console.log("Starting the Interpolation search...");
        //Finding the array size
        size = searching_array.length;
        var m2 = 0;
        var m1 = 1;
        position = m1 + m2;
        console.log("Setting the m2 " + m2 + " and m1 " + m1 + " and position " + position);
        document.querySelector(`[cell_id='${m2}']`).style.backgroundColor = "lightblue";
        document.querySelector(`[cell_id='${m1}']`).style.backgroundColor = "lightblue";
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";
        first_time_run_fib = false;
    }

    if (position < size) {
        m2 = m1;
        m1 = position;
        position = m2 + m1;
    }

    let offset = -1;

    if (position > 1) {
        let i = min(offset + m2, asked_number - 1);

        if (searching_array[i] < asked_number) {
            position = m1;
            m1 = m2;
            m2 = position - m1;
            offset = i;
        } else if (searching_array[i] > asked_number) {
            position = m2;
            m1 = m1 - m2;
            m2 = position - m1;
        } else {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + i);
            first_time_run_fib = true;
            only_at_next_search_run = true;
            document.getElementById("pause").click();
            return i;
        }
    }/*else{
        showSnackBar("The number you searched for is not in the generated array!");
        first_time_run_jump = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
        return -1;
    }*/

    if (m1 && searching_array[offset + 1] == asked_number) {
        document.querySelector(`[cell_id='${offset +1}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + offset + 1);
        first_time_run_fib = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        return offset + 1;
    }
    //else{
        // showSnackBar("The number you searched for is not in the generated array!");
        // first_time_run_jump = true;
        // only_at_next_search_run = true;
        // document.getElementById("pause").click();
        // document.querySelector(`[cell_id='${offset + 1}']`).style.backgroundColor = "orange";
        // return -1;
    //}
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