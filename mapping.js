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

        //selector not needed?
        //var select = window.document.getElementsByTagName("select");

        var names = [];
        var section = ["test", "blergh"];
        var addressType = ["gnagh", "hel"];
        var autoFillFieldName = [
        //basic
            "email", "name", "address-line1", "address-line2", "address-level4", "address-level3", "postal-code", "tel",
        //shipto
            "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "organization",
            "address-line1","address-line2","address-line3", "address-level4", "address-level3", "postal-code",
            "country", "tel", "email",
        //billto
            "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "organization",
            "address-line1","address-line2","address-line3", "address-level4", "address-level3", "postal-code",
            "country", "tel", "email",
        //receiptto
            "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "organization",
            "address-line1","address-line2","address-line3", "address-level4", "address-level3", "postal-code",
            "country", "tel", "email",
        //credit card
            "cc-name", "cc-type", "cc-number", "cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-type",
        //user
            "url", "nickname", "current-password", "url", "url"

        ];

        //extract names from elements
        for (var a = 0; a < inputs.length; a++)
        {
            names.push(inputs[a].name);
        }
        console.log(names);

        /*//generate string for conversion to JSON
        var string = ""
        for (var a = 0; a < inputs.length; a++)
        {
            string += '"' + names[a] +
                '":{ "section": "' + section[a] +
                '", "addressType": "' + addressType[a] +
                '", "AFFieldName": "' + autoFillFieldName[a] + '"},';
        }*/

        //generate string for conversion to JSON
        var string = {
            mapping: []
        };
        for (var a = 0; a < inputs.length; a++)
        {

            string.mapping.push(
                {
                    id: names[a],
                    section: section[a],
                    addressType: addressType[a],
                    AFFieldName: autoFillFieldName[a]
                }
                );
        }

        fs.writeFile('mapping.json', JSON.stringify(string, null, 4), "utf8");
    }
);


//JSON.stringify([value])
//converts to JSON string (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)