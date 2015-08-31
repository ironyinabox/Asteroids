(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = window.Asteroids.GameView = function(ctx, game) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function () {
    this.game.draw(this.ctx);
    var ctx = this.ctx;
    window.setInterval((function () {
      this.move();
      this.draw(ctx);
    }).bind(this.game), 20);
  };

})();
