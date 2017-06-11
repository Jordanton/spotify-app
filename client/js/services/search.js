angular.module('SpotifySrvc', [])
    .factory('SpotifyService', function ($resource) {

        return {
            search: $resource('/api/search'),
            detail: $resource('/api/detail')
        }
    })
