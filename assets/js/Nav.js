// The debounce function receives our function as a parameter
const debounce = (fn) => {
	// This holds the requestAnimationFrame reference, so we can cancel it if we wish
	let frame;

	// The debounce function returns a new function that can receive a variable number of arguments
	return (...params) => {
		// If the frame variable has been defined, clear it now, and queue for next frame
		if (frame) {
			cancelAnimationFrame(frame);
		}

		// Queue our function call for the next frame
		frame = requestAnimationFrame(() => {
			// Call our function and pass any params we received
			fn(...params);
		});
	};
};

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
	document.documentElement.dataset.scroll = window.scrollY;
};

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener("scroll", debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();
//Desktop Nav

const Toggle = document.getElementById("mainDesktopNavTouchToggle");
const NavToggle = () => {
	const Frame = document.getElementById("AppFrame");

	const Toggle = document
		.getElementById("mainDesktopNavTouchToggle")
		.querySelector("span > i");
	Toggle.classList.toggle("rotate_180");
	const navigationItems = document.querySelectorAll("#navigation .nav-item");
	const logo_1x1 = document.getElementById("logo_1x1");
	const logo_3x1 = document.getElementById("logo_3x1");
	const delay = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};

	if (Frame.classList.contains("expanded")) {
		navigationItems.forEach(async (navItem) => {
			// navItem.querySelector('.label').classList.add('opacity_10');
			// navItem.querySelector('.label').classList.add('scale_X-100 ');
			let label = navItem.querySelector(".label");
			label.classList.remove("opacity_10");
			await delay(200);
			navItem.classList.remove("m-r_3");
			navItem.querySelector("a").classList.add("justify_center");
			navItem.querySelector("a").classList.remove("justify_start");
			label.classList.add("display_none");
			Frame.classList.remove("expanded");
			logo_1x1.classList.remove("display_none");
			logo_3x1.classList.add("display_none");
			return;
		});
	}
	if (!Frame.classList.contains("expanded")) {
		navigationItems.forEach(async (navItem) => {
			navItem.querySelector("a").classList.remove("justify_center");
			navItem.querySelector("a").classList.add("justify_start");
			let label = navItem.querySelector(".label");
			Frame.classList.add("expanded");
			label.classList.remove("display_none");
			logo_1x1.classList.add("display_none");
			logo_3x1.classList.remove("display_none");
			navItem.classList.add("m-r_3");
			await delay(600);
			label.classList.add("opacity_10");
			return;
		});
	}
};
Toggle.addEventListener("click", NavToggle);
