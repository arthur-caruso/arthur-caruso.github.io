function run(event) {
	if (event.key === "Enter") {
		event.preventDefault();

		var command = document.querySelector("#textbox").value;

		switch (command) {
			case "help":
				view = "./help.html";
				break;

			case "run":
				view = "./run.html";
				break;

			case "run past.exe":
				view = "./past.html";
				break;

			case "run present.exe":
				view = "./present.html";
				break;

			case "run future.exe":
				view = "./future.html";
				break;

			case "list":
				view = "./list.html";
				break;

			default:
				view = "./unknown.html";
				break;
		}

		fetch(view)
			.then(response => response.text())
			.then(text => document.getElementById("content").innerHTML += text);
		command.value = "";
	}
}

var textbox = document.querySelector("#textbox");
textbox.addEventListener("keypress", run);