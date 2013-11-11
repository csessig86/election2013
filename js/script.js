// If there isn't a hash, set it to...
var first_box = "WaterlooCI";

// Hash rules everything around me
// Determine what will be displayed on the page based on hash
var hashChange = function () {
	// Scroll window to the top
	// window.scrollTo(0,0);

	// Collect the hash
	var hash = window.location.hash;

	// Add firstBox if hash is undefined
	if (hash === "" || hash === "#") {
		hash = '#' + first_box;
	}

	// Hide sibling DIVs
	$(hash + '-info').siblings().hide();

	// Activate right info for city pages
	if (hash.slice(-2) === "CI") {
		// Hide second-page info
		$('#second-page-box').hide();
		$('#detailed-candidate-box-cover').hide();
		// Show tabs
		$('.nav-tabs').show();
		// Activate right nav, hide others
		$(hash + '-li').addClass('active');
		$(hash + '-li').siblings().removeClass('active');
		// Show main page info
		$('#context-boxes').show();
		// Show copyright box
		$('#copyright-box').show()
		// Show info
		$(hash + '-info').show();
	// Active right info for candiddates
	} else if (hash.slice(-2) === "CA") {
		// Hide tabs
		$('.nav-tabs').hide();
		// Hide main page info
		$('#context-boxes').hide();
		// Hide copyright box
		$('#copyright-box').hide()
		// Show second page info
		$('#detailed-candidate-box-cover').show();
		$('#second-page-box').fadeIn(250)
		// Show bio info
		$(hash + '-info').show();
		// Scroll to the top
		window.scrollTo(0,0);
	}
}

// Dynamically add Twitter button script to Twitter buttons
// These are on all detailed candidate pages
var setTwitter = function() {
	var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = "js/lib/twitter.js";
		$(".twitter-icon").append( script );
}

// Call hash change function when... you guessed it... the hash changes
$(window).hashchange( function(){
	hashChange();
});