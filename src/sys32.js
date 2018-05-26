var apps = {
	"0":"explorer"
}

class Window {
	constructor(appid = "0") {
		const body = document.body;

		body.appendChild(document.createElement("div"));
	}
}

function addWindow() {
	return new Window();
}