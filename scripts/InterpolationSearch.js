let first_time_run_inter = true;
let size;
let low;
let high;
let delta;
let position;

function interpolationSearch(searching_array, asked_number) {

    if (first_time_run_inter) {
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
        checks = 0;
        getValuesforIntepolationSteps(low, high, position, false, checks);
        document.getElementById("searchingNumber").disabled = true;
        first_time_run_inter = false;
    }

    if (low <= high && asked_number >= searching_array[low] && asked_number <= searching_array[high]) {
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "transparent";
        delta = (asked_number - searching_array[low]) / (searching_array[high] - searching_array[low]);
        position = low + Math.floor((high - low) * delta);
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";
        getValuesforIntepolationSteps(low, high, position, false, checks);

        if (searching_array[position] === asked_number) {
            document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "lightgreen";
            checks++;
            getValuesforIntepolationSteps(low, high, position, true, checks);
            showSnackBar("The number you searched found in position " + position);
            first_time_run_inter = true;
            only_at_next_search_run = true;
            document.getElementById("pause").click();
            document.getElementById("searchingNumber").disabled = false;
            return position;
        }

        if (searching_array[position] < asked_number) {
            document.querySelector(`[cell_id='${low}']`).style.backgroundColor = "transparent";
            low = position + 1;
            document.querySelector(`[cell_id='${low}']`).style.backgroundColor = "lightblue";
            console.log("Setting the low " + low + " and high " + high);
            checks++;
            getValuesforIntepolationSteps(low, high, position, false, checks);
        } else {
            document.querySelector(`[cell_id='${high}']`).style.backgroundColor = "transparent";
            high = position - 1;
            document.querySelector(`[cell_id='${high}']`).style.backgroundColor = "lightblue";
            console.log("Setting the low " + low + " and high " + high);
            checks++;
            getValuesforIntepolationSteps(low, high, position, false, checks);
        }
    } else {
        showSnackBar("The number you searched for is not in the generated array!");
        first_time_run_inter = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";
        checks++;
        getValuesforIntepolationSteps(low, high, position, false, checks);
        document.getElementById("searchingNumber").disabled = false;
        return -1;
    }

}

function getValuesforIntepolationSteps(l, h, pos, found, checks) {
    let low = document.querySelector(`[cell_id='${l}']`);
    let high = document.querySelector(`[cell_id='${h}']`);
    let position = document.querySelector(`[cell_id='${pos}']`);
    interpolationDrawSteps(low, high, position, found, checks);
}

document.getElementById("interpolationSearch").addEventListener("click", () => {
    showTheManual(manual.InterpolationSearch.title, manual.InterpolationSearch.message);
    document.getElementById("pause").click();
    console.log("Interpolation Search Button Clicked");
    searching_profile = "interpolation";
    let number = parseInt(document.getElementById("searchingNumber").value);
    if (!isNaN(number)) {
            if (first_time_run_inter) {
                makeTheTableWhite();
                size = the_array.length;
                low = 0;
                high = size - 1;
                console.log("Setting the low " + low + " and high " + high);
                document.querySelector(`[cell_id='${low}']`).style.backgroundColor = "lightblue";
                document.querySelector(`[cell_id='${high}']`).style.backgroundColor = "lightblue";
                delta = (number - the_array[low]) / (the_array[high] - the_array[low]);
                position = low + Math.floor((high - low) * delta);
                console.log("position " + position);
                document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";
                checks = 0;
                getValuesforIntepolationSteps(low, high, position, false, checks);
            }
    } else {
        // Show this message
        showSnackBar("Please <strong>Specify a Number</strong> for search");
    }
    runTheSearch();
});