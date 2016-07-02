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
  .directive("angularSquare", [function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {

            var square = element.innerWidth()
            console.log(square)
              //.removeAttr('angular-square')
              element.css({
                height: square,
                width: square
              })
            }
          }
        }
      ]);
}());
