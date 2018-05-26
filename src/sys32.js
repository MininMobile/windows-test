// Program Files

var apps = {
	"0":"explorer"
}

var appdata = {
	"explorer":{
		title:"Explorer",
		meta:{
			author:"Microsoft",
			description:"Browser your files"
		},
		init:(w) => { w.window.classList.add("explorer") },
		content:`<center><h1>Files, files, files...</h1><center>`
	}
}

// Windows

class Window {
	constructor(appid = "0") {
		const body = document.body;

		this.appid = appid;
		this.appdata = appdata[apps[this.appid]];

		this.window = document.createElement("div");
		this.window.classList.add("window");
		
		this.titlebar = document.createElement("div");
		this.titlebar.classList.add("window-title");
		this.titlebar.onmousedown = (e) => windowDragEvent(e, this.window);

		this.content = document.createElement("div");
		this.content.classList.add("window-content");
		this.content.innerHTML = this.appdata.content;
		
		if (apps[appid]) this.window.classList.add(apps[appid]);

		this.window.appendChild(this.titlebar);
		this.window.appendChild(this.content);
		body.appendChild(this.window);

		this.appdata.init(this);
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