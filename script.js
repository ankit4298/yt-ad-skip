console.log(
	"%cYT ad auto-skip started",
	"color:blue;font-family:system-ui;font-size:30px;-webkit-text-stroke: 0.5px greenyellow;font-weight:bold"
);

setInterval(() => {
	const obj = document.getElementsByClassName("ytp-ad-skip-button");
	if (obj.length > 0) {
		obj[0].click();
		console.log(
			"%cAd Skipped ⏩",
			"color:red;font-family:system-ui;font-size:20px;-webkit-text-stroke: 0.5px black;font-weight:bold"
		);
	}
}, 1000);
