//Make the DIV element draggagle:
dragElement(document.getElementById(("dragable_container_manual")));
dragElement(document.getElementById(("dragable_container_step")));

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

function showTheManual(title, message) {
    document.getElementById("search_title").innerHTML = title;
    document.getElementById("manual").innerHTML = message;
    document.getElementById("dragable_container_manual_content").scrollTop = 0;
}

function displayManualDiv() {
    let manual = document.getElementById("dragable_container_manual");
    if (manual.style.display === "none") {
        manual.style.display = "block";
    } else {
        manual.style.display = "none";
    }
}

function displayStepDiv() {
    let step = document.getElementById("dragable_container_step");
    if (step.style.display === "none") {
        step.style.display = "block";
    } else {
        step.style.display = "none";
    }
}

function collapseDivs(content, icon) {
    if (content.style.display === "none") {
        content.style.display = "block";
        icon.innerHTML = "expand_more";
    } else {
        content.style.display = "none";
        icon.innerHTML = "chevron_right";
    }
}

document.getElementById("collapse_manual").addEventListener("click", () => {
    let content = document.getElementById("dragable_container_manual_content");
    let icon = document.getElementById("collapse_manual_icon");
    collapseDivs(content, icon);
});

document.getElementById("collapse_step").addEventListener("click", () => {
    let content = document.getElementById("dragable_container_step_content");
    let icon = document.getElementById("collapse_step_icon");
    collapseDivs(content, icon);
});

document.getElementById("show_hide_manual").addEventListener("click", () => {
    displayManualDiv();
});

document.getElementById("show_hide_step").addEventListener("click", () => {
    displayStepDiv();
});