process.stdout.write("\n\n**** Start **** \n\n\n");
//process.stdout.write(Date.now().toString());


var fs = require("fs");
var stringSimilarity = require("string-similarity");
var jaroWinkler = require('jaro-winkler');

process.stdout.write("\n\n**** Get source files **** \n");
//Read source files
process.stdout.write("**** Reading lib.txt **** \n");
var source = fs.readFileSync("./lib.txt").toString();
var aCompare = source.split("\n");

process.stdout.write("**** Reading input.txt **** \n\n\n");
var source2 = fs.readFileSync("./lib.txt").toString();
var aCompare2 = source2.split("\n");
/*
fs.writeFile("results/" + Date.now().toString() + ".txt", aCompare, (err) => { 
    if (err) 
      console.log(err);
  }); 
*/



process.stdout.write("\n\n**** Code running **** \n\n\n");


function getInput()
{
    process.stdout.write("please write something  >  ");
}





function compare(input)
{
    var s = input.toString().toLowerCase().trim();
    

    process.stdout.write("\n\n\n");
    process.stdout.write("Your input:  " + s);
    process.stdout.write("\n############################## \n\n");
    


    for(i = 0; i < aCompare.length; i++)
    {
        
        var sMatch = aCompare[i].toLowerCase().trim() ;
        process.stdout.write("Match string :" + sMatch + "\n");
        process.stdout.write("Match result StringS : " + stringSimilarity.compareTwoStrings(s,sMatch) + "\n");
        process.stdout.write("Match result JaroW   : " + jaroWinkler(s,sMatch) + "\n\n");
        
    }
    process.stdout.write("############################## \n\n");
    getInput();

}

var sOutput;
function compare2files()
{

    for(i=0; i< aCompare2.length; i++)
    {
        sMatch = aCompare2[i].toLowerCase().trim();

        sOutput += "Comparing:   " + aCompare2[i];
        sOutput += "\n ############################## \n\n";

        for(i2=0; i2<aCompare.length; i2++)
        {
            var sMatch2 = aCompare[i2].toLowerCase().trim();

            sOutput += "Match string :" + sMatch2 + "\n";
            sOutput += "Match result StringS : " + stringSimilarity.compareTwoStrings(sMatch2,sMatch) + "\n";
            sOutput += "Match result JaroW   : " + jaroWinkler(sMatch2,sMatch) + "\n\n";
            
        }

        sOutput += "\n ############################## \n\n";

        sOutput += "\n\n\n ****************************** \n\n\n";

    }

    fs.writeFile("results/" + Date.now().toString() + ".txt", sOutput, (err) => { 
        if (err) 
          console.log(err);
      }); 


}

//getInput();
//process.stdin.on('data', compare);

compare2files();
