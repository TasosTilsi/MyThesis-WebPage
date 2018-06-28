let first_time_run_jump = true;
let jump_size;
let step;
let previous;

function jumpSearch(searching_array, asked_number) {

    if (first_time_run_jump) {
        console.log("Starting the search...");
        //Finding the array jump_size
        jump_size = searching_array.length;
        step = Math.floor(Math.sqrt(jump_size));
        console.log("Setting the step " + step);
        document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
        previous = 0;
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
        first_time_run_jump = false;
        checks = 1;
        getValuesforJumpSteps(previous, step, false, checks);
        document.getElementById("searchingNumber").disabled = true;
    }

    if (searching_array[Math.min(step, jump_size) - 1] < asked_number) {
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "white";
        previous = step;
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
        getValuesforJumpSteps(previous, step, false, checks);

        if (step < jump_size) {
            document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "white";
            step = Math.min(step + Math.floor(Math.sqrt(jump_size)), jump_size - 1);
            document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
            console.log("Setting the step " + step);
            getValuesforJumpSteps(previous, step, false, checks);
        }

        if (previous > jump_size) {
            showSnackBar("The number you searched for is not in the generated array!");
            first_time_run_jump = true;
            only_at_next_search_run = true;
            document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
            getValuesforJumpSteps(previous, step, false, checks);
            document.getElementById("pause").click();
            document.getElementById("searchingNumber").disabled = false;
            return -1;
        }
    }

    if (searching_array[previous] < asked_number) {
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "white";
        previous++;
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
        checks++;
        getValuesforJumpSteps(previous, step, false, checks);

        if (previous === jump_size) {
            showSnackBar("The number you searched for is not in the generated array!");
            first_time_run_jump = true;
            only_at_next_search_run = true;
            document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
            checks++;
            getValuesforJumpSteps(previous, step, false, checks);
            document.getElementById("pause").click();
            document.getElementById("searchingNumber").disabled = false;
            return -1;
        }

    } else if (searching_array[previous] === asked_number) {
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + previous);
        first_time_run_jump = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        checks++;
        getValuesforJumpSteps(previous, step, true, checks);
        document.getElementById("searchingNumber").disabled = false;
        return previous;
    } else {
        showSnackBar("The number you searched for is not in the generated array!");
        first_time_run_jump = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
        checks++;
        getValuesforJumpSteps(previous, step, false, checks);
        document.getElementById("searchingNumber").disabled = false;
        return -1;
    }
}

function getValuesforJumpSteps(index, step, found, checks) {
    let cell = document.querySelector(`[cell_id='${index}']`);
    let stepCell = document.querySelector(`[cell_id='${step}']`);
    jumpDrawSteps(cell, stepCell, found, checks);
}

document.getElementById("jumpSearch").addEventListener("click", () => {
    showTheManual(manual.JumpSearch.title, manual.JumpSearch.message);
    document.getElementById("pause").click();
    console.log("Jump Search Button Clicked");
    searching_profile = "jump";
    let number = parseInt(document.getElementById("searchingNumber").value);
    if (!isNaN(number)) {
            if (first_time_run_jump) {
                makeTheTableWhite();
                console.log("Starting the search...");
                //Finding the array jump_size
                jump_size = the_array.length;
                step = Math.floor(Math.sqrt(jump_size));
                console.log("Setting the step " + step);
                document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
                previous = 0;
                document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
                checks = 1;
                getValuesforJumpSteps(previous, step, false, checks);
            }
    } else {
        // Show this message
        showSnackBar("Please <strong>Specify a Number</strong> for search");
    }
    runTheSearch();
});