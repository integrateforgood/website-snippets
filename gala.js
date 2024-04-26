import { gsap } from 'https://cdn.skypack.dev/gsap?min'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger?min'
import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/+esm'
import SplitType from 'https://cdn.jsdelivr.net/npm/split-type@0.3.4/+esm'

gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// region Sliding Text

function slidingText(wrapper) {
	// Get the three text elements
	const firstText = wrapper.querySelector('[data-first-text]');
	const secondText = wrapper.querySelector('[data-second-text]');
	const thirdText = wrapper.querySelector('[data-third-text]');

	// Configure "state" variables
	let xPercent = -75;
	let targetDirection = -0.1; // Target direction based on velocity
	let currentDirection = -0.1; // Currently applied direction, to be interpolated

	// Configure the base speed
	const baseSpeed = 0.1; // Base movement speed

	// Set initial positions
	gsap.set([firstText, secondText, thirdText], {
		xPercent: -75,
	});

	// Split the text elements into words
	const split = new SplitType(wrapper, {
		types: 'words'
	});
	gsap.set(split.words, {
		y: '200%',
		opacity: 0
	});

	// Animate the words in
	gsap.to(split.words, {
		y: 0,
		opacity: 1,
		// End position (adjust this to match the desired end point)
		stagger: {
			each: 0.1,
			ease: 'power3.out'
		} // Stagger each word by 0.1 seconds
	});

	// Create a scroll trigger for the slider
	gsap.to(wrapper, {
		scrollTrigger: {
			trigger: document.body,
			scrub: 0.25,
			start: 'top',
			end: 'bottom',
			onUpdate: self => {
				// Determine the target direction based on velocity, ensuring a base speed
				const velocity = Math.min(Math.max(self.getVelocity() / 1000, -6), 6);
				targetDirection = Math.abs(velocity) > baseSpeed ? velocity * -1 : -baseSpeed;
			}
		},
		x: '-500px'
	});

	// Setup a variable to hold a reference to the timeout
	let scrollTimeout;

	// Function to be called when scroll stops
	function onScrollEnd() {
		// Adjust the targetDirection to baseSpeed if it's not already there
		if (Math.abs(targetDirection) !== baseSpeed) {
			gsap.to({}, {
				duration: 0.25,
				onComplete: () => {
					targetDirection = -baseSpeed;
				}
			});
		}
	}

	// Setup event listener to detect when scrolling stops
	window.addEventListener('scroll', () => {
		// Clear the previous timeout
		clearTimeout(scrollTimeout);

		// Set a new timeout
		scrollTimeout = setTimeout(onScrollEnd, 100); // 100 milliseconds of no scroll to consider it stopped
	});

	// Animation loop
	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}

		// Smoothly interpolate currentDirection towards targetDirection
		currentDirection = gsap.utils.interpolate(currentDirection, targetDirection, 0.1); // Adjust the smoothing factor as needed

		xPercent += currentDirection;
		gsap.set([firstText, secondText, thirdText], {
			xPercent: xPercent
		});
		requestAnimationFrame(animate);
	};

	// Start the animation loop
	targetDirection = -baseSpeed;
	requestAnimationFrame(animate);
}
const sliders = document.querySelectorAll('[data-slider]');
sliders.forEach(slider => slidingText(slider));

// endregion

// region Spinning Text
function spinningText(wrapper) {
	// Get the spinning text element
	const spinningText = wrapper.querySelector('.spinning-text');

	// Configure "state" variables for rotation
	let rotationDegrees = 0;
	let targetRotationSpeed = 0; // Target rotation speed based on scroll velocity
	let currentRotationSpeed = 0; // Currently applied rotation speed

	// Configure the base rotation speed
	const baseRotationSpeed = 0.1; // Base rotation speed degrees per frame

	// Set the initial rotation
	gsap.set(spinningText, {
		rotation: 0,
		transformOrigin: "center center"
	});

	// Create a scroll trigger for the spinner
	gsap.to(wrapper, {
		scrollTrigger: {
			trigger: document.body,
			scrub: 0.25,
			start: 'top',
			end: 'bottom',
			onUpdate: self => {
				// Determine the target rotation speed based on scroll velocity, ensuring a minimum speed
				const velocity = Math.min(Math.max(self.getVelocity() / 1000, -6), 6);
				targetRotationSpeed = Math.abs(velocity) > baseRotationSpeed ? velocity : baseRotationSpeed;
			}
		},
	});

	// Setup a variable to hold a reference to the timeout
	let scrollTimeout;

	// Function to be called when scroll stops
	function onScrollEnd() {
		// Adjust the targetRotationSpeed to baseRotationSpeed if it's not already there
		if (Math.abs(targetRotationSpeed) !== baseRotationSpeed) {
			gsap.to({}, {
				duration: 0.25,
				onComplete: () => {
					targetRotationSpeed = baseRotationSpeed;
				}
			});
		}
	}

	// Setup event listener to detect when scrolling stops
	window.addEventListener('scroll', () => {
		// Clear the previous timeout
		clearTimeout(scrollTimeout);

		// Set a new timeout
		scrollTimeout = setTimeout(onScrollEnd, 100); // 100 milliseconds of no scroll to consider it stopped
	});

	// Animation loop
	const animate = () => {
		// Smoothly interpolate currentRotationSpeed towards targetRotationSpeed
		currentRotationSpeed = gsap.utils.interpolate(currentRotationSpeed, targetRotationSpeed, 0.1); // Adjust the smoothing factor as needed

		rotationDegrees += currentRotationSpeed;
		gsap.set(spinningText, {
			rotation: rotationDegrees
		});
		requestAnimationFrame(animate);
	};

	// Start the animation loop
	requestAnimationFrame(animate);
}

const spinners = document.querySelectorAll('[data-spinner]');
spinners.forEach(spinner => spinningText(spinner));

// endregion

// region Image Reveal
function groupByRow(items) {
	const rows = {};
	items.forEach(item => {
		const offsetTop = item.offsetTop;
		if (rows[offsetTop]) {
			rows[offsetTop].push(item);
		} else {
			rows[offsetTop] = [item];
		}
	});
	return Object.values(rows); // Return an array of element groups (rows)
}

const items = document.querySelectorAll('[gsap-slide-reveal]');
const rows = groupByRow(items);
rows.forEach(row => {
	ScrollTrigger.create({
		trigger: row[0],
		start: 'top bottom',
		end: 'bottom top',
		onEnter: () => {
			ScrollTrigger.refresh();
			animateRow(row, 'down');
		},
		onEnterBack: () => {
			ScrollTrigger.refresh();
			animateRow(row, 'up');
		}
	});
});
function animateRow(row, direction) {
	// Decide the animation direction based on the scroll direction
	const yStart = direction === 'down' ? 200 : -200;
	gsap.killTweensOf(row); // Kill any ongoing animations to prevent conflicts

	// Apply staggered animation to the row
	gsap.fromTo(row, {
		opacity: 0,
		y: yStart
	}, {
		opacity: 1,
		y: 0,
		duration: 1,
		ease: 'power4.inOut',
		stagger: {
			each: 0.1,
			ease: 'power1.out'
		}
	});

	// Update 'data-last-direction' attribute for each item
	row.forEach(item => item.setAttribute('data-last-direction', direction));
}

// endregion

// region Community Heroes Slider
// Select all elements with the attribute [community-hero-slide]
const slides = document.querySelectorAll('[community-hero-slide]');
const progressBars = document.querySelectorAll('.community-hero-progress-bar'); // Select all progress bars

slides.forEach((slide, index) => {
	// Assuming each slide triggers its animation over a span of 100vh
	const triggerStart = `top+=${(window.innerHeight + (window.innerHeight*.25)) * index} top`;
	const triggerEnd = `+=${window.innerHeight + (window.innerHeight*.25)}`;
	const progressBar = progressBars[index]; // Corresponding progress bar for the slide
	if (!progressBar) {
		console.warn('No progress bar found for slide index:', index);
		return;
	}
	ScrollTrigger.create({
		trigger: '#community-heroes-slider',
		start: triggerStart,
		end: triggerEnd,
		toggleActions: 'play none none reverse',
		scrub: true,
		// For smooth progress updates
		onUpdate: self => {
			// Adjust progress bar width based on the current scroll position within the start and end points
			const progress = self.progress * 100; // Convert progress to percentage
			progressBar.style.width = `${progress}%`;
		}
	});

	// Ensure a progress bar exists for this slide
	if (!progressBar) {
		console.warn('No progress bar found for slide index:', index);
		return;
	}

	// We skip the first slide
	if (index === 0) return;

	// Create a GSAP animation for each slide
	gsap.to(slide, {
		scrollTrigger: {
			trigger: '#community-heroes-slider',
			// Adjust the start and end values dynamically
			start: triggerStart,
			end: triggerEnd,
			toggleActions: 'play none none reverse'
		},
		y: 0,
		// Target position
		duration: 1,
		// Animation duration
		ease: 'power4.inOut'
	});
});
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// region Sliding Text

function slidingText(wrapper) {
	// Get the three text elements
	const firstText = wrapper.querySelector('[data-first-text]');
	const secondText = wrapper.querySelector('[data-second-text]');
	const thirdText = wrapper.querySelector('[data-third-text]');

	// Configure "state" variables
	let xPercent = -75;
	let targetDirection = -0.1; // Target direction based on velocity
	let currentDirection = -0.1; // Currently applied direction, to be interpolated

	// Configure the base speed
	const baseSpeed = 0.05; // Base movement speed

	// Set initial positions
	gsap.set([firstText, secondText, thirdText], {
		xPercent: -75,
		opacity: 0
	});

	// Split the text elements into words
	const split = new SplitType(wrapper, {
		types: 'words'
	});
	gsap.set(split.words, {
		y: '200%'
	});

	// Animate the words in
	gsap.to(split.words, {
		y: 0,
		opacity: 1,
		// End position (adjust this to match the desired end point)
		stagger: {
			each: 0.1,
			ease: 'power3.out'
		} // Stagger each word by 0.1 seconds
	});

	// Create a scroll trigger for the slider
	gsap.to(wrapper, {
		scrollTrigger: {
			trigger: document.body,
			scrub: 0.25,
			start: 'top',
			end: 'bottom',
			onUpdate: self => {
				// Determine the target direction based on velocity, ensuring a base speed
				const velocity = Math.min(Math.max(self.getVelocity() / 1000, -6), 6);
				targetDirection = Math.abs(velocity) > baseSpeed ? velocity * -1 : -baseSpeed;
			}
		},
		x: '-500px'
	});

	// Setup a variable to hold a reference to the timeout
	let scrollTimeout;

	// Function to be called when scroll stops
	function onScrollEnd() {
		// Adjust the targetDirection to baseSpeed if it's not already there
		if (Math.abs(targetDirection) !== baseSpeed) {
			gsap.to({}, {
				duration: 0.25,
				onComplete: () => {
					targetDirection = -baseSpeed;
				}
			});
		}
	}

	// Setup event listener to detect when scrolling stops
	window.addEventListener('scroll', () => {
		// Clear the previous timeout
		clearTimeout(scrollTimeout);

		// Set a new timeout
		scrollTimeout = setTimeout(onScrollEnd, 100); // 100 milliseconds of no scroll to consider it stopped
	});

	// Animation loop
	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}

		// Smoothly interpolate currentDirection towards targetDirection
		currentDirection = gsap.utils.interpolate(currentDirection, targetDirection, 0.1); // Adjust the smoothing factor as needed

		xPercent += currentDirection;
		gsap.set([firstText, secondText, thirdText], {
			xPercent: xPercent
		});
		requestAnimationFrame(animate);
	};

	// Start the animation loop
	targetDirection = -baseSpeed;
	requestAnimationFrame(animate);
}
const sliders = document.querySelectorAll('[data-slider]');
sliders.forEach(slider => slidingText(slider));

// endregion

// region Image Reveal
function groupByRow(items) {
	const rows = {};
	items.forEach(item => {
		const offsetTop = item.offsetTop;
		if (rows[offsetTop]) {
			rows[offsetTop].push(item);
		} else {
			rows[offsetTop] = [item];
		}
	});
	return Object.values(rows); // Return an array of element groups (rows)
}

const items = document.querySelectorAll('[gsap-slide-reveal]');
const rows = groupByRow(items);
rows.forEach(row => {
	ScrollTrigger.create({
		trigger: row[0],
		start: 'top bottom',
		end: 'bottom top',
		onEnter: () => {
			ScrollTrigger.refresh();
			animateRow(row, 'down');
		},
		onEnterBack: () => {
			ScrollTrigger.refresh();
			animateRow(row, 'up');
		}
	});
});
function animateRow(row, direction) {
	// Decide the animation direction based on the scroll direction
	const yStart = direction === 'down' ? 200 : -200;
	gsap.killTweensOf(row); // Kill any ongoing animations to prevent conflicts

	// Apply staggered animation to the row
	gsap.fromTo(row, {
		opacity: 0,
		y: yStart
	}, {
		opacity: 1,
		y: 0,
		duration: 1,
		ease: 'power4.inOut',
		stagger: {
			each: 0.1,
			ease: 'power1.out'
		}
	});

	// Update 'data-last-direction' attribute for each item
	row.forEach(item => item.setAttribute('data-last-direction', direction));
}

// endregion

// region Community Heroes Slider
// Select all elements with the attribute [community-hero-slide]
const slides = document.querySelectorAll('[community-hero-slide]');
const progressBars = document.querySelectorAll('.community-hero-progress-bar'); // Select all progress bars

slides.forEach((slide, index) => {
	// Assuming each slide triggers its animation over a span of 100vh
	const triggerStart = `top+=${(window.innerHeight + (window.innerHeight*.25)) * index} top`;
	const triggerEnd = `+=${window.innerHeight + (window.innerHeight*.25)}`;
	const progressBar = progressBars[index]; // Corresponding progress bar for the slide
	if (!progressBar) {
		console.warn('No progress bar found for slide index:', index);
		return;
	}
	ScrollTrigger.create({
		trigger: '#community-heroes-slider',
		start: triggerStart,
		end: triggerEnd,
		toggleActions: 'play none none reverse',
		scrub: true,
		// For smooth progress updates
		onUpdate: self => {
			// Adjust progress bar width based on the current scroll position within the start and end points
			const progress = self.progress * 100; // Convert progress to percentage
			progressBar.style.width = `${progress}%`;
		}
	});

	// Ensure a progress bar exists for this slide
	if (!progressBar) {
		console.warn('No progress bar found for slide index:', index);
		return;
	}

	// We skip the first slide
	if (index === 0) return;

	// Create a GSAP animation for each slide
	gsap.to(slide, {
		scrollTrigger: {
			trigger: '#community-heroes-slider',
			// Adjust the start and end values dynamically
			start: triggerStart,
			end: triggerEnd,
			toggleActions: 'play none none reverse'
		},
		y: 0,
		// Target position
		duration: 1,
		// Animation duration
		ease: 'power4.inOut'
	});
});

// endregion

// region Hide Video
// Select the element you want to show/hide
const landingVideo = document.querySelector('#landing-video-container');

// Create a ScrollTrigger instance for showing/hiding the element
ScrollTrigger.create({
	trigger: document.body,
	start: 'top -200%', // Start trigger at 100% of the viewport height
	end: 'top -200%', // End trigger at the bottom of 100% of the viewport height
	onEnter: () => gsap.to(landingVideo, { autoAlpha: 0 }), // Hide element when scrolling down past 200vh
	onLeaveBack: () => gsap.to(landingVideo, { autoAlpha: 1 }), // Show element when scrolling back up past 200vh
})
//endregion

// endregion

// region Hide Video
// Select the element you want to show/hide
const landingVideo = document.querySelector('#landing-video-container');

// Create a ScrollTrigger instance for showing/hiding the element
ScrollTrigger.create({
	trigger: document.body,
	start: 'top -200%', // Start trigger at 100% of the viewport height
	end: 'top -200%', // End trigger at the bottom of 100% of the viewport height
	onEnter: () => gsap.to(landingVideo, { autoAlpha: 0 }), // Hide element when scrolling down past 200vh
	onLeaveBack: () => gsap.to(landingVideo, { autoAlpha: 1 }), // Show element when scrolling back up past 200vh
})
//endregion
