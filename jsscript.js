var slider = document.getElementById("dayRange");
var output = document.getElementById("dayDisplay");
output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
output.innerHTML = this.value;
} 