var first_time_run_inter = true;
var size;
var low;
var high;
var delta;
var position;

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
        first_time_run_inter = false;
    }

    if (low <= high && asked_number >= searching_array[low] && asked_number <= searching_array[high]) {
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "white";
        delta = (asked_number - searching_array[low]) / (searching_array[high] - searching_array[low]);
        position = low + Math.floor((high - low) * delta);
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";

        if (searching_array[position] === asked_number) {
            document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "lightgreen";
            showSnackBar("The number you searched found in position " + position);
            first_time_run_inter = true;
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
        first_time_run_inter = true;
        only_at_next_search_run = true;
        document.getElementById("pause").click();
        document.querySelector(`[cell_id='${position}']`).style.backgroundColor = "orange";
        return -1;
    }

}

document.getElementById("interpolationSearch").addEventListener("click", () => {
    showTheManual(manual.InterpolationSearch.title, manual.InterpolationSearch.message);
    document.getElementById("pause").click();
    console.log("Interpolation Search Button Clicked");
    searching_profile = "interpolation";
    let number = parseInt(document.getElementById("searchingNumber").value);
    if (!isNaN(number)) {
        if (searching_number <= the_array[the_array.length - 1]) {
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