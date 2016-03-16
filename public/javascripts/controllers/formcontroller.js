'use strict';

var myApp = angular.module("myApp");

myApp.controller("formCtrl", function($scope) {
    $scope.ccNumValid=false;
    $scope.passPattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}";
    $scope.submitLogin = function(userForm) {
        console.log("click");
    };

$scope.ccnumCheck=function(){
    if($scope.formdata.ccnum){
    if($scope.formdata.ccnum.toString()>=14 && luhnAlgo($scope.formdata.ccnum)){
        $scope.ccNumValid=true;
    }   
    }

}
    function luhnAlgo(num) {
        var splNum = num.toString().split("").reverse();
        var luhnSum = 0;
        for (var i = 0; i < splNum.length; i++) {
            if (i % 2 !== 0) {

                var tempVal = parseFloat(splNum[i]) * 2;
                if (tempVal / 10 >= 1) {
                    tempVal = tempVal.toString().split("");
                    tempVal = parseFloat(tempVal[0]) + parseFloat(tempVal[1]);
                    luhnSum += tempVal;
                } else {
                    luhnSum += parseFloat(tempVal);
                }

            } else {
                luhnSum += parseFloat(splNum[i]);
            }

        }
        return (luhnSum % 10 === 0);
    }
});