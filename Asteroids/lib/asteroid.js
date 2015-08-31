(function () {
 if (typeof Asteroids === "undefined") {
   window.Asteroids = {};
 }
var Asteroid =
  window.Asteroids.Asteroid = function(pos,game) {
    this.game = game;
    window.Asteroids.MovingObject.call(this, {
      pos: pos,
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      vel: Asteroids.Util.randomVel(10,10)
    });
};

Asteroids.Util.inherits(Asteroid,window.Asteroids.MovingObject);
Asteroid.COLOR = "#A8A8A8";
Asteroid.RADIUS = 50;
 })();
