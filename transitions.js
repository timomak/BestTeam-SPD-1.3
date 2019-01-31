const $log = document.querySelector('.log');

const $copy = document.querySelector('.copy');

const test = { val: 0 };
const t = new TweenLite(test, 10, {
	val: 1,
	ease: Linear.easeNone,
	paused: true,
	onUpdate: handleScroll
});

function handleScroll() {
	console.log(test.val);
}

TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);

document.addEventListener('scroll', function() {
	const y = window.scrollY;
	
	// transitions have a start and a duration
	// at 200px, transition for 300px;
	const start = 100;
	const duration = 300;
	
	const progress = Math.min(1, Math.max(0, (y - start) / duration));
	
	$log.innerHTML = `${y} : ${progress.toFixed(2)} : ${test.val.toFixed(2)}`;
	
	new TweenLite($copy, 1, {
		opacity: progress,
		y: 200 * (1 - progress)
	});
	
	// console.log('SET PROGRESS');
	// t.progress(progress);
});

