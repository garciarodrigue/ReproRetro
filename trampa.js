document.oncopy = event => {
	event.preventDefault();
	event.clipboardData.setData('text/plain', 'Mejor Nel Hacelo vos\n');
}