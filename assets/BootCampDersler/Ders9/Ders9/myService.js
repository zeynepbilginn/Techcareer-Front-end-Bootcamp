var MyServiceModule = angular.module("MyServiceModule", []);
MyServiceModule.service("MyService", function($http, $window) {

    const Vowel = ["a","e","i","ı","u","ü","o","ö"];
    this.ConvertToUpper = function(AValue){
        return AValue.toUpperCase();
    };
    this.ConvertToLower = function(AValue){
        return AValue.toLowerCase();
    };
    this.GetTextLength = function(AValue){
        return AValue.length;
    };
    this.GetVowelCount = function(AValue){
        var Result=0;
        var AText = AValue.split("");
        AText.forEach((IValue)=>{                    
            if(Vowel.indexOf(IValue.toLowerCase())>-1){
                Result++;
            }
        });
        return Result;
    };

    this.ShowMessage = function(ATitle, AMessage){
        var DvModal = document.getElementById("Modal");
        var DvTitle = document.getElementById("ModalTitle");
        var DvMessage = document.getElementById("ModalMessage");
        if(DvModal !== undefined){
            if(DvTitle !== undefined){
                if(DvMessage !== undefined){
                    DvModal.className = "modal modal-visible";
                    DvTitle.innerText = ATitle;
                    DvMessage.innerText = AMessage;
                }
            }
        }
    };

    this.CloseModal = function(){
        var DvModal = document.getElementById("Modal");
        if(DvModal !== undefined){
            DvModal.className = "modal";
        }
    };

    this.ShowSimpleSweetAlert = function(ATitle,AMessage){
        Swal.fire(
            ATitle,
            AMessage,
            'question'
        )
    };

    this.ShowConfirmDialog =  function(ATitle,ConfirmButton,DenyButton){
        Swal.fire({
            title: ATitle,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: ConfirmButton,
            denyButtonText: DenyButton,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                return true;
            } else if (result.isDenied) {
                return false;
            }
            });
    };





});