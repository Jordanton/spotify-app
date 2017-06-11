angular.module('SpotifyCtrl', [])
    .filter('uniquefilter', function () {

        return (arr, keyname) => {

            const
                filteredArray = [],
                keys = []

            angular.forEach(arr, (element) => {

                const key = element[keyname]
                if (keys.indexOf(key) === -1) {
                    keys.push(key)
                    filteredArray.push(element)
                }
            })

            return filteredArray
        }
    })
    .controller('SpotifyController', function ($scope, SpotifyService) {

        $scope.searchArtist = () => {

            $scope.details = false
            $scope.details2 = true

            SpotifyService.search.get({

                artist: $scope.artistname

            }, (response) => {

                $scope.results = response
            })
        }

        $scope.showAlbums = (id, image, length) => {

            $scope.details = true
            $scope.details2 = false
            $scope.image = image
            $scope.length2 = length

            SpotifyService.detail.get({

                artistID: id

            }, (response) => {

                $scope.albums = response
            })
        }
    })
