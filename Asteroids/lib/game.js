(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function(xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;
    this.numAsteroids = 7;
    this.addAsteroids();

  };

  Game.prototype.move = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

  Game.prototype.addAsteroids = function () {
    this.asteroids = [];
    for (var i = 0; i < this.numAsteroids; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(),this));
    }
  };

  Game.prototype.randomPosition = function () {
    return window.Asteroids.Util.randomVec(this.xDim, this.yDim);
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,this.xDim, this.yDim);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Game.prototype.wrap = function (pos) {
    var xCoord = pos[0] % this.xDim;
    var yCoord = pos[1] % this.yDim;
    return [xCoord,yCoord];
  };




})();
