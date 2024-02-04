// rotation
let is_rotated = false;

const rotateButtons = document.querySelectorAll('.rotate-button');
const wrapper = document.getElementById("wrapper");
const front = document.getElementById("front");
const back = document.getElementById("back");

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
		wrapper.style.transform = "scaleX(1)";
	}, 350);
}));

// open-close-folder
const openCloseFolders = document.querySelectorAll('.open-close-folder');

openCloseFolders.forEach(bt => bt.addEventListener('mouseenter', e => {
	bt.querySelector('i').classList.remove("fa-folder");
	bt.querySelector('i').classList.add("fa-folder-open");
}));

openCloseFolders.forEach(bt => bt.addEventListener('mouseout', e => {
	bt.querySelector('i').classList.remove("fa-folder-open");
	bt.querySelector('i').classList.add("fa-folder");
}));


// vertical center
function adjustMarginTop() {
	const windowHeight = window.innerHeight;
	const resizer = document.getElementById('resizer');
	const resizerHeight = resizer.clientHeight;
	const marginTopValue = (windowHeight - resizerHeight) / 2;
	resizer.style.marginTop = marginTopValue + 'px';
}
adjustMarginTop();
window.addEventListener('resize', adjustMarginTop);

// (*^▽^*)
console.log("🍔🌭🍔🍔🍔🌭🍔🍔🍔🌭🌭🍔🌭🌭🌭🌭🍔🌭🌭🍔🌭🌭🌭🍔🍔🍔🌭🍔🍔🌭🌭🌭🍔🌭🌭🌭🍔🌭🍔🍔🍔🍔🌭🍔🍔🍔🍔🍔🍔🌭🌭🌭🍔🌭🍔🍔🍔🌭🌭🍔🌭🍔🍔🍔🍔🌭🌭🍔🍔🌭🍔🌭🍔🍔🌭🍔🍔🍔🍔🍔🍔🌭🌭🌭🌭🍔🍔🌭🍔🌭🌭🍔🍔🌭🍔🌭🍔🌭🌭🍔🌭🌭🍔🍔🍔🌭🌭🍔🌭🌭🍔🍔🍔🌭🌭🍔🌭🌭🌭🌭🍔🌭🌭🌭🍔🌭🌭🌭🍔🍔🌭🍔🍔🍔🍔🍔🍔🌭🌭🌭🍔🍔🌭🌭🍔🌭🌭🍔🌭🌭🌭🍔🍔🌭🌭🍔🌭🌭🌭🌭🍔🌭🌭🌭🍔🌭🌭🌭");
