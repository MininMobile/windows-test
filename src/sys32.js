var apps = {
	"0":"explorer"
}

class Window {
	constructor(appid = "0") {
		const body = document.body;

		this.window = document.createElement("div");
		this.window.classList.add("window");
		
		this.titlebar = document.createElement("div");
		this.titlebar.classList.add("window-title");
		this.titlebar.onmousedown = (e) => windowDragEvent(e, window);
		
		if (apps[appid]) this.window.classList.add(apps[appid]);

		this.window.appendChild(this.titlebar);
		body.appendChild(this.window);
	}
}

function addWindow() {
	return new Window();
}