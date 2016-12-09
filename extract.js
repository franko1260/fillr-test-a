module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here

    var inputs = window.document.getElementsByTagName("tr"); //pulls in everything needed
    var output = {}; //the final object to be returned
    var addString = ""; //model for metadata string

    for (var a = 0; a < inputs.length; a++)
    {
        //checks whether we have an input or a select object and works accordingly
        if (inputs[a].getElementsByTagName("input")[0] != undefined)
        {
            addString = inputs[a].textContent.replace(/\s\s+/g, '').trim() + " "
                + inputs[a].getElementsByTagName("input")[0].name.replace(/\s\s+/g, '');

            //output.push({key: inputs[a].textContent.replace(/\s/g, ''), value: addString});
            output[inputs[a].textContent.replace(/\s\s+/g, '').trim()] = addString;


        }
        else if (inputs[a].getElementsByTagName("select")[0] != undefined) {

            addString = inputs[a].getElementsByTagName("td")[0].textContent.replace(/\s\s+/g, '') + " "
                + inputs[a].getElementsByTagName("select")[0].name.replace(/\s\s+/g, '');

            //output.push({key: inputs[a].getElementsByTagName("td")[0].textContent.replace(/\s/g, ''), value: addString});
            output[inputs[a].getElementsByTagName("td")[0].textContent.replace(/\s\s+/g, '')] = addString;
        }

    }

    return output;

}
