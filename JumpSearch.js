function checkForGeneratedNumbers() {
	if (document.getElementsByClassName("index").item(0) != null) {
		makeTheTableWhite();
		var searching_number = parseInt(document.getElementById("searchingNumber").value);
		if (!isNaN(searching_number)) {
			var position = jumpSearch(the_array, searching_number);
		} else {
			showSnackBar("Please <strong>Specify a Number</strong> for search");
		}
	} else {
		showSnackBar("You have to <strong>Generate Numbers</strong> first");
	}
}

function jumpSearch(searching_array, asked_number) {
	//Finding the array size
	let size = searching_array.length;
	// Finding block size to be jumped
	let step = Math.floor(Math.sqrt(size));
	// Finding the block where element is present (if it is present)
	let previous = 0;

	let handle = setInterval(function () {
		if(searching_array[Math.min(step,size)-1]<asked_number){
			previous = step;
			step += Math.floor(Math.sqrt(size));
			if (previous >=size){
				return -1;
			}

		
		}
	}, 750);
}

document.getElementById("jumpSearch").addEventListener("click", checkForGeneratedNumbers);