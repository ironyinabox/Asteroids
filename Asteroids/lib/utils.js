(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  var inherits =
    window.Asteroids.Util.inherits =
    function (ChildClass,ParentClass) {
      function Surrogate() {};
      Surrogate.prototype = ParentClass.prototype;
      ChildClass.prototype = new Surrogate();
    };

  var randomVec =
    window.Asteroids.Util.randomVec = function(maxX,maxY) {
      var xVec = (Math.random() * (maxX-1) + 1);
      var yVec = (Math.random() * (maxY-1) + 1);
      return [xVec, yVec];
    };

  var randomVel =
    window.Asteroids.Util.randomVel = function(max) {
      var min = (-1 * max);
      var xVel = (Math.random() * (max-min) + min);
      var yVel = (Math.random() * (max-min) + min);
      return [xVel, yVel];
    };

})();
