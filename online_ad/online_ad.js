
function validataRegEx(regex,input,helpText,helpMessage)
{
	if(!regex.test(input))
	{
		if(helpText != null)
			helpText.innerHTML = helpMessage;
		return false;
	}
	else
	{
		if(helpText != null)
			helpText.innerHTML = "";
		return true;
	}
}


function validateNonEmpty(inputField,helpText){
	
	return validateRegEx(/.+/,
		inputField.value,helpText,
		"Please enter a value.");
	
}

function validataLength(minLength,maxLength,inputField,helpText)
//检验输入信息的长度
{
	return validateRegEx(new RegExp("^.{" + minLength + "," + maxLength + "}$"),
		"Please enter a value " + minLength + " to " + maxLength +
		" characters in length.");
}

function validataZipCode(inputField,helpText)
{
	if(!validateNonEmpty(inputField,helpText))
		return false;
	
	return validateRegEx(/^\d{5}$/,
		inputField.value,helpText,
		"Please enter a 5-digit ZIP code.");
}

function validateDate(inputField,helpText){
	if(!validateNonEmpty(inputField,helpText))
		return false;
	
	return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/,
			inputField.value,helpText,
			"Please enter a date (for example, 01/14/1975).");
}

function validatePhone(inputField,helpText)
{
	if(!validateNonEmpty(inputField,helpText))
		return false;
	return validateRegEx(/^\d{3}-\d{3}-\d{4}$/,
			inputField.value,helpText,
			"Please enter a phone number (for example,123-456-7890).");
}

function validateEmail(inputField,helpText)
{
	if(!validateNonEmpty(inputField,helpText))
		return false;
	return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/,
			inputField.value,helpText,
			"Please enter an email address (for example,wusong@qq.com).");
}

function placeOrder(form)
{
	if (validateNonEmpty(form["message"], form["message_help"]) &&
        validateNonEmpty(form["zipcode"], form["zipcode_help"]) &&
        validateNonEmpty(form["date"], form["date_help"]) &&
        validateNonEmpty(form["name"], form["name_help"]) &&
        validateNonEmpty(form["phone"], form["phone_help"]) &&
        validateNonEmpty(form["email"], form["email_help"])) {
          
        form.submit();
    } 
	else{
        alert("I'm sorry but there is something wrong with the order information.");
    }
}