'use strict';
var angularApp = angular.module('customFieldsApp', ['ngRoute', 'ui.sortable', 'vAccordion']);

angularApp.config(function ($routeProvider) {

    $routeProvider
            .otherwise({
                redirectTo: '/',
                templateUrl: 'assets/views/handle.html',
                controller: 'CustomFieldsController'
            });

}).run(['$rootScope', function () {
}]);