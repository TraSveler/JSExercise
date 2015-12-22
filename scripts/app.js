document.getElementById( 'allPic' ).addEventListener( 'click', function (ev) {

    if (ev.target.tagName === 'IMG') {
        var howMany = this.querySelectorAll( 'li' ).length;

        if ( howMany > 1 ) {
            var parentElement = ev.target.parentNode;
            this.removeChild(parentElement);
        } else {
            document.querySelector('p').innerHTML = "<p>Вы выбрали " + ev.toElement.alt + "</p>"
        }
    }

});







/*document.getElementById( 'allDiv' ).addEventListener( 'click', function (event) {
	var howMany = this.querySelectorAll('img').lenght;

	var parentElement = event.target.parentNode;
	this.removeChild(parentElement);
});
*/