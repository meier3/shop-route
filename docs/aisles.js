var aiseID = [
	['p', "Apples"],
	['4', "Baby Food"],
	['1', "Baking Nuts"],
	['4', "Bath / Body Soap"],
	['4' , "Bathroom Tissue"],
	['p', "Bananas"],
	['2', "BBQ Sauce"],
	['3', "Juice"],
	['2', "Bread"],
	['4', "Broom / Mop"],
	['b', "Cakes"],
	['2', "Candy"],
	['2', "Canned Fruit"],
	['2', "Canned Tomatoes"],
	['1', "Cereal"];
	['e', "Charcoal"],
	['d', "Cheese"],
	['3', "Chips"],
	['4', "Cleaners"],
	['2', "Coffee"],
	['1', "Cooking Oil"],
	['1', "Corn Syrup"],
	['4', "Cough Drops"],
	['3', "Dried Fruit"],
	['4', "First Aid"],
	['1', "Flour"],
	['4', "Frozen Food"],
    ['3', "Fruit Snacks"],
	['3', "Ketchup"],
	['4', "Laundry Supplies"],
	['4', "Paper Towels"],
	['2', "Pasta"],
	['4', "Pet Care"],
	['d', "Pickles"],
	['p', "Salad"],
	['4', "Soft Drinks"],
	['2', "Soup"],
	['1', "Sugar"],
	['4', "Trash Bags"],
	['1', "Vinegar"]
]

function findAisle(c){
	for(var i = 0; i < aiseID.length; i++){
		if(c == aiseID[1][i]){
			return aiselID[0][i];
		}
	}
}

function getAisle(){
	var textArea = document.getElementById("fullList");
	var arrayOfLines = textArea.value.split("\n");

	for(var i = 0; i < arrayOfLines.length; i++){
		var initItem = arrayOfLines[i];
		initItem = initItem.trim();
		var myChar = findAisle(initItem);
		functions(myChar);
	}

}