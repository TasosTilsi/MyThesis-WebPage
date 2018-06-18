var first_time_run_jump = true;
var size;
var step;
var previous;

function jumpSearch(searching_array, asked_number) {

    if (first_time_run_jump) {
        console.log("Starting the search...");
        //Finding the array size
        size = searching_array.length;
        step = Math.floor(Math.sqrt(size));
        console.log("Setting the step " + step);
        document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
        previous = 0;
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
        first_time_run_jump = false;
    }

    if (searching_array[Math.min(step, size) - 1] < asked_number) {
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "white";
        previous = step;
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";

        if (step < size) {
            document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "white";
            step = Math.min(step + Math.floor(Math.sqrt(size)), size - 1);
            document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
            console.log("Setting the step " + step);
        }

        if (previous > size) {
            showSnackBar("The number you searched for is not in the generated array!");
            first_time_run_jump = true;
            only_at_next_search_run = true;
            document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
            document.getElementById("pause").click();
            return -1;
        }
    }

    if (searching_array[previous] < asked_number) {
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "white";
        previous++;
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";

        if (previous === size) {
            showSnackBar("The number you searched for is not in the generated array!");
            first_time_run_jump = true;
            only_at_next_search_run = true;
            document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
            document.getElementById("pause").click();
            return -1;
        }

    } else if (searching_array[previous] === asked_number) {
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "lightgreen";
        showSnackBar("The number you searched found in position " + previous);
        first_time_run_jump = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        return previous;
    } else {
        showSnackBar("The number you searched for is not in the generated array!");
        first_time_run_jump = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
        return -1;
    }
}

document.getElementById("jumpSearch").addEventListener("click", () => {
    showTheManual(manual.JumpSearch.title, manual.JumpSearch.message);
    document.getElementById("pause").click();
    console.log("Jump Search Button Clicked");
    searching_profile = "jump";
    let number = parseInt(document.getElementById("searchingNumber").value);
    if (!isNaN(number)) {
        if (searching_number <= the_array[the_array.length - 1]) {
            if (first_time_run_jump) {
                makeTheTableWhite();
                console.log("Starting the search...");
                //Finding the array size
                size = the_array.length;
                step = Math.floor(Math.sqrt(size));
                console.log("Setting the step " + step);
                document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
                previous = 0;
                document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
            }
        } else {
            showSnackBar("Please <strong>Specify a Number</strong> within the <strong>Numbers Range</strong>");
            document.getElementById("pause").click();
        }
    } else {
        // Show this message
        showSnackBar("Please <strong>Specify a Number</strong> for search");
    }
    runTheSearch();
});