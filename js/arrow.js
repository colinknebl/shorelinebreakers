// Changes the arrow on the landing page to the text 
// "scroll over" when the arrow is hovered over. 


function swap() {

	var arrow = document.getElementById("arrow");
	var text = document.getElementById("scroll-text");

	//alert('check, check'); this works
	//console.log("hi"); this works
	arrow.className = "hidden"; 
	text.className = "reveal";
}

function replace() {

	var arrow = document.getElementById("arrow");
	var text = document.getElementById("scroll-text");

	arrow.className = "reveal";
	text.className = "hidden";

}