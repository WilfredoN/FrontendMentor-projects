let viewsPrice = document.getElementsByClassName("pageCost");
let views = document.getElementById("pageviews");
views = views.querySelector("h2");
let pricePerMonth = document.getElementById("cost");
pricePerMonth = pricePerMonth.querySelector("span");
let rangeSlider = document.getElementById("sliderRange");
let discount = document.getElementById("discount");
console.log(viewsPrice);
console.log(views);
console.log(pricePerMonth);
console.log(rangeSlider);
let priceSet = () => {
	if (rangeSlider.value < 10) {
		views.innerHTML = "10K pageviews";
		pricePerMonth.innerHTML = "$8.00";
	} else if (rangeSlider.value <= 30) {
		views.innerHTML = "50K pageviews";
		pricePerMonth.innerHTML = "$12.00";
	} else if (rangeSlider.value <= 50) {
		views.innerHTML = "100K pageviews";
		pricePerMonth.innerHTML = "$16.00";
	} else if (rangeSlider.value <= 70) {
		views.innerHTML = "500K pageviews";
		pricePerMonth.innerHTML = "$24.00";
	} else if (rangeSlider.value <= 100) {
		views.innerHTML = "1M pageviews";
		pricePerMonth.innerHTML = "$36.00";
	}
	//	console.log(rangeSlider.value);
};
setInterval(priceSet);
let matchMedia = window.matchMedia("(max-width: 900px)");
setInterval(() => {
	if (matchMedia.matches) {
		discount.innerHTML = "25%";
		discount.style.width = "3.5em";
	} else {
		discount.innerHTML = "25% discount";
		discount.style.width = "7.5em";
	}
}, 0);
