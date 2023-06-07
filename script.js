console.log(
	"%cYT ad auto-skip started",
	"color:blue;font-family:system-ui;font-size:30px;-webkit-text-stroke: 0.5px greenyellow;font-weight:bold"
);

setInterval(() => {
	const obj = document.getElementsByClassName("ytp-ad-text");
	if (obj.length > 0) {
		document.getElementsByClassName('html5-main-video')[0].currentTime = document.getElementsByClassName('html5-main-video')[0].duration;
		document.getElementsByClassName("ytp-ad-skip-button")[0].click();
		console.log(
			"%cAd Skipped ⏩",
			"color:red;font-family:system-ui;font-size:20px;-webkit-text-stroke: 0.5px black;font-weight:bold"
		);
	}
}, 1000);
