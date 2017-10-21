function addItem(){
	if(e.keyCode == 13) {
		var item = document.getElementById('itemInput').value;
		var fullText = document.getElementById('fullList').value;
		fullText.appendChild(item);
	}
	else{
		var fullText = document.getElementById('fullList').value;
		fullText ="Bread";
	}
}
