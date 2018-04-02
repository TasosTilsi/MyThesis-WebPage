function jumpSearch(searching_array, asked_number) {
    console.log("Starting the search...");
    //Finding the array size
    let size = searching_array.length;
    console.log("Array size " + size);
    // Finding block size to be jumped
    let step = Math.floor(Math.sqrt(size));
    document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
    console.log("Step " + step);
    // Finding the block where element is present (if it is present)
    let previous = 0;
    document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
    console.log("Previous Step index " + previous);
    console.log("Getting in the interval...");

    let handle = setInterval(function () {
        console.log("If the array's value is below the asked number continue: 1");
        if (searching_array[Math.min(step, size) - 1] < asked_number) {
            document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "white";
            previous = step;
            document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
            console.log("Setting previous step index " + previous);

            console.log("If step value is below the size value continue: 2");
            if (step < size) {
                document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "white";
                step = Math.min(step + Math.floor(Math.sqrt(size)), size - 1);
                document.querySelector(`[cell_id='${step}']`).style.backgroundColor = "lightblue";
                console.log("Setting the step " + step);
            }
            console.log("If previous step value is greater than the size value continue: ");
            if (previous > size) {
                // Stop the interval, show a message and return -1
                clearInterval(handle);
                console.log("The number you searched for is not in the generated array!");
                showSnackBar("The number you searched for is not in the generated array!");
                return -1;
            }
        }

        console.log("Getting in the Linear interval...");
        let LinearHandle = setInterval(function () {
            console.log("If the array's value is below the asked number continue: 3");
            if (searching_array[previous] < asked_number) {
                document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "white";
                previous++;
                document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "orange";
                console.log("Setting previous step index " + previous);
                if (previous === size) {
                    // Stop the interval, show a message and return -1
                    clearInterval(LinearHandle);
                    clearInterval(handle);
                    console.log("The number you searched for is not in the generated array!!!");
                    showSnackBar("The number you searched for is not in the generated array!");
                    return -1
                }
            } else if (searching_array[previous] === asked_number) {
                clearInterval(handle);
                clearInterval(LinearHandle);
                document.querySelector(`[cell_id='${previous}']`).style.backgroundColor = "lightgreen";
                console.log("The number you searched found in position " + previous);
                showSnackBar("The number you searched found in position " + previous);
                return previous;
            } else {
                clearInterval(LinearHandle);
                clearInterval(handle);
                console.log("The number you searched for is not in the generated array!!!");
                showSnackBar("The number you searched for is not in the generated array!");
                return -1
            }
        }, 1500);

        // console.log("If the array's value is equal the asked number continue: 4");
        // if (searching_array[previous] == asked_number) {
        //     clearInterval(handle);
        //     document.querySelector("[cell_id='" + (previous) + "']").style.backgroundColor = "lightgreen";
        //     console.log("The number you searched found in position " + previous);
        //     showSnackBar("The number you searched found in position " + previous);
        //     return previous;
        // }
    }, 750);
}

document.getElementById("jumpSearch").addEventListener("click", () => { searching_profile = "jump"; checkForGeneratedNumbers() });