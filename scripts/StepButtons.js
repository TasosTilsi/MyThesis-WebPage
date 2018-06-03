var intervalHandle;

function undo() {
    if (searching_profile === "linear") {
        if (i !== 0) {
            makeTheTableWhite();
            i--;
            document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
        }
    } else if (searching_profile === "binary") {

    } else if (searching_profile === "jump") {

    } else if (searching_profile === "interpolation") {

    } else if (searching_profile === "fibonacci") {

    } else if (searching_profile === "stratos") {

    }
    return 0;
}

function next() {
    checkForGeneratedNumbers();
    return 0;
}

function pause() {
    clearInterval(intervalHandle);
    only_at_next_search_run = true;
    return 0;
}

// Add event listener

document.getElementById("undo").addEventListener("click", () => {
    console.log("Undo Button Clicked");
    undo();
});
document.getElementById("next").addEventListener("click", () => {
    console.log("Next Button Clicked");
    next();
});
document.getElementById("pause").addEventListener("click", () => {
    console.log("Pause Button Clicked");
    pause();
});