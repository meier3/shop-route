function addItem(){
	if(e.keyCode == 13) {
		var item = document.getElementById('itemInput').value;
		document.getElementById('fullList').value += item;
	}
}
