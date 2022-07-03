var List = ["A", "B", "C" , "D" , "E"];

// function ShowLetters(){
//     // List.forEach((AValue, AIndex) => {
//     //     alert(AValue);
//     // });

//     // List.forEach(AlertListElement);
// }

// function AlertListElement(IValue){
//     alert(IValue);
// }

function FillScreen(){
    var Output = "";

    for(let i=0;i<8;i++){
        Output += "<div>";
        for(let j=0;j<6;j++){
            Output += "<div class='number'></div>";
        }
        Output += "</div>";
    }

    document.getElementById("Circle").innerHTML = Output;

    var Elements = document.getElementsByClassName("number");

    for (let index = 0; index < Elements.length; index++) {
        Elements[index].innerHTML= GenerateRandomNumber();
        
    }
    // Elements.forEach((IValue) => {
    //     IValue.innerText = GenerateRandomNumber();
    // });
}

function GenerateRandomNumber(){
    var Result = 0;
    var Number = Math.random()*49;

    Number = Math.floor(Number);
    Result = Number;

    return Result;
}


