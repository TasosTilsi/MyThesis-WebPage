var first_time_run_fib = true;
var fib_size;
var fib;
var fib1;
var fib2;
var index;
var offset;


function fibonacciSearch(searching_array, asked_number) {

    if (first_time_run_fib) {
        console.log("Starting the Interpolation search...");
        //Finding the array size
        fib_size = searching_array.length;
        fib1 = 1;
        fib2 = 1;
        fib = 2;
        index = 0;
        offset = 0;
        document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "lightblue";
        document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "lightblue";
        document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "orange";
        first_time_run_fib = false;
    }

    //if(searching_array[])

    if (fib < fib_size) {
        document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "white";
        document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "white";
        document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "white";
        fib2 = fib1;
        fib1 = fib;
        fib = fib1 + fib2;
        console.log(">Setting the fib2 " + fib2 + " and fib1 " + fib1 + " and fib " + fib);
        document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "lightblue";
        document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "lightblue";
        document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "lightblue";
    }

    if (fib > 1) {
        index = Math.min(offset + fib2, fib_size);
        console.log(">>>Setting the index " + index);
        if (asked_number < searching_array[index]) {
            document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "white";
            document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "white";
            document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "white";
            fib = fib2;
            fib1 = fib1 - fib2;
            fib2 = fib - fib1;
            console.log(">>Setting the fib2 " + fib2 + " and fib1 " + fib1 + " and fib " + fib);
            document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "lightblue";
            document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "lightblue";
            document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "lightblue";
        } else if (asked_number > searching_array[index]) {
            document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "white";
            document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "white";
            document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "white";
            fib = fib1;
            fib1 = fib2;
            fib2 = fib - fib1;
            document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "lightblue";
            document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "lightblue";
            document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "lightblue";
            document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "white";
            offset = index;
            console.log(">>>Setting the fib2 " + fib2 + " and fib1 " + fib1 + " and fib " + fib+"offset"+offset);
            document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "orange";
        } else {
            document.querySelector(`[cell_id='${index}']`).style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + index);
            first_time_run_fib = true;
            only_at_next_search_run = true;
            document.getElementById("pause").click();
            return index;
        }
    }

    // showSnackBar("The number you searched for is not in the generated array!");
    // first_time_run_fib = true;
    // only_at_next_search_run = true;
    // document.getElementById("pause").click();
    // return -1;

    

    if (fib1 == asked_number && searching_array[offset + 1] == asked_number) {
        document.querySelector(`[cell_id='${offset +1}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + offset + 1);
        first_time_run_fib = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        return offset + 1;
    } else {
        showSnackBar("The number you searched for is not in the generated array!");
        first_time_run_fib = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        document.querySelector(`[cell_id='${offset + 1}']`).style.backgroundColor = "orange";
        return -1;
    }
}

function runFibonacciSearch() {
    if (document.getElementById("searchingNumber").value.length > 0) {
        intervalHandle = setInterval(() => {
            checkForGeneratedNumbers();
        }, intervalSpeed);
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

// fibonacci pseudocode
/*
    A = sorted array, x = int element
    fib2 = 1
    fib1 = 1
    fib = 2
    while fib < n
        fib2 = fib1
        fib1 = fib
        fib = fib1 + fib2
    index = 0
    offset = 0
    while fib >1
        index = min(offset +fib2,n)
        if x< A[index]
            fib = fib2
            fib1 = fib1 - fib2
            fib2 = fib - fib1
        else if x > A[index]
            fib = fib1
            fib1 = fib2
            fib2 = fib - fib1
            offset = index
        else
            return index
    return -1
*/