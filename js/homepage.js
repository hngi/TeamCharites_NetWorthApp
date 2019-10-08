const animate = () => {
	const spans = document.querySelectorAll(".animate");
	    spans.forEach(function (span, index) {
		    if(span.style.animation) {
			    span.style.animation = "";
		    } else {
		        span.style.animation = `animate 0.5s ease forwards ${index / 7 + 1.0}s`;
		    }
	    });
}

animate();