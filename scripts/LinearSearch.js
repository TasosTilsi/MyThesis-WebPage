var first_time_run = true;
var i;

function linearSearch(searching_array, asked_number) {
    // Setting the step
    if (first_time_run) {
        i=0;
        first_time_run=false;
    }
    // Doing an interval loop
    // let handle = setInterval(function () {
        if (i < searching_array.length) {
            document.querySelector(`[cell_id='${Math.max(i - 1, 0)}']`).style.backgroundColor = "white";
            if (searching_array[i] === asked_number) {
                document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "lightgreen";
                //clearInterval(handle);
                showSnackBar("The number you searched found in position " + i);
                only_at_next_search_run = true;
                return i;
            } else if (asked_number < searching_array[i + 1]) {
                document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
                document.querySelector(`[cell_id='${i + 1}']`).style.backgroundColor = "lightblue";
                showSnackBar("The number you searched for is not in the generated array!");
                //clearInterval(handle);
                only_at_next_search_run = true;
                return -1;
            } else if (searching_array.length - 1 === i) {
                //document.querySelector("[cell_id='" + (searching_array.length - 1) + "']").style.backgroundColor = "white";
                showSnackBar("The number you searched for is not in the generated array!");
                //clearInterval(handle);
                only_at_next_search_run = true;
                return -1;
            } else {
                document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
                i++;
            }
        }

    // }, 500);
}

document.getElementById("linearSearch").addEventListener("click",() => { searching_profile = "linear"; checkForGeneratedNumbers(); });
document.getElementById("undo").addEventListener("click",()=>{ searching_profile = "linear"; undo; });
//document.getElementById("next").addEventListener("click", );