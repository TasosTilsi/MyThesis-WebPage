let first_time_run_fib = true;
let flag;
let fib_size;
let fib;
let fib1;
let fib2;
let index;
let offset;

function fibonacciSearch(searching_array, asked_number) {

    if (first_time_run_fib) {
        console.log("Starting the Interpolation search...");
        //Finding the array size
        fib_size = searching_array.length;
        fib1 = 1;
        fib2 = 0;
        fib = fib2 + fib1;
        document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "red";
        document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "red";
        document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "red";
        index = 0;
        offset = -1;
        first_time_run_fib = false;
        enableOrDisableInputs();
        flag = 0;
    }

    //if(searching_array[])
    if (flag === 0) {
        if (fib < fib_size) {
            document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "white";
            document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "white";
            document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "white";
            fib2 = fib1;
            fib1 = fib;
            fib = fib1 + fib2;
            //console.log(">Setting the fib2 " + fib2 + " and fib1 " + fib1 + " and fib " + fib);
            if (fib2 < fib_size) {
                document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "red";
            }
            if (fib1 < fib_size) {
                document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "red";
            }
            if (fib < fib_size) {
                document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "red";
            }
        }
        if (fib >= fib_size) {
            flag = 1;
        }
    } else if (flag === 1) {
        if (fib > 1) {
            document.querySelector(`[cell_id='${index}']`).style.backgroundColor = "white";
            index = Math.min(offset + fib2, fib_size - 1);
            document.querySelector(`[cell_id='${index}']`).style.backgroundColor = "orange";
            //console.log(">>>Setting the index " + index);
            if (asked_number < searching_array[index]) {
                if (fib2 < fib_size) {
                    document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "white";
                }
                if (fib1 < fib_size) {
                    document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "white";
                }
                if (fib < fib_size) {
                    document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "white";
                }
                fib = fib2;
                fib1 = fib1 - fib2;
                fib2 = fib - fib1;
                //console.log(">>Setting the fib2 " + fib2 + " and fib1 " + fib1 + " and fib " + fib);
                if (fib2 < fib_size) {
                    document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "lightblue";
                }
                if (fib1 < fib_size) {
                    document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "lightblue";
                }
                if (fib < fib_size) {
                    document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "lightblue";
                }
            } else if (asked_number > searching_array[index]) {
                if (fib2 < fib_size) {
                    document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "white";
                }
                if (fib1 < fib_size) {
                    document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "white";
                }
                if (fib < fib_size) {
                    document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "white";
                }
                fib = fib1;
                fib1 = fib2;
                fib2 = fib - fib1;
                if (fib2 < fib_size) {
                    document.querySelector(`[cell_id='${fib2}']`).style.backgroundColor = "lightblue";
                }
                if (fib1 < fib_size) {
                    document.querySelector(`[cell_id='${fib1}']`).style.backgroundColor = "lightblue";
                }
                if (fib < fib_size) {
                    document.querySelector(`[cell_id='${fib}']`).style.backgroundColor = "lightblue";
                }
                if (offset < fib_size && offset > 0) {
                    document.querySelector(`[cell_id='${offset}']`).style.backgroundColor = "white";
                }
                offset = index;
                //console.log(">>>Setting the fib2 " + fib2 + " and fib1 " + fib1 + " and fib " + fib + " offset " + offset);
                if (offset < fib_size) {
                    document.querySelector(`[cell_id='${offset}']`).style.backgroundColor = "orange";
                }
            } else {
                if (index < fib_size) {
                    document.querySelector(`[cell_id='${index}']`).style.backgroundColor = "lightgreen";
                }
                showSnackBar("The number you searched found in position " + index);
                first_time_run_fib = true;
                only_at_next_search_run = true;
                flag = 0;
                document.getElementById("pause").click();
                enableOrDisableInputs();
                return index;
            }
        }
        if (fib1 === 0 || fib2 === 0) {
            flag++;
        }
    } else {

        if (fib1 === asked_number && searching_array[offset + 1] === asked_number) {
            document.querySelector(`[cell_id='${offset + 1}']`).style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + offset + 1);
            first_time_run_fib = true;
            only_at_next_search_run = true;
            flag = 0;
            document.getElementById("pause").click();
            enableOrDisableInputs();
            return offset + 1;
        } else {
            showSnackBar("The number you searched for is not in the generated array!");
            first_time_run_fib = true;
            only_at_next_search_run = true;
            flag = 0;
            document.getElementById("pause").click();
            document.querySelector(`[cell_id='${offset + 1}']`).style.backgroundColor = "orange";
            enableOrDisableInputs();
            return -1;
        }
    }
}

document.getElementById("fibonacciSearch").addEventListener("click", () => {
    showTheManual(manual.FibonacciSearch.title, manual.FibonacciSearch.message);
    document.getElementById("pause").click();
    console.log("Fibonacci Search Button Clicked");
    searching_profile = "fibonacci";
    runTheSearch();
});

// https://www.youtube.com/watch?v=5_zlqKi01zQ
// https://www.geeksforgeeks.org/fibonacci-search/