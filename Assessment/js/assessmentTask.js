//defines root element
var app = angular.module("courseApp", []);

app.directive("basicPage", function() {
    return {
        restrict: "E",
        templateUrl: "../view/mainPage.html"
    }
});


app.directive("paymentParameters", function() {
    return {
        restrict: "E",
        templateUrl: "../view/paymentParameters.html"
    }
});

app.directive("paymentInfo", function() {
    return {
        restrict: "E",
        templateUrl: "../view/paymentInformation.html",
        controller: function($scope, getJsonsData) {
            $(document).ready(function() {
                $('#dateRangePicker')
                    .datepicker({
                        format: 'mm/dd/yyyy',

                    });
            });
            getJsonsData.getFrequencyType()
                .then(function(input1) {
                    $scope.FrequencyData = input1;
                    console.log($scope.FrequencyData);
                }, function(input1) {
                    alert("sorry");
                });
            getJsonsData.getParameterType()
                .then(function(input2) {
                    $scope.ParameterData = input2;
                    console.log($scope.ParameterData);
                }, function(input2) {
                    alert("sorry");
                });
            getJsonsData.getAccountingType()
                .then(function(input3) {
                    $scope.AccountingData = input3.result;
                    console.log($scope.AccountingData);
                }, function(input3) {
                    alert("sorry");
                });
            getJsonsData.chargeAmountBasis()
                .then(function(input4) {
                    $scope.ChargeAmountData = input4;
                    console.log($scope.ChargeAmountData);
                }, function() {
                    alert("sorry")
                });
            getJsonsData.getGrowthType()
                .then(function(input5) {
                    $scope.GrowthData = input5;
                    console.log($scope.GrowthData);
                }, function(input5) {
                    alert("sorry");
                });
            getJsonsData.getPaymentDueDay()
                .then(function(input6) {
                    $scope.PaymentDueData = input6.result;
                    console.log($scope.PaymentDueData);
                }, function(input6) {
                    alert("sorry");
                });
            getJsonsData.getPaymentDueOn()
                .then(function(input7) {
                    $scope.PaymentDueOnData = input7.result;
                    console.log($scope.PaymentDueOnData);
                }, function(input7) {
                    alert("sorry");
                });
            getJsonsData.getPaymentTiming()
                .then(function(input8) {
                    $scope.PaymentTimingData = input8.result;
                    console.log($scope.PaymentTimingData);
                }, function(input8) {
                    alert("sorry");
                });

        }


    }
});

app.service("getJsonsData", function($http, $q) {
    var defer = $q.defer();
    var defer1 = $q.defer();
    var defer2 = $q.defer();
    var defer3 = $q.defer();
    var defer4 = $q.defer();
    var defer5 = $q.defer();
    var defer6 = $q.defer();
    var defer7 = $q.defer();
    this.getFrequencyType = function() {
        return $http.get("../js/c_frequencyType.json")
            .then(function(response) {
                defer.resolve(response.data);
                console.log(defer.resolve(response.data));
                return defer.promise;
            }, function(response) {
                defer.reject(response);
                return defer.promise;
            })
    }
    this.getParameterType = function() {

        return $http.get("../js/c_paymentType.json")
            .then(function(response) {
                defer1.resolve(response.data);
                return defer1.promise;
            }, function(response) {
                defer1.reject(response);
                return defer1.promise;
            })
    }
    this.getAccountingType = function() {

        return $http.get("../js/l_AccountingType.json")
            .then(function(response) {
                defer2.resolve(response.data);
                console.log(response.data);
                return defer2.promise;
            }, function(response) {
                defer2.reject(response);
                return defer2.promise;
            })
    }
    this.chargeAmountBasis = function() {

        return $http.get("../js/l_ChargeAmountBasis.json")
            .then(function(response) {
                defer3.resolve(response.data);
                return defer3.promise;
            }, function(response) {
                defer3.reject(response);
                return defer3.promise;
            })
    }
    this.getGrowthType = function() {

        return $http.get("../js/l_GrowthType.json")
            .then(function(response) {
                defer4.resolve(response.data);
                return defer4.promise;
            }, function(response) {
                defer4.reject(response);
                return defer4.promise;
            })
    }
    this.getPaymentDueDay = function() {

        return $http.get("../js/l_PaymentDueDay.json")
            .then(function(response) {
                defer5.resolve(response.data);
                return defer5.promise;
            }, function(response) {
                defer5.reject(response);
                return defer5.promise;
            })
    }
    this.getPaymentDueOn = function() {

        return $http.get("../js/l_PaymentDueOn.json")
            .then(function(response) {
                defer6.resolve(response.data);
                return defer6.promise;
            }, function(response) {
                defer6.reject(response);
                return defer6.promise;
            })
    }
    this.getPaymentTiming = function() {

        return $http.get("../js/l_PaymentTiming.json")
            .then(function(response) {
                defer7.resolve(response.data);
                return defer7.promise;
            }, function(response) {
                defer7.reject(response);
                return defer7.promise;
            })
    }
});