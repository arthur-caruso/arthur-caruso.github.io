function run() {
	var command = document.querySelector("#command").value;
	switch (command) {
		case "help":
			view = "./help.html";
			break;
		case "test":
			view = "./test.html";
			break;
		default:
			view = "./unknown.html";
			break;
	}

	fetch(view)
		.then(response => response.text())
		.then(text => document.getElementById("content").innerHTML = text);
	command.value = "";
}

var button = document.querySelector("#button");
button.addEventListener("click", run);