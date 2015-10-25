var itemId = 0;


$(document).ready(function() {
	alert("SHOPPING LIST")
	$(".item").keydown(function (e) {
		if (e.which==13) {
			console.log('enter pressed!');
			 //listItemMaker()
		} else {
			console.log(e.which);
		}
	});

});

function addEntry() {
	var price = parseFloat($(".itemPrice").val());
	var listItemText = String($('.item').val());

	if (isNaN(price)) {
		alert("You need to enter numbers into the price field");
		return
	} else if (listItemText.length === 0) {
		alert("Add an entry to the item field");
	} else {
		console.log("both filled");
		listItemGenerator(price);
		updateTotalPrice();
	};
}

function listItemGenerator(price) {
	var listItemText = String($('.item').val());
	console.log(listItemText)
	$('.content').append($('<div/>').attr("id", ++itemId))
	$('.content > #' + String(itemId))
		.append($('<p/>').attr("class", "itemEntry").text(listItemText))
		.append($('<p/>').attr("class", "priceEntry").text('$' + price));
	$('.item').val('');
	$('.itemPrice').val('');
	addStrikeButton($('#' + itemId));	
	addRemoveButton($('#' + itemId));
}

function addRemoveButton(item) {
	item.append($('<button/>').attr("class", "remove").text("remove").click(function() {
		$(this).parent().remove()
		updateTotalPrice();
		})
	);
}

function addStrikeButton(item) {
	item.append($('<button/>').attr("class", "strike").text("strike").click(function() {
		if ($(this).siblings('p').css("text-decoration") === "line-through") {
			$(this).siblings('p').css("text-decoration", "none");
		} else {
			$(this).siblings('p').css("text-decoration", "line-through");
		}
		})
	)
}

function updateTotalPrice() {
	var priceCalc = 0;
	console.log("priceEntry: " + $('.priceEntry').length);
	$('.priceEntry').each(function() {
		var priceString = $(this).text().substr(1, $(this).text().length - 1)
		priceCalc = parseFloat(priceString) + priceCalc;
		console.log(priceCalc);
	});
	$("#totalPrice").text(' $' + priceCalc);
}

//exception handling
//need to remedy the id issue


	// $('.content').append($('<div><p></p></div>').attr("id", "listItem").text($('.addToList').val()))
	// 	.append(
	// 		$('<button/>').attr("id", $('addToList').val()).text('cross out')
	// 		)
	// 	.append(
	// 		$('<button/>').attr("id", "remove").text('remove')
	// 		);
	// 	$('.addToList').val('');


