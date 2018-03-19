function makeTheTableWhite() {
    for (var i = 0; i < the_array.length; i++) {
        let cell = document.querySelector("[cell_id='" + i + "']").style.backgroundColor;
        if (cell.length > 0 && cell != "white") {
            console.log("Clearing "+i+" cell");
            document.querySelector("[cell_id='" + i + "']").style.backgroundColor = "white";
        }
    }
}
