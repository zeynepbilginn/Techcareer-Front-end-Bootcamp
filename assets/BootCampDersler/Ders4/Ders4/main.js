
var ArrNumber = [];


function AddArrayToNumber() {
    var TxtNumber = document.getElementById('TxtNumber');
    //ThrowMessage('Merhaba dünya', 'error');
    if (TxtNumber === undefined) {
        ThrowMessage("Bu eleman tanýmsýz.");
        return;
    }

    var ANumber = document.getElementById('TxtNumber').value;

    if (ANumber === "") {
        ThrowMessage("Deðer boþ olamaz", "error");
        return;
    }
    if (IsThereNumber(ANumber)) {
        ThrowMessage("Listede var", "warning");
        return;
    }
    ArrNumber.push(ANumber);
    ThrowMessage("Eklendi", "success");
    TxtNumber.value = "";
}

function ThrowMessage(IErrorMessage, IMessageType) {
    var LblMessage = document.getElementById('LblMessage');
    if (IMessageType === "error") {
        LblMessage.className = "Error";
    }
    else if (IMessageType === "warning") {
        LblMessage.className = "Warning";
    }
    else if (IMessageType === "success") {
        LblMessage.className = "Success";
    }
    LblMessage.innerHTML = "<b>" + IErrorMessage + "</b>";
}

function IsThereNumber(INumber) {
    var result = false;

    for (var i = 0; i < ArrNumber.length; i++) {
        if (INumber === ArrNumber[i]) {
            result = true;
            break;
        }
    }

    return result;
}

function PrintNumbers() {

    var DvNumbers = document.getElementById("DvNumbers");

    DvNumbers.innerHTML = "";

    for (var i = 0; i < ArrNumber.length; i++) {
        var SplittedText = SplitText(ArrNumber[i]);
        if (i !== ArrNumber.length - 1) {

            if (ArrNumber[i] % 2 == 0) {
                DvNumbers.innerHTML += "<b>" + ArrNumber[i] + "</b>  " + SplittedText + "  <br/>";
            }
            else {
                DvNumbers.innerHTML += ArrNumber[i] + " " + SplittedText + " <br/>";
            }

        }
        else {
            if (ArrNumber[i] % 2 == 0) {
                DvNumbers.innerHTML += "<b>" + ArrNumber[i] + " " + SplittedText + "  </b>";
            }
            else {
                DvNumbers.innerHTML += ArrNumber[i] + " " + SplittedText;
            }

        }

    }

}

function SplitText(IText) {

    var result = "[";
    //123
    //[1,2,3,]
    for (var i = 0; i < IText.length; i++) {
        if (i !== IText.length - 1) {
            result += IText[i] + ",";
        }
        else {
            result += IText[i];
        }

    }
    return result + "]";
}

