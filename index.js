/*
Insert the following code to get this to work:

<div id="dbm-injection"></div>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/DeadlyBossMods/_wiki/index.js"></script>
*/

document.addEventListener("DOMContentLoaded", () => {
	console.log("Loaded DBM content injector");

	const params = new URLSearchParams(window.location.hash.replace("#","?"));
	const lookup = {
		28:	"Forum-Access-&-Discord-Info",
		405:	"DBM-Status-Update-(Updated-Oct-2nd,-20)",
		428:	"DBM-Supporter-Benefits-Info",
		1219:	"DBM-Classic-1.13.6-Released"
	}

	if(params.has("p")) {
		const page = params.get("p");
		if(page in lookup) {
			fetch("https://raw.githubusercontent.com/wiki/DeadlyBossMods/_wiki/" + lookup[page] + ".md")
				.then(response => response.text())
				.then(html => {
					const div = document.createElement("div"),
					      elem = document.getElementById("dbm-injection");
					div.innerHTML = "<h3>" + lookup[page].replaceAll("-", " ") + "</h3>" + marked(html) + "<hr>";
					elem.appendChild(div)
					elem.scrollIntoView({behavior: 'smooth'});
				});
		}
	}
});
