        /* бургер меню */
const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});
		/* закрытие меню после перехода к секции */
menu.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		close.classList.toggle('active');
		menu.classList.toggle('active');
	});
});



			/* SmoothScroll */
new SmoothScroll('a[href*="#"]', {
	speed: 400
});
			/* пересчет процентов */
const counters = document.querySelectorAll ('.skills__ratings-counter'),
	lines = document.querySelectorAll ('.skills__ratings-line span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});
