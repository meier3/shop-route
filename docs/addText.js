function addItem(e){
	e = e || window.event;
    var code = e.keyCode;
	if(code == 32){
		var item = document.getElementById("itemInput").value;
		//var fullText = document.getElementById("fullList").value;
		//fullText += item;
		document.getElementById('fullList').append(item + '\n');
		//document.getElementById("fullList").append(base);
		document.getElementById("itemInput").value = "";
	}
}
