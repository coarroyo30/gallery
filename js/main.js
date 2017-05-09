/*************************************
	DATA
**************************************/
// Create Object Literal that holds
//    thumb and lightbox information

var gallery = [
	{
		image: "01",
		title: "Hay Bales",
		description: "I love hay bales. Took this snap on a drive through the countryside past some straw &nbsp;fields.",
		keywords: "I love hay bales snap drive countryside straw fields",
		type: "image",
		vsrc: ""
	},
	{
		image: "02",
		title: "Lake",
		description: "The lake was so calm today. We had a great view of the snow on the mountains from&nbsp;here.",
		keywords: "lake calm today great view snow mountains here",
		type: "image",
		vsrc: ""
	},
	{
		image: "03",
		title: "Canyon",
		description: "I hiked to the top of the mountain and got this picture of the canyon and trees&nbsp;below.",
		keywords: "I hiked top mountain picture canyon trees below",
		type: "image",
		vsrc: ""
	},
	{
		image: "04",
		title: "Iceberg",
		description: "It was amazing to see an iceberg up close, it was so cold but didn’t snow&nbsp;today.",
		keywords: "amazing iceberg up close, cold snow today",
		type: "image",
		vsrc: ""
	},
	{
		image: "05",
		title: "Desert",
		description: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the&nbsp;canyons.",
		keywords: "red cliffs beautiful really hot desert walking through canyons",
		type: "image",
		vsrc: ""
	},
	{
		image: "06",
		title: "Fall",
		description: "Fall is coming, I love when the leaves on the trees start to change&nbsp;color.",
		keywords: "Fall coming love leaves trees start change color",
		type: "image", 
		vsrc: ""
	},
	{
		image: "07",
		title: "Plantation",
		description: "I drove past this plantation yesterday, everything is so&nbsp;green!",
		keywords: "drove past plantation yesterday everything green",
		type: "image",
		vsrc: ""
	},
	{
		image: "08",
		title: "Dunes",
		description: "My summer vacation to the Oregon Coast. I love the sandy&nbsp;dunes!",
		keywords: "summer vacation Oregon Coast love the sandy dunes",
		type: "image",
		vsrc: ""
	},
	{
		image: "09",
		title: "Countryside Lane",
		description: "We enjoyed a quiet stroll down this countryside&nbsp;lane.",
		keywords: "enjoyed quiet stroll down countryside lane",
		type: "image",
		vsrc: ""
	},
	{
		image: "10",
		title: "Sunset",
		description: "Sunset at the coast! The sky turned a lovely shade of&nbsp;orange.",
		keywords: "Sunset coast sky turned lovely shade orange",
		type: "image",
		vsrc: ""
	},
	{
		image: "11",
		title: "Cave",
		description: "I did a tour of a cave today and the view of the landscape below was&nbsp;breathtaking.",
		keywords: "tour cave today view landscape below breathtaking.",
		type: "image",
		vsrc: ""
	},
	{
		image: "12",
		title: "Bluebells",
		description: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came&nbsp;in.",
		keywords: "walked through meadow bluebells good view snow mountain before fog",
		type: "image",
		vsrc: ""
	},
	{
		image: "13",
		title: "Travel Love",
		description: "This is Travel Footage from eight countries.",
		keywords: "Travel Footage eight countries.",
		type: "video",
		vsrc: "https://player.vimeo.com/video/71319358"
	},
	{
		image: "14",
		title: "Hyper Travel",
		description: "This film is a HDR hyperlapse postcard that will take you to a journey through Georgia.",
		keywords: "film HDR hyperlapse postcard journey through Georgia.",
		type: "video",
		vsrc: "https://player.vimeo.com/video/72131557"
	},
	{
		image: "15",
		title: "Travel",
		description: "A mix of memories from past years adventures for my travelblog on ✈ flysleepy.com.",
		keywords: "mix memories past years adventures travelblog flysleepy.com.",
		type: "video",
		vsrc: "https://player.vimeo.com/video/52742614"
	}
];


/*************************************
	INITIATE
**************************************/
// Buid initial Thumb Gallery
buildThumbGallery();

//Call "always current" year.
$currentYear();

/*************************************
	VARIABLES
**************************************/
var imageLink = document.getElementsByClassName("image-link");
var overlay = document.getElementById("overlay");
var searchBox = document.getElementById("searchbox");
var reset = document.getElementById("reset");
var rightArrow = document.getElementById("arrow-right");
var leftArrow = document.getElementById("arrow-left");
var currentImage;
var dynamicGallery;

/*************************************
	VARIABLES: FUNCTION EXPRESSIONS
**************************************/

/*  FUNCTION: Create Lightbox  */
var createLightBox = function(info) {

	//--- Append Overlay with visual data: ---

	//    Create img and paragraph elements and 
	//       set Attributes
	var realImg = document.createElement("img");
	var realIFrame = document.createElement("iframe");
	var realText = document.createElement("p");
	var visualWrapper = document.createElement("div");

	if ( gallery[info].type === "image" ) {

		//    Create image src attribute & add dynamic value
		var imgAttr = document.createAttribute("src");
		imgAttr.value = 'images/photos/' + gallery[info].image + '.jpg';

		//    Create iFrame src attribute & add empty value
		var iframeAttr = document.createAttribute("src");
		iframeAttr.value = '';

	} else {
		
		//    Create src attribute & add empty value
		var imgAttr = document.createAttribute("src");
		imgAttr.value = '';

		//    Create iframe src attribute & add dynamic value
		var iframeAttr = document.createAttribute("src");
		iframeAttr.value = gallery[info].vsrc;

	}
	//    Set src attribute into img and iFrame variables
	realImg.setAttributeNode(imgAttr);
	realIFrame.setAttributeNode(iframeAttr);

	//    Add dynamic title and description values to 
	//       paragraph's innerHTML
	var caption = "<strong>" + gallery[info].title + "</strong>";
	caption+= ": " + gallery[info].description;

	realText.innerHTML = caption;

	//    Give wrapper, img, iFrame and paragraph ids
	visualWrapper.id = "visual-wrapper";
	realImg.id = "real-img";
	realIFrame.id = "real-iframe";
	realText.id = "real-text";

	// Append img, iFrame and paragraph to 
	//   the wrapper as child
	visualWrapper.appendChild(realImg);
	visualWrapper.appendChild(realIFrame);
	visualWrapper.appendChild(realText);

	// Append wrapper to the overlay as child
	overlay.appendChild(visualWrapper);

	// Display visual content as an image or a video
	if ( gallery[info].type === "image" ) {
		realImg.style.display = "block";
		realIFrame.style.display = "none";
	} else {
		realImg.style.display = "none";
		realIFrame.style.display = "block";
	}

	//--- Prepare navigation and show overlay: ---

	// Display arrows
	rightArrow.style.display = "block";
	leftArrow.style.display = "block";

	// Display overlay with Fade-in
	fadeThisIn(overlay);

}; // ~end create Lightbox

/*  FUNCTION: Hide Lightbox  */
var hideLightBox = function(){

	//Remove all nodes from overlay
	while (overlay.hasChildNodes()) {
		overlay.removeChild(overlay.lastChild);
	}	

	// Hide overlay with Animation
	fadeThisOut(overlay);

	// Hide arrows
	rightArrow.style.display = "none";
	leftArrow.style.display = "none";

};// ~end Hide Lightbox

// FUNCTION: On thumb hover show title and caption
var onThumbHover = function(e){

	// prevent browser default
	e.preventDefault();

	// show title and caption
	this.getElementsByClassName("caption-info")[0].classList.add("show-info");

};// ~end on thumb hover, show title and caption

// FUNCTION: On thumb hover, remove title and caption
var onThumbUnHover = function(e){

	// prevent browser default
	e.preventDefault();

	// hide title and caption
	this.getElementsByClassName("caption-info")[0].classList.remove("show-info");

};// ~end on thumb hover, remove and title caption

// FUNCTION: On thumb click, prepare to open light box
var onThumbClick = function(e) {

	// prevent browser default
	e.preventDefault();

	// reset overlay if it has children
		//Remove all nodes from overlay
	while (overlay.hasChildNodes()) {
		overlay.removeChild(overlay.lastChild);
	}	

	// get some necessary information from thumb's attributes
	var data = this.getAttribute("data-index");
	var initHref = this.getAttribute("href");

	// create Lightbox
	createLightBox(data);


	// Find clicked thumb in new dynamicGallery
	//    and set new currentImage value
	for ( var position in dynamicGallery ) {
		if ( initHref.indexOf(dynamicGallery[position].image) !== -1 ) {
			currentImage = parseInt(position);
		}
	}

}; // ~end Open lightbox on thumb click

/*  FUNCTION: Filter Gallery  */
var filterGallery = function(e) {
	var loadMessage;
	if ( searchBox.value.trim() === "") { 
		loadMessage = "Reload..";
	 } else {
	 	loadMessage = "Searching...";
	 }


	// assign search box value to variable
	var searchBoxValueMessage = searchBox.value;
	var searchBoxValue = searchBox.value.toUpperCase();

	// other necessary variables
	var filteredGalleryIndex = [];
	var galleryDOM = document.getElementById("gallery").children;
	var response = document.getElementById("response");
	var loading = document.getElementById("loading");
	var timerf;
	dynamicGallery = [];

	// Loading...
	loading.innerHTML = loadMessage;

	//--- Build searchable array for indexOf: ---
	// Create "for...in" loop for gallery object 
	for ( var info in gallery ) {

		// assign title and description to variable
		var galleryTitleandCaption =  gallery[info].title + " " + gallery[info].keywords+ " " + gallery[info].type;
		galleryTitleandCaption = galleryTitleandCaption.toUpperCase();

		// filter
		if ( galleryTitleandCaption.indexOf(searchBoxValue) !== -1 ) {
			// Build Array 
			filteredGalleryIndex.push(info);
		} 
	}

	//--- Filter: Hide and show .col divs: ---

	// Loop through gallery children and hide 
	//     or show .col divs

	// Variables to help me tally my active divs
	var liveCount = 0;

	// Fade out all
		for (var i = 0; i < galleryDOM.length; i++ ) {
		
			// Fade out filtered-out thumbs
				function fadeOut(el){
		
					el.style.opacity = 1;
	
					(function fade() {
						if ((el.style.opacity -= 0.4) < 0) {
							el.style.opacity = 0;
							el.style.display = 'none';
						} else {
							window.requestAnimationFrame(fade);
						}
					})();
				}
		
				// call fadeOut function
				if (typeof galleryDOM[i] !== "undefined") {
					fadeOut(galleryDOM[i]);
				}
				galleryDOM[i].classList.remove("live");
				galleryDOM[i].classList.remove("zero-right");
		}
	
	// For...loop to fade in .col divs. Also, to add 
	//    classes that modify margin space
	
		for ( i = 0; i < galleryDOM.length; i++ ) {
			for(var j = 0; j< filteredGalleryIndex.length; j++ ) {
				if ( parseInt(filteredGalleryIndex[j]) === i ) { 
				
					// Call buildDynamicGallery
					buildDynamicGallery(i);
		
					// Fade in filtered-in thumbs
					
		
					// Add one to liveCount
					liveCount++;
					// Add classes to deal with unhidden divs
	
					galleryDOM[i].classList.add("live");
					// Tempting. But, need to reset zero-right before query
					galleryDOM[i].classList.remove("zero-right");
	
					// For every 4th live div margin-right should be zero
					if( liveCount === 4 ) {
						galleryDOM[i].classList.add("zero-right");
	
						// reset liveCount
						liveCount = 0;
					}
				}
			}

			function fadeIn(el) {
				timerf = setTimeout(function(){
					if ( el.classList.contains("live") ) {
						el.style.opacity = 0;
						el.style.display = "inline-block";
						(function fade() {
							var val = parseFloat(el.style.opacity);
							if( !((val += 0.5) > 1) ) {
								el.style.opacity = val;
								requestAnimationFrame(fade);
							}
						})();
					}
					loading.innerHTML = "";
				}, 1000);	
			}

			// Call fade-in function
			fadeIn(galleryDOM[i]);

		}
						
	// For the last live div, margin should be zero, if 
	//   if no live div is available print a message
	if ( dynamicGallery.length > 0 ) {
		// add "zero-right" to last div

		// Delete "No Results Message"
		response.style.display = "none";
		response.innerHTML = "";
	} else {
		// Add "No Results Message"
		response.style.display = "inline-block";
		response.innerHTML = "No Results for " + searchBoxValueMessage;
		
	}
	
};// ~end Filter Gallery

// FUNCTION: Advance Image or Video
var AdvImage = function(direction) {

	// Define new currentImage value
	if ( direction < 0) {
		currentImage = dynamicGallery.length - 1;
	} else if (direction > dynamicGallery.length - 1) {
		currentImage = 0;
	} else {
		currentImage = direction;
	}
	
	// Select new img/iFrame and title and decription
	var realImg = document.getElementById("real-img");
	var realIFrame = document.getElementById("real-iframe");
	var realText = document.getElementById("real-text");
	var visualWrapper = document.getElementById("visual-wrapper");
	var text = "";
	var fadeTime;

	// if media type is a video, take a little more time to fade in.
	if (  dynamicGallery[currentImage].type === "image" ) {
		fadeTime = 300; 
	} else {
		fadeTime = 1000;
	}

	// fade-out #visual-wrapper
	fadeThisOut(visualWrapper);

	// Wait for complete fade out before changing data
	//   Note: Use setTimeout instead of setInterval b/c 
	//         setInterval creates unique methods
	var timer = setTimeout(function() {
	
		// Add new title description to text variable
		text += "<strong>" + dynamicGallery[currentImage].title + "</strong>";
		text += ": " + dynamicGallery[currentImage].description;

		realText.innerHTML = text;

		// Determine whether to display visual content as image or video
		if (  dynamicGallery[currentImage].type === "image" ) {
			// Show Image
			realImg.setAttribute("src", 'images/photos/' + dynamicGallery[currentImage].image + '.jpg');
			realImg.style.display = "block";

			// Hide iFrame
			realIFrame.setAttribute("src", dynamicGallery[currentImage].vsrc);
			realIFrame.style.display = "none";
			// 

		} else {
			// Show Iframe
			realIFrame.setAttribute("src", dynamicGallery[currentImage].vsrc);
			realIFrame.style.display = "block";
			//

			// Hide Image
			realImg.setAttribute("src", '');
			realImg.style.display = "none";
		}
	}, 300);

	// fade-in #visual-wrapper
	timer = setTimeout ( function(){
		fadeThisIn(visualWrapper);
		clearTimeout(timer);
	}, fadeTime );

};

// FUNCTION: Forward-Advance Image on Right-Arrow Click
var nextImg = function() {
	// Next Image
	var nextImage = currentImage + 1;

	// Call AdvImg
	AdvImage(nextImage);
};// ~end Right-Arrow Click

// FUNCTION: Backwards-Advance Image on Left-Arrow Click
var prevImg = function() {
	// Prev Image
	var prevImage = currentImage - 1;

	// Call AdvImg
	AdvImage(prevImage);
};// ~end Left-Arrow Click

// FUNCTION: Reset Search Box 
var resetSearch = function(e) {

	// Prevent browser's natural behavior
	e.preventDefault();

	// Set browsers's search value to empty
	searchBox.value = "";

	// Call filterGallery function
	filterGallery();

}; // ~end Reset Search Box

/*************************************
	FUNCTION DECLARATIONS
**************************************/
/*  FUNCTION: Build Dynamic Gallery Object  */
function buildDynamicGallery(index) {
	dynamicGallery.push({
		image: gallery[index].image,
		title: gallery[index].title,
		description: gallery[index].description,
		type: gallery[index].type,
		vsrc: gallery[index].vsrc
	});
}// ~end Build Dynamic Gallery

// FUNCTION: Build Thumb Gallery
function buildThumbGallery() { 
	dynamicGallery = [];

	// Variable used to count every 4th .col div
	var fourthDiv = 0;

	// Create empty variable for DOM HTML
	var HTML = "";

	// target #gallery
	var galleryContainer = document.getElementById("gallery");

	// Loop through object and build HTML
	for ( var i=0 ; i < gallery.length; i++ ) {
		// Call buildDynamicGallery
		buildDynamicGallery(i);

		// Add one to fourthDiv
		fourthDiv++;
			if ( fourthDiv === 4 ){
				HTML += '<div class="col live zero-right">';
				// reset fourthDiv to zero
				fourthDiv = 0;
			} else {
				HTML += '<div class="col live">';
			}
		    HTML += '<a href="images/photos/'+ gallery[i].image +'.jpg"';
		    HTML += 'data-index="'+ i +'"';
		    HTML += 'class="image-link '+ gallery[i].type +'">';
		    HTML += '<img src="images/thumbs/'+ gallery[i].image +'.jpg"';
		    HTML += 'alt="'+ gallery[i].description +'"';
		    HTML += 'title="'+ gallery[i].title +'" class="image" />';
		    HTML += '<span class="caption-info">';
		    HTML += '<span class="caption-style">'+gallery[i].title+'</span>';
		    HTML += '<br />'+ gallery[i].description +'</span>';
		    HTML += '</a></div>';

	}

	galleryContainer.innerHTML = HTML;
    
} // ~end buildThumbGallery

// FUNCTION: Fade-in a div
function fadeThisIn(el) {
	el.style.opacity = 0;
	el.style.display = "block";

	(function fade() {
		var val = parseFloat(el.style.opacity);
		if( !((val += 0.07) > 1) ) {
			el.style.opacity = 1;
			requestAnimationFrame(fade);
		}
	})();

}// ~end Fade-in a div

// FUNCTION: Fade-out a div
function fadeThisOut(el) {
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= 0.07) < 0) {
			el.style.display = 'none';
		} else {
			window.requestAnimationFrame(fade);
		}
	})();
}// ~end Fade-out a div

//Function generates a current year and adds language for copyright notice.
function $currentYear() {
	var d = new Date();
	var n = d.getFullYear();
	document.getElementById("copyright").innerHTML = '&copy; ' + n + ' - Gallery';
}// ~end copyright
/*************************************
	EVENT LISTENERS
**************************************/

// On thumb hover invoke on hover and on click
for( var i = 0; i < imageLink.length; i++ ) {

	// on hover
	imageLink[i].onmouseover = onThumbHover;
	imageLink[i].onmouseout = onThumbUnHover;

	// on click
	imageLink[i].onclick = onThumbClick;
}

// On Overlay Click invoke hideLightBox
overlay.onclick = hideLightBox;

// Overlay Navigation Click
rightArrow.onclick = nextImg;

leftArrow.onclick = prevImg;

// On Search box keydown filter images
searchBox.onkeyup = filterGallery;

// On Search box keydown filter images
reset.onclick = resetSearch;

/*************************************
	PARTIAL ACCESSIBILITY
**************************************/
document.addEventListener('keydown', function(e) {

	if ( overlay.children.length !== 0  ) {
		switch(e.keyCode) {
			case 27:
				hideLightBox();
			break;
			case 37:
				//Advances slideshow left on left-arrow [37] key.
				prevImg();
			break;
			case 39:
				//Advances slideshow left on right-arrow [39] key.
				nextImg();
			break;
		}
	}

});

