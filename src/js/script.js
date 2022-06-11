const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});