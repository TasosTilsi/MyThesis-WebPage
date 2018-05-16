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
    if (searching_profile === "linear") {
        /*if (i !== 0) {
            if (document.querySelector(`[cell_id='${i}']`).style.backgroundColor !== "lightgreen") {
                makeTheTableWhite();
                i++;
                document.querySelector(`[cell_id='${i}']`).style.backgroundColor = "orange";
            }
        }*/
        makeTheTableWhite();
        checkForGeneratedNumbers();
    } else if (searching_profile === "binary") {
        console.log("eeee");
    } else if (searching_profile === "jump") {

    } else if (searching_profile === "interpolation") {

    } else if (searching_profile === "fibonacci") {

    } else if (searching_profile === "stratos") {

    }
    return 0;
}

function pause() {
    if (searching_profile === "linear") {
        clearInterval(handle);
    } else if (searching_profile === "binary") {

    } else if (searching_profile === "jump") {

    } else if (searching_profile === "interpolation") {

    } else if (searching_profile === "fibonacci") {

    } else if (searching_profile === "stratos") {

    }
    return 0;
}