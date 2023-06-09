// rotation
let is_rotated = false;

const rotateButtons = document.querySelectorAll('.rotate-button');
const wrapper = document.getElementById("wrapper");
const front = document.getElementById("front");
const back = document.getElementById("back");

let wrapperScale = 1;

rotateButtons.forEach(bt => bt.addEventListener('click', e => {

	is_rotated = !is_rotated;

	wrapper.style.transform = "scaleX(0)";
	setTimeout(() => {
		if (is_rotated){
			front.style.display = "none";
			back.style.display = "block";
		} else {
			front.style.display = "block";
			back.style.display = "none";
		}
		wrapper.style.transform = "scaleX("+wrapperScale+")";
	}, 350);
}));

// scale wrapper < 22em
function resizeWrapper() {
  if (window.innerWidth < 22 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    wrapperScale = window.innerWidth / (22 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    wrapper.style.transform = 'scale(' + wrapperScale + ')';
  } else {
    wrapper.style.transform = 'scale(1)';
  }
}

// Call the function on page initialization
window.addEventListener('DOMContentLoaded', resizeWrapper);

// Call the function on window resize
window.addEventListener('resize', resizeWrapper);


console.log("🍔🌭🍔🌭🍔🌭🌭🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🌭🍔🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🌭🍔🍔🌭 🍔🌭🍔🍔🍔🌭🍔🌭 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🍔🍔 🍔🌭🍔🍔🌭🌭🌭🌭 🍔🌭🍔🌭🍔🌭🌭🌭 🍔🍔🌭🍔🍔🍔🍔🍔 🍔🌭🍔🌭🍔🍔🌭🌭 🍔🌭🍔🌭🍔🌭🍔🌭 🍔🌭🍔🍔🍔🍔🌭🍔 🍔🌭🍔🍔🌭🌭🍔🌭 🍔🌭🍔🍔🍔🍔🍔🌭 🍔🌭🍔🌭🍔🍔🌭🍔 🍔🌭🍔🍔🌭🍔🍔🌭 🍔🌭🍔🍔🌭🌭🌭🍔 🍔🌭🍔🍔🍔🌭🍔🌭");//why?