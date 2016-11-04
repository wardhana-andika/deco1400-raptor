$(document).ready(function(){
	
	//on document load, all the form elements are searched for and stored into variables.
	var nameinput = $("#nameinput")
	var numinput = $("#numinput")
	var emailinput = $("#emailinput")
	var addressinput = $("#addressinput")
	var goodsinput = $("#goodsinput")
	var radio20ft = $("#radio20ft")
	var radio25ft = $("#radio25ft")
	var radio30ft = $("#radio30ft")
	var submitButton = $("#submitButton")


	//whenever any key is pressed in a form element (meaning something is typed), calls function "validateForm"
	nameinput.keyup(validateForm)
	numinput.keyup(validateForm)
	emailinput.keyup(validateForm)
	addressinput.keyup(validateForm)
	goodsinput.keyup(validateForm)


	// Checks if the form inputs contain no value. All of the non-optional inputs must have a value for the submit button to become active.
	function validateForm(){
		if  (nameinput.val() != "" && numinput.val() != "" && emailinput.val() != "" && addressinput.val() != ""
			&& goodsinput.val() != ""){
			submitButton.attr("class","active");
		}else{
			submitButton.attr("class","");
		}
	}
	
	//If the submit button is clicked (after it has become active), alerts the user.
 	$(submitButton).click(function(){
		if($(this).attr("class") == "active"){
			alert("You've successfully submitted!")
			}
		}		
	)

//close document ready function
} 
)

