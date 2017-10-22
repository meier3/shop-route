function addItem(){
		var e = document.getElementById("itemDrop");
		var item = e.options[e.selectedIndex].text;
		//var fullText = document.getElementById("fullList").value;
		//fullText += item;
		document.getElementById('fullList').append(item + '\n');
		//document.getElementById("fullList").append(base);
		//document.getElementById("itemInput").value = "";
}

function validateForm(e) {
    if (e.preventDefault) {
       e.preventDefault();
    }
    e.returnValue = false; // for IE
}

function clearList(){
	var f = document.getElementById("fullList");
	f.value=" ";
}

function setMap() {
	var e = document.getElementById("maps");
	var map = e.selectedIndex;
	if (map == 1)
		loadDemoMap();
	else if (map == 0)
		clearMap();
}