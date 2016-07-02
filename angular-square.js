/*!
 * angular-square 1.0.1
 * Pam Halligan-Sims
 * https://github.com/phsims/angular-square.git
 * License: MIT
 */

(function(){
  "use strict";
  angular
  .module("angular.square",[])
  .directive("angularSquare", ['$window', function($window) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var square = "@";

          function squares(){
            square = element.innerWidth()
              //.removeAttr('angular-square')
              element.css({
                height: square
              })
            };

            angular.element($window).bind('resize', function () {
              square = element.innerWidth()
              squares();
            });
            squares();
            }
          }
        }
      ]);
}());
