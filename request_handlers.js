var querystring = require("querystring");
var validation_engine = require("./validation_engine");

function start( response )
{
    console.log("Route handler for start");

    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello world!");
    response.end();
}

function validate( response, post_data )
{

    console.log("Route handler for validation");

    var data   = querystring.parse(post_data);
    var output = {success: true, message: ""};

    if ( false === validation_engine.validate_numeric(data.numeric) )
    {
        output.success = false;
        output.message += "You must enter a numeric value in the numeric field.<br />";
    }

    if ( false === validation_engine.validate_alpha(data.alpha) )
    {
        output.success = false;
        output.message += "You must enter only letters in the alpha field.<br />";
    }

    if ( false === validation_engine.validate_email(data.email) )
    {
        output.success = false;
        output.message += "Please enter a valid email address.<br />";
    }

    if ( true === output.success )
    {
        output.message = "Validation passed OK!";
    }

    response.writeHead(200, {"Content-Type" : "text/json"});
    response.write(JSON.stringify(output));
    response.end();

}

exports.start    = start;
exports.validate = validate;
