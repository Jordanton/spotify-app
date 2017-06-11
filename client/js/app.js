angular.module('app', ['ngRoute', 'ngResource', 'SpotifyCtrl', 'SpotifySrvc'])
    .config(['$locationProvider', function ($locationProvider) {

        $locationProvider.hashPrefix('')
    }])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/search.html',
                controller: 'SpotifyController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])
    .directive('albumDetails', function () {

        return {

            restrict: 'E',

            scope: {
                album: '='
            },

            templateUrl: 'views/directives/album.html'
        }
    })
