<!--

/*43034655*/

	
function search(key){
	
	/* Runs when the enter key is pressed */
	if(key.keyCode == 13){
		
		/* 'attractions' array storing the individual attractions info boxes*/
		var attractions = document.getElementsByClassName('singlecontainer')
		
		
		/* Hides all attractions */
		for (var i = 0; i < attractions.length; i++){
			attractions[i].style.display = "none";
		}
		
		/* Displays two attractions as the results (not the real result of the search, but illustrates how it would work.) 
		See statement of delivery for 'note' */
		document.getElementById("result1").style.display = "block";
		document.getElementById("result2").style.display = "block";
		
		return false;
	}
	
}




-->