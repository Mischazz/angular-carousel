angular.module('angular-carousel')

    .directive('rnCarouselIndicators', ['$q', '$http', function ($q, $http) {





        return {
            restrict: 'A',
            replace: true,

            scope: {
                items: '=',
                index: '=',
                title: '=',
                titleclass: '='

            },
            template:  '<div class="rn-carousel-indicator">' +
                '<span class="{{titleclass}}" ng-repeat="item in items" ng-click="$parent.index=$index" ng-class="{active: $index==$parent.index }">{{title[$index]}}</span>' +
                '</div>',

            link: function ($scope) {
                if (!$scope.titleclass) {
                    $scope.titleclass = '';
                }



            }



        };
    }]);


