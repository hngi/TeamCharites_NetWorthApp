<<<<<<< HEAD
function notify () {
	alert("Please use the 'reset' button if you enter a wrong input, don't change just that input field");
};
=======
>>>>>>> develop

let total = 0;
let totalAsset = 0;
let totalLiabilities = 0;
<<<<<<< HEAD

function calculateWorth(obj, calc) {
	let showCalc;
    if(isNaN(obj.value) || obj.value === "") {
		obj.value = "";
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
	    showCalc.style.display = "inline-block";
        document.getElementById("worth").innerHTML = total;
	}
}

=======
let c = {};
let count = 8;

function calculateWorth(obj, calc) {
	let showCalc;
    if(isNaN(obj.value)) {
		obj.value = "#0";
	} 
	else {
		if(!isNaN(obj.value) || obj.value == ""){
			if(obj.value == "") {
				obj.value = 0;
			}
		    if(calc === "assets") {
			    if(c.hasOwnProperty(obj.id)) {
				    totalAsset -= parseInt(c[obj.id]);
				    total -= parseInt(c[obj.id]);
				    c[obj.id] = parseInt(obj.value);
				    totalAsset += parseInt(obj.value);
				    total += parseInt(obj.value);
				    console.log(c["obj.id"]);
			    } else{
				    c[obj.id] = parseInt(obj.value);
				    totalAsset += parseInt(obj.value);
				    total += parseInt(obj.value);
			    }
		        obj.value = "#" + obj.value;
		        showCalc = document.getElementById("justAssets")
		        showCalc.innerHTML = totalAsset;
		    }
		    else {
		    	if(obj.value == "") {
				obj.value = 0;
			    }
		        if(calc === "liabilities"){
		    	    if(c.hasOwnProperty(obj.id)) {
				        totalLiabilities -= parseInt(c[obj.id]);
				        total += parseInt(c[obj.id]);
				        c[obj.id] = parseInt(obj.value);
				        totalLiabilities += parseInt(obj.value);
				        total -= parseInt(obj.value);
				        console.log(c["obj.id"]);
			        } else{
				        c[obj.id] = parseInt(obj.value);
				        totalLiabilities += parseInt(obj.value);
				        total -= parseInt(obj.value);
			        }
		            obj.value = "#" + obj.value;
		            showCalc = document.getElementById("justLiabilities")
		            showCalc.innerHTML = totalLiabilities;
			    }
		    }
	        showCalc.style.display = "inline-block";
            document.getElementById("worth").innerHTML = total;
	    }
    }
}


>>>>>>> develop
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
		entry1.placeholder = " Enter asset here";
		entry2.placeholder = " Enter asset value";
<<<<<<< HEAD
=======
		entry2.setAttribute("id", count);
		count++
>>>>>>> develop
		entry2.setAttribute("onfocusout", "calculateWorth(this, 'assets')");
	} else if(oweOrOwn == "liabilities") {
		newEntry = document.getElementById("moreLiabilities");
		entry1.placeholder = " Enter liability here";
		entry2.placeholder = " Enter liability value";
<<<<<<< HEAD
=======
		entry2.setAttribute("id", count);
		count++;
>>>>>>> develop
		entry2.setAttribute("onfocusout", "calculateWorth(this, 'liabilities')");
	}
	entries.appendChild(entry1);
	entries.appendChild(entry2);
	entry1.classList.add("change");
	entry2.classList.add("change");
	entries.classList.add("entry");

	newEntry.parentNode.insertBefore(entries, newEntry);
}

function Reset() {
	total = 0;
	totalAsset = 0;
	totalLiabilities = 0;

	document.getElementById("worth").innerHTML = "";
	document.getElementById("justAssets").innerHTML = "";
	document.getElementById("justLiabilities").innerHTML = "";

	const changes = document.querySelectorAll(".change"); 
	for (let i = 0; i < changes.length; i++) {
		changes[i].value = "";
	}
<<<<<<< HEAD
=======

	for (const key in c) {
		c[key] = 0;
	}
	console.log(c);
>>>>>>> develop
}

