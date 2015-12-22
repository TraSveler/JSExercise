document.getElementById( 'allPic' ).addEventListener( 'click', function (ev) {

    if (ev.target.tagName === 'IMG') {
        var howMany = this.querySelectorAll( 'li' ).length;

        if( howMany > 1 ) {
            var parentElement = ev.target.parentNode;
            this.removeChild(parentElement);
         } else {
		        document.write("Don't have the pictures");
		    }
    }
});