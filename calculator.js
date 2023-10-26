function screenDisplay(value) {
    const display = document.getElementById("screen");        //function to display the button value.
    display.value += value;
}
function bclear(){
    const display = document.getElementById("screen");    //function t clear the screen.  
    display.value="";
}

function calculateResult(){
    const display = document.getElementById("screen");   // function to calculate result.
    let expression=display.value;
    let result=eval(expression);
    document.getElementById("screen").value=result;
}
