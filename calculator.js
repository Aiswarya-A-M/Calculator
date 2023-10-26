let numArray=[];
function screenDisplay(value) {
    const display = document.getElementById("screen");
    display.value += value;
}
function bclear(){
    const display = document.getElementById("screen");
    display.value="";
    numArray=[];
}

function calculateResult(){
    const display = document.getElementById("screen");
    let expression=display.value;
    let result=eval(expression);
    document.getElementById("screen").value=result;
    //operator=numArray[0];
    //console.log("array of operator",operator,numArray);
    
    /*let result=0;
    console.log("ii...",1*2+10)
    for (let i=0;i<arr.length;i++){
        switch (operator){
            case '+':
                result+=arr[i];
            case '-':
                result-=arr[i];
            case '*':
                result*=arr[i];
            case '/':
                result/=arr[i];
            default:
                result=0;
        }
    }*/
    

}
