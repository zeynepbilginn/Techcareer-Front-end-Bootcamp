function validationNumber(){
    var Number = document.getElementById("txtNumber").value;
    var Min = document.getElementById("txtNumber").min;
    var Max = document.getElementById("txtNumber").max;
    // var input = document.getElementById("txtNumber");

    if(Number < Min){
        document.getElementById("txtNumber").value = Min;
    }
    else if(Number > Max){
        document.getElementById("txtNumber").value = Max;
    }

}