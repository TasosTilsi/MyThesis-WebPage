var intervalHandle;
var intervalSpeed = document.getElementById("rangevalue").value;

/*function undo() {
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
}*/

function clearAll(){
    document.getElementById("pause").click();
    showTheManual("Press a Search Button","A manual for this search will appear hear");
    document.getElementById("dragable_container_step_content").innerHTML = "<p>You will see the steps of every search you run...</p>";
    document.getElementById("table_container").innerHTML= "";
    document.getElementById("arraySize").value = "";
    document.getElementById("numbersRange").value = "";
    if(document.getElementById("searchingNumber").disabled){
        document.getElementById("searchingNumber").disabled = false;
        document.getElementById("searchingNumber").value = "";
    }else{
        document.getElementById("searchingNumber").value = "";
    }
    searching_profile = "";
    only_at_next_search_run = true;
    first_time_run_linear = true;
    first_time_run_binary = true;
    first_time_run_jump = true;
    first_time_run_inter = true;
    first_time_run_expo = true;
    first_time_run_bin = true;
    first_time_run_fibo = true;
    document.getElementById("pause").disabled = true;
    document.getElementById("next").disabled = true;
    document.getElementById("skipForward").disabled = true;
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

/*document.getElementById("undo").addEventListener("click", () => {
    console.log("Undo Button Clicked");
    undo();
});*/

document.getElementById("clear_button").addEventListener("click", ()=>{
    console.log("Clear Button Clicked");
    clearAll();
});

document.getElementById("next").addEventListener("click", () => {
    console.log("Next Button Clicked");
    next();
});

document.getElementById("pause").addEventListener("click", () => {
    console.log("Pause Button Clicked");
    pause();
});

document.getElementById("skipForward").addEventListener("click", () => {
    console.log("Skip Forward Button Clicked");
    document.getElementById("pause").click();
    if (document.getElementById("searchingNumber").value.length > 0) {
        intervalHandle = setInterval(() => {
            checkForGeneratedNumbers();
        }, 0);
    } else {
        checkForGeneratedNumbers();
    }
});

document.getElementById("rangeinput").addEventListener("change", () => {
    let slider = document.getElementById("rangeinput");
    let output = document.getElementById("rangevalue");
    output.innerHTML = slider.value;
    intervalSpeed = slider.value;
    document.getElementById("pause").click();
    if (document.getElementById("searchingNumber").value.length > 0) {
        intervalHandle = setInterval(() => {
            checkForGeneratedNumbers();
        }, intervalSpeed);
    }
});