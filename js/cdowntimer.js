

var target_date = new Date("August 15, 2015").getTime(); // The Date of the Show
var days, hours, minutes, seconds; //these are my unit variables
var countdown = document.getElementById("countdown"); //tag
 
function countdowntofestival() {  // updates the tag with "countdown" every 1 second
 
    
    var current_date = new Date().getTime();   // This is finding the amount of time before "target_date" variable
    var seconds_left = (target_date - current_date) / 1000; //dividing it by 1000 converts the users computers unix time stamp from milliseconds to seconds
 
     days = parseInt(seconds_left / 86400); //86400 is the number of seconds in a day
    seconds_left = seconds_left % 86400;
	 
	 
    hours = parseInt(seconds_left / 3600); //3600 is the number of seconds in an hour
    seconds_left = seconds_left % 3600; 
	
	
	
     
    minutes = parseInt(seconds_left / 60); //there is 60 seconds in a minute. 
    seconds = parseInt(seconds_left % 60);
     
    
    document.getElementById('countdown').innerHTML = days + "d, " + hours + "h, "
    + minutes + "m, " + seconds + "s";  //this attaches all the variable together. 
 
}
var countdownTimer = setInterval('countdowntofestival()', 1000);   //this tells the java script to repeat every 1000 miliseconds (1 second) 


