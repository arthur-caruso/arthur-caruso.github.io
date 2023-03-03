const contentDiv = document.getElementById("content");

function run(event) {
	if (event.key === "Enter") {
		event.preventDefault();

		var command = document.querySelector("#textbox").value;

		switch (command) {
			case "help":
				view = "./help.html";
				break;

			case "autodestruct":
				view = "./forbidden.html";
				break;

			case "read":
				view = "./read.html";
				break;

			case "read diary_entry1.txt":
				view = "./past.html";
				contentDiv.removeAttribute('class');
				contentDiv.classList.toggle('past-theme');
				break;

			case "read diary_entry35.txt":
				view = "./present.html";
				contentDiv.removeAttribute('class');
				contentDiv.classList.toggle('present-theme');
				break;

			case "read diary_entry126.txt":
				view = "./future.html";
				contentDiv.removeAttribute('class');
				contentDiv.classList.toggle('future-theme');
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

		document.getElementById("prompt").reset();
	}
}

var textbox = document.querySelector("#textbox");
textbox.addEventListener("keypress", run);