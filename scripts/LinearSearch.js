let first_time_run_linear = true;
let i = 0;

function linearSearch(searching_array, asked_number) {
    // Setting the step
    if (first_time_run_linear) {
        i = 0;
        document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
        getValuesforLinearSteps(searching_array, i, false);
        first_time_run_linear = false;
    } else {
        document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "white";
        i++;
        first_time_run_linear = false;
    }

    if (i < searching_array.length) {
        if (searching_array[i] === asked_number) {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "lightgreen";
            getValuesforLinearSteps(searching_array, i, true);
            showSnackBar("The number you searched found in position " + i);
            document.getElementById("pause").click();
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return i;
        } else if (asked_number < searching_array[i + 1]) {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
            document.querySelector(`[cell_id='${i + 1}']`).style.backgroundColor = "lightblue";
            getValuesforLinearSteps(searching_array, i, false);
            showSnackBar("The number you searched for is not in the generated array!");
            document.getElementById("pause").click();
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return -1;
        } else if (searching_array.length - 1 === i) {
            getValuesforLinearSteps(searching_array, i, false);
            showSnackBar("The number you searched for is not in the generated array!");
            document.getElementById("pause").click();
            first_time_run_linear = true;
            only_at_next_search_run = true;
            return -1;
        } else {
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
            getValuesforLinearSteps(searching_array, i, false);
        }
    }
}

function getValuesforLinearSteps(searching_array, i, found) {
    let cell = document.querySelector(`[cell_id='${i}']`);
    let nextCell = document.querySelector(`[cell_id='${Math.min(i + 1, searching_array.length - 1)}']`);
    linearDrawSteps(cell, nextCell, found);
}

document.getElementById("linearSearch").addEventListener("click", () => {
    showTheManual(manual.LinearSearch.title, manual.LinearSearch.message);
    document.getElementById("pause").click();
    console.log("Linear Search Button Clicked");
    searching_profile = "linear";
    runTheSearch();
});