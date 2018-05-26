// Program Files

var apps = {
	"0":"explorer"
}

// Windows

class Window {
	constructor(appid = "0") {
		const body = document.body;

		this.window = document.createElement("div");
		this.window.classList.add("window");
		
		this.titlebar = document.createElement("div");
		this.titlebar.classList.add("window-title");
		this.titlebar.onmousedown = (e) => windowDragEvent(e, this.window);
		
		if (apps[appid]) this.window.classList.add(apps[appid]);

		this.window.appendChild(this.titlebar);
		body.appendChild(this.window);
	}
}

/**
 * @param {MouseEvent} e
 * @param {Element} window
 */
function windowDragEvent(e, window) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	// Get Mouse Position on Startup
	pos3 = e.clientX;
	pos4 = e.clientY;

	// Attach Event Listeners
	document.onmouseup = closeDrag;
	document.onmousemove = elementDrag;

	/** @param {MouseEvent} e */
	function elementDrag(e) {
		// Calculate New Mouse Position
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		// Move to New Mouse Position
		window.style.top = (window.offsetTop - pos2) + "px";
		window.style.left = (window.offsetLeft - pos1) + "px";
	}

	function closeDrag() {
		// Detach Event Listeners
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

// Misc

function addWindow() {
	return new Window();
}