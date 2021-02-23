/*
Insert the following code to get this to work:

<div id="dbm-injection"></div>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://raw.githubusercontent.com/DeadlyBossMods/_wiki/master/index.js"></script>
*/
const params = new URLSearchParams(window.location.search),
	elem = document.getElementById("dbm-injection");

const lookup = {
	1219:	"DBM-Classic-1.13.6-Released"
}

if(params.has("p") && params.has("f")) { // Has both a forum and a page tag
	const page = params.get("p");
	if(page in lookup) {
		fetch("https://raw.githubusercontent.com/wiki/DeadlyBossMods/_wiki/" + lookup[page] + ".md").then(function(response) {
			return response.text();
		}).then(function(html) {
			const div = document.createElement("div");
			div.innerHTML = marked(html);
			elem.appendChild(div)
		});
	}
}