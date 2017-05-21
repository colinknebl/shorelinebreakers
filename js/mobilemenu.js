// hide and show menu on mobile

function show() {

	var bars = document.getElementById("bars");
	var navList = document.getElementById("mobile-menu-container");
	var x = document.getElementById("close");

	if (navList.className === "hide") {
		navList.className = "show";
	} else {
		navList.className = "hide";
	}

	bars.classList.toggle("hidden");
	x.classList.toggle("hidden");

}

