//getHistory() gets the value of the history value in the inner text
function getHistory(){
  return document.getElementById("history-value").innerText;
}

// printHistory() prints the history value into the input space

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}


function getOutput(){ 
    return document.getElementById ("output-value").innerText;
}

function printOutput(num){
    //to ensure the Output doesn't read zero when no number is inputed into the input use the condition below
    if (num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){   // This function Ensures the numbers are seperated by a comma as in 1,000
 if(num=="-"){ //if number is negative, return negative value value
     return "";
 }
    var n= Number(num);
    var value = n.toLocaleString("en");
    return value;   
}
function reverseNumberFormat(num){ //This function returns the comma seperated numbers to their original form
    return Number (num.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()));

//Operations
var operator = document.getElementsByClassName("operator");
for (var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        // alert("The operator clicked" +' ' +this.id);
        if(this.id=="clear"){ // if id is clear, output and history changes to empty characters
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
                var output = reverseNumberFormat(getOutput()).toString();
                if(output){ //if output has a value
                     output = output.substr(0,output.length-1); //remove the last character
                     printOutput(output); //and print the result in the output
            }
        }
        else if (this.id=="."){
              var decoutput = output +this.id;  //the id is concatenated and becomes output
              var decimal = decoutput.toFixed(3)
                printOutput(decimal); // the print output now caarries the above expression
          


        }
        else{ 
                var output = getOutput();
                var history= getHistory();
                if (output==""&&history!=""){ //if output is empty and history is not empty
                        if(isNaN(history[history.length-1])){ //if the last character in the history is not a number
                            history= history.substr(0,history.length-1); // remove the last character
                }
            }
            if(output!="" || history!=""){ //if output is not empty and history is not empty too

                //condition? true :false
                output=output==""?
                output:reverseNumberFormat(output); 
                history=history+output;
                if(this.id=="="){
                        var result = eval(history); // if id is =, evaluate what is in the history 
                        printOutput(result); // print it as output
                        printHistory(""); // and clear the history
                }
                else{ // for other operators other than clear, equalls and backspace
                        history= history+this.id;  //the id is concatenated and becomes history
                        printHistory(history); // the print history now caarries the above expression
                        printOutput(""); // the otput is cleared and becomes empty
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number");
for (var i =0; i<number.length;i++){
    number[i].addEventListener('click',function(){
        // alert("The number clicked" +' ' +this.id);
            var output= reverseNumberFormat(getOutput());
            if (output!=NaN){ //if ouput is a number
                    output= output+this.id; //concatenated to the utput nymbers
                    printOutput(output);
        }
    });
}