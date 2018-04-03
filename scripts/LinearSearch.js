var first_time_run_linear = true;
var i;

function linearSearch(searching_array, asked_number) {
    // Setting the step
    if (first_time_run_linear) {
        i = 0;
        document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
        first_time_run_linear = false;
    } else {
        document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "white";
        i++;
        first_time_run_linear = false;
    }

    if (i < searching_array.length) {
        if (searching_array[i] === asked_number) {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + i);
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return i;
        } else if (asked_number < searching_array[i + 1]) {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
            document.querySelector(`[cell_id='${i + 1}']`).style.backgroundColor = "lightblue";
            showSnackBar("The number you searched for is not in the generated array!");
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return -1;
        } else if (searching_array.length - 1 === i) {
            //document.querySelector("[cell_id='" + (searching_array.length - 1) + "']").style.backgroundColor = "white";
            showSnackBar("The number you searched for is not in the generated array!");
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return -1;
        } else {
            // document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "white";
            // i++;
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
        }
    }
}

document.getElementById("linearSearch").addEventListener("click", () => { searching_profile = "linear"; checkForGeneratedNumbers(); });
document.getElementById("undo").addEventListener("click", () => { searching_profile = "linear"; undo(); });
//document.getElementById("next").addEventListener("click", );