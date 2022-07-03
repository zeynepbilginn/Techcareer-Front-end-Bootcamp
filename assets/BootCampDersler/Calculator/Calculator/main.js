
function SetElementDefaultValue(iElementId, iValue) {
    document.getElementById("lblIslem").innerText = "iþlem";
    document.getElementById(iElementId).value = iValue;
}

function SetElementValue(iValue) {
    var TxtResult = document.getElementById('TxtResult');
    if (iValue === ",") {
        if (IsComma(TxtResult.value)) {
            return;
        }
    }
    if (iValue === "0") {
        if (TxtResult.value === "0") {
            return;
        }
        else {
            TxtResult.value += iValue;
        }
    }
    else {
        if (TxtResult.value === "0") {
            if (iValue===",") {
                TxtResult.value = "0,";
                return;
            }
            TxtResult.value = iValue;
        }
        else {
            TxtResult.value += iValue;
        }

    }
}
function IsComma(iTxtResult) {
    var Result = true;
    var index = iTxtResult.indexOf(',');
    if (index === -1) {
        Result = false;
    }
    return Result;
}

function SetProcess(iProcess) {
    var label = document.getElementById("lblIslem");
    if (iProcess === "+") {
        label.innerText = "toplama";
    }
    else if (iProcess === "-") {
        label.innerText = "çýkarma";
    }
    else if (iProcess === "/") {
        label.innerText = "bölme";
    }
    else if (iProcess === "*") {
        label.innerText = "çarpma";
    }
}
