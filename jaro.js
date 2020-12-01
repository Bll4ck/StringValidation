var distance = require('jaro-winkler');

var sCompare2 = ["hottentot","hottentottentettententoonstelling", "Kirstof is the greatest person ever","TVV lassers", "lassers", "TVV", "TVV splicers", "TEF", "dit is voor de lassers", "te vervolgen lassers", "te vervolgen splicers", "te vervolgen", "tvv lasser, lijnmeting ok", "tvv lassers  nog steeds onderbrekingen"];


process.stdout.write("\n\n ****Code running**** \n\n\n");


function getInput()
{
    process.stdout.write("please write something  >  ");
}

getInput();

function compareStringS(input)
{
    var s = input.toString().toLowerCase();
    

    process.stdout.write("\n\n\n");
    process.stdout.write("Your input:  " + s)

    var result = stringSimilarity.compareTwoStrings(s,sCompare);

    process.stdout.write("Match result :" + result + "\n\n\n");

    getInput();
}


function compareStringS2(input)
{
    var s = input.toString().toLowerCase();
    

    process.stdout.write("\n\n\n");
    process.stdout.write("Your input:  " + s);
    process.stdout.write("############################## \n\n");
    


    for(i = 0; i < sCompare2.length; i++)
    {
        
        //var result = stringSimilarity.compareTwoStrings(s,sCompare2[i].toLowerCase());
        var result = distance(s,sCompare2[i].toLowerCase());
        process.stdout.write("Match string :" + sCompare2[i] + "\n");
        process.stdout.write("Match result :" + result + "\n\n");
    }
    process.stdout.write("############################## \n\n");
    getInput();

}

//process.stdin.on('data', compareStringS);
process.stdin.on('data', compareStringS2);
//compareStringS2("testing");