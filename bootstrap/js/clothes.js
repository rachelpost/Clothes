 function showAlert(){
	alert("Photo loading!");
	 }


function showOutfit(){
	try {

		var outfitDiv= document.getElementById("outfitDiv");
		while (outfitDiv.hasChildNodes()) {
			outfitDiv.removeChild(outfitDiv.lastChild);
		}



		
		var dateFromInput = document.getElementById("dateInput").value;

		addOutfitDivHeader(dateFromInput);

		
		
		
		addItemToOutfit("White Blouse","images/whiteBlouse.jpeg" );

		addItemToOutfit("Jeans","images/jeans.jpeg" );
	}
	catch (e) {
		alert(e);
	}
}

function addOutfitDivHeader(txt){

	var outfitDiv= document.getElementById("outfitDiv");
	
	var oldHeader = document.getElementById("outfitHeader");

	if(oldHeader){
		outfitDiv.removeChild(oldHeader);
	}

	var dateText = document.createElement("h3");
	dateText.innerHTML="Outfit for " + txt;
	dateText.id="outfitHeader";

	var outfitDiv= document.getElementById("outfitDiv");
	outfitDiv.insertBefore(dateText, outfitDiv.firstChild);
}

function addItemToOutfit(itemName, itemSrc){

	var itemExists = document.getElementById(itemName);
	if(itemExists) return 0;
	
	var item1Div = document.createElement("div");
	item1Div.id=itemName;
	
	var item1 = document.createElement("img");
	item1.src=itemSrc;
	item1.className="itemImg";
	item1Div.appendChild(item1);

	var deleteButton = document.createElement("button");
	deleteButton.innerHTML="<i class=\"icon-remove\"></i>";
	deleteButton.onclick=function(){
		removeItemFromOutfit(itemName)
		};
	
	item1Div.appendChild(deleteButton);

	var outfitDiv= document.getElementById("outfitDiv");
	outfitDiv.appendChild(item1Div);
}

function removeItemFromOutfit(itemName){

	var outfitDiv= document.getElementById("outfitDiv");

	var itemDiv = document.getElementById(itemName);

	outfitDiv.removeChild(itemDiv);
}

function addSelectedItemsToOutfit(){
	try {
		var table = document.getElementById("wardrobeTable");
		var rowCount = table.rows.length;

		for ( var i = 0; i < rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[11].childNodes[0];
			if (null != chkbox && true == chkbox.checked) {
				var itemName = row.cells[1].childNodes[0].nodeValue;
				//var photoSource = row.cells[0].childNodes[0].getAttribute("src");
				var imgChild = row.cells[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1];
				
				var photoSource = imgChild.getAttribute("src");
				
				addItemToOutfit(itemName, photoSource);
				
			}

		}
	} catch (e) {
		alert(e);
	}

	clearCheckboxes();
}

function clearCheckboxes(){
	try {
		var table = document.getElementById("wardrobeTable");
		var rowCount = table.rows.length;

		for ( var i = 0; i < rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[11].childNodes[0];
			if (null != chkbox && true == chkbox.checked) {
				chkbox.checked=false;
				
			}

		}
	} catch (e) {
		alert(e);
	}
}

function createAddPhotoModal(rowNumber){
	var modal = document.createElement("div");
	modal.class="modal";
	modal.id="photoAddModal" + rowNumber;
	modal.tabIndex="-1";
	modal.role="dialog";

	var modalBody = document.createElement("div");
	modalBody.class="modal-body";

	var browse = document.createElement("input");
	browse.type="file";
	browse.name="browseToPhoto";

	modalBody.appendChild(browse);
	modal.appendChild(modalBody);



	return modal;
}
 

 function addPhotoToRow(rowNumber){
	 try {
			var table = document.getElementById("wardrobeTable");
			var rowCount = table.rows.length;
			var row = table.rows[rowNumber];
			var photoCell = row.cells[0].childNodes[0];
			if (null != photoCell) {
				photoCell.innerHTML="";
				var photo = document.createElement("img");
				photo.src="images/jeans.jpeg";
				photoCell.appendChild(photo);
			}
		} catch (e) {
			alert(e);
		}
}

function addRow(tableID) {

	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var cellPhoto = row.insertCell(0);


	var photoDiv = getFileUploadDiv();
		
	cellPhoto.innerHTML = photoDiv;

	var cellName = row.insertCell(1);
	cellName.innerHTML = "Name";
	cellName.setAttribute("contenteditable", "true");
	
	var cellDesc = row.insertCell(2);
	cellDesc.innerHTML = "Desc";
	cellDesc.setAttribute("contenteditable", "true");
	
	var cellColor = row.insertCell(3);
	cellColor.innerHTML = "Color";
	cellColor.setAttribute("contenteditable", "true");
	
	var cellCategory = row.insertCell(4);
	cellCategory.innerHTML = "Category";
	cellCategory.setAttribute("contenteditable", "true");
		
	var cellDateAdded = row.insertCell(5);
	cellDateAdded.innerHTML = "31-Oct-2012";
	cellDateAdded.setAttribute("contenteditable", "false");
	
	var cellCost = row.insertCell(6);
	cellCost.innerHTML = "Cost";
	cellCost.setAttribute("contenteditable", "true");
	
	var cellStore = row.insertCell(7);
	cellStore.innerHTML = "Store";
	cellStore.setAttribute("contenteditable", "true");
	
	var cellNoWorn = row.insertCell(8);
	cellNoWorn.innerHTML = "#Worn";
	cellNoWorn.setAttribute("contenteditable", "false");
	
	var cellCostPerWear = row.insertCell(9);
	cellCostPerWear.innerHTML = "CostPerWear";
	cellCostPerWear.setAttribute("contenteditable", "false");
	
	var cellLastWorn = row.insertCell(10);
	cellLastWorn.innerHTML = "Last Worn";
	cellLastWorn.setAttribute("contenteditable", "false");


	 var cellSelect = row.insertCell(11);
     var selectElement = document.createElement("input");
     selectElement.type = "checkbox";
     cellSelect.appendChild(selectElement);
}

function deleteRows(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for ( var i = 0; i < rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[11].childNodes[0];
			if (null != chkbox && true == chkbox.checked) {
				table.deleteRow(i);
				rowCount--;
				i--;
			}

		}
	} catch (e) {
		alert(e);
	}
}



function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth(); //January is 0!

	var yyyy = today.getFullYear();
	
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
		 	             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	
    var month = monthNames[mm];
	
	if(dd<10){dd='0'+dd} 
	if(mm<10){mm='0'+mm} 
	
	today = dd + '-' + month + '-' + yyyy;

	return today;
}

function preparePage(){
	var today = getCurrentDate();

	var dateInput = document.getElementById("dateInput");
	dateInput.value=today;

	showOutfit();
}

function getCheckedNames(){	
	var result ="<br />";
	try {
		
		var table = document.getElementById("wardrobeTable");
		var rowCount = table.rows.length;

		for ( var i = 0; i < rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[11].childNodes[0];
			if (null != chkbox && true == chkbox.checked) {
				var itemName = row.cells[1].childNodes[0].nodeValue;				
				result += itemName + "<br />";				
			}
		}
	} catch (e) {
		alert(e);
	}

	return result;
}

function closeDeleteDialog() {
	$('#deleteConfirmationDialog').modal('hide'); 
};

function closeAddItemDialog() {
	$('#addNewItemDialog').modal('hide'); 
};

function getFileUploadDiv(){
	
	
	var result = "<div class=\"fileupload fileupload-new\" data-provides=\"fileupload\">"+
    "<div class=\"fileupload-preview thumbnail\" style=\"max-width: 100px; max-height: 100px; width: 100px; height: 100px;\"></div>"+
    "<div><div class=\"btn btn-file\"><span class=\"fileupload-new\"><i class=\"icon-pencil\"></i></span>"+
    "<span class=\"fileupload-exists\"><i class=\"icon-pencil\"></i></span><input type=\"file\" /></div>"+
    "<a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\"><i class=\"icon-remove\"></i></a>"+
    "</div></div>";
	
	return result;
}

