function validate_numeric( data )
{
	var regex = /\D/;

	console.log("validate_numeric %s. Result: %s", data, regex.test(data));

	if ( true === regex.test(data) )
	{
		return false;
	}

	return true;

}

function validate_alpha( data )
{

	var regex = /\W|\d/;

	console.log("validate_alpha %s. Result: %s", data, regex.test(data));

	if ( true === regex.test(data) )
	{
		return false;
	}

	return true;

}

function validate_email( data )
{

	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Thank you stackoverflow
	//var regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/;

	console.log("validate_email %s. Result: %s", data, regex.test(data));

	return regex.test(data);

}

exports.validate_numeric = validate_numeric;
exports.validate_alpha   = validate_alpha;
exports.validate_email   = validate_email;
