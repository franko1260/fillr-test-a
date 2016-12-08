module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here

    var inputs = window.document.getElementsByTagName("tr");
    console.log(inputs);
}

var jsdom = require("jsdom");
const fs = require("fs");

jsdom.env(
    "http://autofill.mozdev.org/autofilltest.html",
    ["~/WebstormProjects/fillr-test-a/extract.js"],
    function (err, window) {

        var inputs = window.document.getElementsByTagName("tr");
        var output = {};
        var addString = "";

        for (var a = 0; a < inputs.length; a++)
        {
            if (inputs[a].getElementsByTagName("input")[0] != undefined)
            {
                addString = inputs[a].textContent + inputs[a].getElementsByTagName("input")[0].name;
                console.log(addString);


            }
            else if (inputs[a].getElementsByTagName("select")[0] != undefined) {

                addString = inputs[a].getElementsByTagName("td")[0].textContent + inputs[a].getElementsByTagName("select")[0].name;
                console.log(addString);
            }

        }



    }
);
