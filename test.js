/**
 * Created by frankingardia on 6/12/16.
 */

//var myArrayOfLinks = document.getElementsByTagName("a")
//gets all elements in the html doc that have the desired tag

var inputs = document.getElementsByTagName("input");
var select = document.getElementsByTagName("select");
var all = [inputs, select];

console.log(all);

//-Initial commit
//-Basic functionality of Task 1, all fields are being detected (regardless of whether they're part of the form or not)