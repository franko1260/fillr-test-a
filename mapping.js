/**
 * Created by frankingardia on 6/12/16.
 */

//var myArrayOfLinks = document.getElementsByTagName("a")
//gets all elements in the html doc that have the desired tag
var jsdom = require("jsdom");
const fs = require("fs");

jsdom.env(
    "http://autofill.mozdev.org/autofilltest.html",
    ["~/WebstormProjects/fillr-test-a/mapping.js"],
    function (err, window) {
        //console.log("there have been", window.$("a").length - 4, "io.js releases!")

        var inputs = window.document.getElementsByTagName("input");
        var select = window.document.getElementsByTagName("select");

        console.log(inputs);

        var names = [];
        var section = ["test", "blergh"];
        var addressType = ["gnagh", "hel"];
        var autoFillFieldName = ["akljsd", "djkfh"];

        //extract names from elements
        for (var a = 0; a < inputs.length; a++)
        {
            names.push(inputs[a].name);
        }
        console.log(names);

        //generate string for conversion to JSON
        var string = ""
        for (var a = 0; a < inputs.length; a++)
        {
            string += '"' + names[a] +
                '":{ "section": "' + section[a] +
                '", "addressType": "' + addressType[a] +
                '", "AFFieldName": "' + autoFillFieldName[a] + '"},';
        }

        fs.writeFile('myjsonfile.json', JSON.stringify(string), "utf8");
    }
);


//JSON.stringify([value])
//converts to JSON string (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)