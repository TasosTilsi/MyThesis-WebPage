//Make the DIV element draggagle:
dragElement(document.getElementById(("dragable_container")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "_header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.getElementById("collapse").addEventListener("click", () => {
    let content = document.getElementById("dragable_container_content");
    let icon = document.getElementById("collapse_icon");
    if (content.style.display === "none") {
        content.style.display = "block";
        icon.innerHTML = "expand_more";
    } else {
        content.style.display = "none";
        icon.innerHTML = "chevron_right";
    }
});

document.getElementById("options").addEventListener("click", () => {
    let div = document.getElementById("dragable_container");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});

function showTheManual(title, message) {
    document.getElementById("search_title").innerHTML = title;
    document.getElementById("manual").innerHTML = message;
    document.getElementById("left_pane").scrollTop = 0;
}

//
// document.getElementById("linearSearch").addEventListener("click", () => {
//     //document.getElementById("pause").click();
//     console.log("Linear Search Button Clicked");
//     searching_profile = "linear";
//     showTheManual("Linear Search","MANUAL");
//     //runLinearSearch();
// });