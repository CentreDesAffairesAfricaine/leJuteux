(function() {
    'use strict';

    var postApp = angular.module('postApp', []);
    postApp.component('postComponent', postComponent());

    function postComponent() {
        postComponentController.$inject = ['$scope'];

        function postComponentController($scope) {
            var $ctrl = this;

            $ctrl.$onInit = function() {};

            $ctrl.$onChanges = function(changes) {};

            $ctrl.$onDestroy = function() {};
        }

        return {
            templateUrl: './app/postComponent.html',
            bindings: {
                oneWay: '<?', // one-way
                twoWay: '=?',
                string: '@?',
                onEvent: '&?', // on-event
            },
            controller: postComponentController,
        };
    }

    function postComponentController($scope) {
        var $ctrl = this;
        console.log($scope);
    }
})();