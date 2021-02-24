/*
Insert the following code to get this to work:

<div id="dbm-injection"></div>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://raw.githubusercontent.com/DeadlyBossMods/_wiki/master/index.js"></script>
*/

document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.hash.replace("#","?"));
	const lookup = {
		1219:	"DBM-Classic-1.13.6-Released"
	}

	if(params.has("p")) {
		const page = params.get("p");
		if(page in lookup) {
			fetch("https://raw.githubusercontent.com/wiki/DeadlyBossMods/_wiki/" + lookup[page] + ".md")
				.then(response => response.text())
				.then(html => {
					const div = document.createElement("div");
					div.innerHTML = marked(html);
					document.getElementById("dbm-injection").appendChild(div)
				});
		}
	}
});
