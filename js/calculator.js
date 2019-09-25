let total = 0;
let totalAsset = 0;
let totalLiabilities = 0;

function calculateWorth(obj, calc) {
	let showCalc;
    if(isNaN(obj.value) || obj.value === "") {
		obj.value = "#0";
	} 
	else {
		if(calc === "assets") {
		    totalAsset = add(totalAsset, parseInt(obj.value));
		    total = add(total, parseInt(obj.value));
		    obj.value = "#" + obj.value;
		    showCalc = document.getElementById("justAssets")
		    showCalc.innerHTML = totalAsset;
		}
		else {
			if(calc === "liabilities"){
				totalLiabilities = add(totalLiabilities, parseInt(obj.value));
				total = subtract(total, parseInt(obj.value));
				obj.value = "#" + obj.value;
				showCalc = document.getElementById("justLiabilities");
				showCalc.innerHTML = totalLiabilities;
			}
		}
	}

	showCalc.style.display = "inline-block";
    document.getElementById("worth").innerHTML = total;
}

function add( a, b) {
	return a + b;
}

function subtract(a, b) {
	return a-b;
}

function moreAssetsOrLiabilities(oweOrOwn) {
	let newEntry;
	let entries = document.createElement("div");
	let entry1 = document.createElement("input");
	let entry2 = document.createElement("input");

	if (oweOrOwn == "assets") {
		newEntry = document.getElementById("moreAssets");
		entry2.setAttribute("onfocusout", "calculateWorth(this, 'assets')");
	} else if(oweOrOwn == "liabilities") {
		newEntry = document.getElementById("moreLiabilities");
		entry2.setAttribute("onfocusout", "calculateWorth(this, 'liabilities')");
	}

	entries.appendChild(entry1);
	entries.appendChild(entry2);
	entries.classList.add("entry");

	newEntry.parentNode.insertBefore(entries, newEntry);
}
