const links = document.querySelectorAll('.mobile-nav a');
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const hero_btn = document.querySelector('.nav-container a');

window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	hero_btn.addEventListener('click', function() {
		mobile_menu.classList.remove('is-active');
		menu_btn.classList.remove('is-active');
	})
}

links.forEach((element) => {
    element.addEventListener('click', () => {
		mobile_menu.classList.remove('is-active');
		menu_btn.classList.toggle('is-active');
    })
})
