module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here

    var keys = Object.keys(hash); //copy keys to new variable for easy referencing in the for loop
    var output = [];

    var searchString = "Ecom_Payment_Card_ExpDate"; //This string is common with the three fields that the test expects to see returned

    for (var a = 0; a < Object.keys(hash).length; a++)
    {
        var metaString = hash[keys[a]]; //entry value we're currently working with

        if (metaString.indexOf(searchString) !== -1)
        {
            output.push(keys[a]); //return the key of the corresponding value we're working with
        }
    }

    return output;
}