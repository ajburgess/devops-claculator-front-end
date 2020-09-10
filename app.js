const app = angular.module('app', []);

const controller = ($scope, $http) => {
    $scope.add = () => {
        const callback = (response) => {
            $scope.answer = response.data;
        };

        const errorCallback = (response) => {
            $scope.answer = "Something went wrong!";
        };

        const num1 = $scope.num1;
        const num2 = $scope.num2;
        $scope.answer = undefined;
        $http({
            method: 'GET',
            url: `http://localhost:8001/add/${num1}/${num2}`
        }).then(callback, errorCallback);
    };
};

app.controller('controller', controller);