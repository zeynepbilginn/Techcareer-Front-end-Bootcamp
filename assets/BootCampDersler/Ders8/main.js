// Module
var TestApp = angular.module("TestApp", []);
// Controller
TestApp.controller("TestAppController", function ($scope, $http, $window, $timeout) {
    // sadece html tarafında kullanılacak değişkenleri burada tanımlamana gerek yok
    var Name = "Melih";
    // enum - bir değişkenin alabileceği değerleri sınırla
    const States = {
       Undef:0,
       Warning:1,
       Success:2,
       Error:3
    };
    
    $scope.Person = {
        NameSurname:"",
        MailAdress:"",
        UserName:"",
        Password:"",
        RePassword:"",
    };
    $scope.ErrorMessage;

    $scope.State = States.Undef;                                                                  


    $scope.FormValidation = function () {
        if($scope.Person.NameSurname === "") {
            $scope.ErrorMessage = "İsim soyisim boş olamaz!";
            return false;
        } else if($scope.Person.MailAdress === "") {
            $scope.ErrorMessage = "Mail adresi boş olamaz";
            return false;
        } else if($scope.Person.UserName === "") {
            $scope.ErrorMessage = "Kullanıcı adı boş olamaz";
            return false;
        } else if($scope.Person.Password === "") {
            $scope.ErrorMessage = "şifre boş olamaz";
            return false;
        } else if($scope.Person.Password !== $scope.Person.RePassword ) {
            $scope.ErrorMessage = "şifreler uyuşmuyor";
            return false;
        } else {
            return true;
        }
    };

    $scope.Register = function () {
        
        if(!$scope.FormValidation()){
            $scope.State = States.Error;  
        }
        else{
            $scope.State = States.Success;
            $scope.ErrorMessage = "Başarlı";
        }

    };

    $scope.ShowMyMessage = function () {
        alert("Welcome to World!");  
    };


});