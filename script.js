const disp = document.querySelector(".disp");
let btns = document.getElementsByClassName("btn");
let reset = document.getElementById("reset");
let equalTo = document.getElementById("equalto");

let currentInput = "";

for(let btn of btns)
{
    btn.onclick = function(){
        let value = btn.textContent;

        if(value === "DEL")
            {
                currentInput = currentInput.slice(0,-1);
            }
            else{
                currentInput += value;
            }
            disp.textContent = currentInput || "0";
    };

}

reset.onclick = function(){
    currentInput = "";
    disp.textContent = "0";
};

equalTo.onclick = function(){
    try{
        currentInput = eval(currentInput).toString();
        disp.textContent = currentInput;
    }
    catch(error){
        currentInput = "";
        disp.textContent = "Error";
    }
}




