var first_time_run_linear = true;
var i = 0;

function linearSearch(searching_array, asked_number) {
    // Setting the step
    if (first_time_run_linear) {
        i = 0;
        document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
        linearDrawSteps(document.querySelector(`[cell_id='${i}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i}']`).getAttribute("cell_value"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_value"));
        first_time_run_linear = false;
    } else {
        document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "white";
        i++;
        first_time_run_linear = false;
    }

    if (i < searching_array.length) {
        if (searching_array[i] === asked_number) {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "lightgreen";
            linearDrawSteps(document.querySelector(`[cell_id='${i}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i}']`).getAttribute("cell_value"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_value"));
            showSnackBar("The number you searched found in position " + i);
            document.getElementById("pause").click();
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return i;
        } else if (asked_number < searching_array[i + 1]) {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
            document.querySelector(`[cell_id='${i + 1}']`).style.backgroundColor = "lightblue";
            linearDrawSteps(document.querySelector(`[cell_id='${i}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i}']`).getAttribute("cell_value"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_value"));
            showSnackBar("The number you searched for is not in the generated array!");
            document.getElementById("pause").click();
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return -1;
        } else if (searching_array.length - 1 === i) {
            linearDrawSteps(document.querySelector(`[cell_id='${i}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i}']`).getAttribute("cell_value"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_value"));
            showSnackBar("The number you searched for is not in the generated array!");
            document.getElementById("pause").click();
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return -1;
        } else {
            // document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "white";
            // i++;
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
            linearDrawSteps(document.querySelector(`[cell_id='${i}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i}']`).getAttribute("cell_value"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_id"), document.querySelector(`[cell_id='${i + 1}']`).getAttribute("cell_value"));
        }
    }
}

document.getElementById("linearSearch").addEventListener("click", () => {
    showTheManual(manual.LinearSearch.title, manual.LinearSearch.message);
    document.getElementById("pause").click();
    console.log("Linear Search Button Clicked");
    searching_profile = "linear";
    runTheSearch();
});