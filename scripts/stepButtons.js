function undo(){
    if (searching_profile === "linear") {
        if(i !== 0){
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