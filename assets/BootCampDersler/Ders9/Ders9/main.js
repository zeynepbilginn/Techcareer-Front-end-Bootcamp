
var TestApp = angular.module("TestApp", ['MyServiceModule']);

TestApp.controller("TestAppController", function ($scope, $http, $window, $timeout, MyService) {

    $scope.alertFunc = function(){
        alert('New funciton');
    }

    $scope.ToUpperCase = function(){
        var UpperName = MyService.ConvertToUpper("Tunç");
        alert(UpperName);
    };

    $scope.ToLowerCase = function(){
        var LowerCase = MyService.ConvertToLower("TUNÇ");
        alert(LowerCase);
    };

    $scope.GetTextLength = function(){
        var TextLength = MyService.GetTextLength("Tunç");
        alert(TextLength);
    };

    $scope.GetVowelCount = function(){
        var VowelCount = MyService.GetVowelCount("Tunç");
        alert(VowelCount);
    };

    $scope.ShowMessage = function(){
        MyService.ShowMessage("HATA", "Tekrar Giriniz..");
    };

    $scope.CloseModal = function(){
        MyService.CloseModal();
    };

    $scope.ShowSimpleSweetAlert = function(){
        MyService.ShowSimpleSweetAlert("Title", "Message");
    };

    $scope.ShowConfirmDialog = function(){
        
        Swal.fire({
            title: 'Yaşını onaylıyor musun?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Evet onaylıyorum.',
            denyButtonText: 'Hayır onaylamıyorum.',
        }).then((result) => {
            if(result.isConfirmed){
                MyService.ShowSimpleSweetAlert("Onayladın.", "Yaşını Onayladın.");
            }
            else{
                MyService.ShowSimpleSweetAlert("Onaylamadın.", "Yaşını Onaylamadın.");
            }    
        });    
    };

});
