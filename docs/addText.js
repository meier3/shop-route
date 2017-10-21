function addItem(){
	if(e.keyCode == 13) {
		var item = document.getElementById("itemInput").value;
		var fullText = document.getElementById("fullList").value;
		fullText += item;
	}
	else{
		document.getElementById("fullList").value = "bread";
	}
}
