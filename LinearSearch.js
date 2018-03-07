function checkForGeneratedNumbers(){
	if (document.getElementById("index") !=null){
			alert("check");
	}else{
		showSnackBar("You have to <strong>Generate Numbers</strong> first");
	}
}

document.getElementById("linearSearch").addEventListener("click",checkForGeneratedNumbers);