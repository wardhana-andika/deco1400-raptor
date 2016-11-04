<!-- 

function showleaflet1() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("leaflet1").style.display = "block";
}

function showleaflet2() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("leaflet2").style.display = "block";
}

function hideleaflet() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("leaflet1").style.display = "none";
	document.getElementById("leaflet2").style.display = "none";
}

/* validates enquiry form */
function validateForm() {
    var x = document.forms["enquiry"]["name"].value;
	var y = document.forms["enquiry"]["email"].value;
	var z = document.forms["enquiry"]["message"].value;
    if (x == null || x == "" || y == null || y == "" || z == "") {
        alert("Name, Email, and Enquiry message cannot be empty");
        return false; 
    }
	
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (regex.test(y))  
	  {  
		return true;
	  }  
		alert("You have entered an invalid email address.")  
		return false;
}

/* validates booking form */
function validateForm2() {
    var x = document.forms["booking"]["name"].value;
	var y = document.forms["booking"]["phone"].value;
	var z = document.forms["booking"]["email"].value;
    if (x == null || x == "" || y == null || y == "" || z == null || z == "") {
        alert("Name, Email, and Enquiry message cannot be empty");
        return false;
    }
	
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (regex.test(z))  
	  {  
		return true;
	  }  
		alert("You have entered an invalid email address.")  
		return false;
}


/*  google maps javascript source: https://developers.google.com/maps/documentation/javascript/ */
function initialize() {
  var myLatlng = new google.maps.LatLng(-27.570617,153.060514);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}


google.maps.event.addDomListener(window, 'load', initialize);


-->