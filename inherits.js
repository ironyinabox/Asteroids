function Surrogate = {};
Surrogate.prototype = SuperClass.prototype;
Subclass.prototype = new Surrogate();

Function.prototype.inherits = function (Parent) {
  function Surrogate () {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
};
