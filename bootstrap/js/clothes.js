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
<!--	dateText.className="";-->

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
				var photoSource = row.cells[0].childNodes[0].getAttribute("src");

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
//<!--		var selectPhotoFile = document.createElement("button");-->
//<!--		 selectPhotoFile.onclick = (function() {-->
//<!--		      return function() { -->
//<!--		    	  addPhotoToRow(rowCount + '');-->
//<!--		      }-->
//<!--		   })();		   -->
//<!--		 selectPhotoFile.innerHTML="Add Photo";-->
//<!--         cellPhoto.appendChild(selectPhotoFile);-->



//<!--		var photoModal = createAddPhotoModal(rowCount);-->
//<!--		var allModals = document.getElementById("allModals");-->
//<!--		allModals.appendChild(photoModal);-->
//<!--		-->
		var addFileButton = document.createElement("a");
//<!--		addFileButton.href="#" + photoModal.id;-->
		addFileButton.role="button";
		addFileButton.class="btn";
//<!--		addFileButton.setAttribute("data-toggle","modal");-->
	addFileButton.innerHTML="Add Photo";
	cellPhoto.appendChild(addFileButton);

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
	cellDateAdded.innerHTML = "DateAdded";
	cellDateAdded.setAttribute("contenteditable", "true");
	
	var cellCost = row.insertCell(6);
	cellCost.innerHTML = "Cost";
	cellCost.setAttribute("contenteditable", "true");
	
	var cellStore = row.insertCell(7);
	cellStore.innerHTML = "Store";
	cellStore.setAttribute("contenteditable", "true");
	
	var cellNoWorn = row.insertCell(8);
	cellNoWorn.innerHTML = "#Worn";
	cellNoWorn.setAttribute("contenteditable", "true");
	
	var cellCostPerWear = row.insertCell(9);
	cellCostPerWear.innerHTML = "CostPerWear";
	cellCostPerWear.setAttribute("contenteditable", "true");
	
	var cellLastWorn = row.insertCell(10);
	cellLastWorn.innerHTML = "LastWorn";
	cellLastWorn.setAttribute("contenteditable", "true");


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
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;

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

