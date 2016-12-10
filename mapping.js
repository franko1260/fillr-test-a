/**
 * Created by frankingardia on 6/12/16.
 * Task 1: Form Mapping
 */

var jsdom = require("jsdom");
const fs = require("fs");

jsdom.env(
    "http://autofill.mozdev.org/autofilltest.html",
    ["~/WebstormProjects/fillr-test-a/mapping.js"],
    function (err, window) {

        var inputs = window.document.getElementsByTagName("input");
        //selector not needed? (Question specifically asked for "input" controls)
        //var select = window.document.getElementsByTagName("select");

        var names = []; //output
        var section = [
            //(based on my understanding of Section 4.10.1.7 of the WHATWG spec)
            //basic
            "section-basic", "section-basic", "section-basic", "section-basic", "section-basic", "section-basic", "section-basic", "section-basic",
            //shipto
            "section-shipAddress", "section-shipAddress", "section-shipAddress", "section-shipAddress", "section-shipAddress", "section-shipAddress",
            "section-shipAddress","section-shipAddress","section-shipAddress", "section-shipAddress", "section-shipAddress", "section-shipAddress",
            "section-shipAddress", "section-shipAddress", "section-shipAddress",
            //billto
            "section-billingAddress", "section-billingAddress", "section-billingAddress", "section-billingAddress", "section-billingAddress", "section-billingAddress",
            "section-billingAddress","section-billingAddress","section-billingAddress", "section-billingAddress", "section-billingAddress", "section-billingAddress",
            "section-billingAddress", "section-billingAddress", "section-billingAddress",
            //receiptto
            "section-receiptAddress", "section-receiptAddress", "section-receiptAddress", "section-receiptAddress", "section-receiptAddress", "section-receiptAddress",
            "section-receiptAddress","section-receiptAddress","section-receiptAddress", "section-receiptAddress", "section-receiptAddress", "section-receiptAddress",
            "section-receiptAddress", "section-receiptAddress", "section-receiptAddress",
            //creditcard
            "section-cc", "section-cc", "section-cc", "section-cc", "section-cc", "section-cc", "section-cc", "section-cc",
            //userinfo
            "section-user", "section-user", "section-user", "section-user", "section-user"
        ];

        var addressType = [
            //(based on my understanding of Section 4.10.19.8.1 Part 2 of the WHATWG spec)
            //basic
            "", "", "", "", "", "", "", "",
            //shipto
            "shipping", "shipping", "shipping", "shipping", "shipping", "shipping",
            "shipping","shipping","shipping", "shipping", "shipping", "shipping",
            "shipping", "shipping", "shipping",
            //billto
            "billing", "billing", "billing", "billing", "billing", "billing",
            "billing","billing","billing", "billing", "billing", "billing",
            "billing", "billing", "billing",
            //receiptto
            "receipt", "receipt", "receipt", "receipt", "receipt", "receipt",
            "receipt","receipt","receipt", "receipt", "receipt", "receipt",
            "receipt", "receipt", "receipt",
            //creditcard
            "", "", "", "", "", "", "", "",
            //userinfo
            "", "", "", "", ""];

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
            "numeric", "nickname", "current-password", "numeric", "numeric"
        ];

        //extract names from elements
        for (var a = 0; a < inputs.length; a++)
        {
            names.push(inputs[a].name);
        }
        //console.log(names);

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
        /*var string = {
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
        }*/

        var string = {};

        for (var a = 0; a < inputs.length; a++)
        {
                string[names[a]] = {
                    //id: names[a],
                    section: section[a],
                    addressType: addressType[a],
                    AFFieldName: autoFillFieldName[a]
                }
        }

        fs.writeFile('mapping.json', JSON.stringify(string, null, 4), "utf8");
        console.log("Complete! See file mapping.json")
    }
);