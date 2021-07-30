function apareceScroll(){

		var html = document.getElementsByTagName("html")[0];
		var elementoAparece = document.getElementsByClassName("aparece");

		document.addEventListener("scroll",function(){

			var topVent = html.scrollTop;

			for(i=0; i< elementoAparece.length ; i++){

				var topelemAparece = elementoAparece[i].offsetTop;
				if(topVent > topelemAparece - 400){

					elementoAparece[i].style.opacity = 1;
				} // cierre de if
			}// cierre del for
		}) // cierre eventListener
	} // cierre apareceScroll

apareceScroll();