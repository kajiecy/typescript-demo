//第1种写法
function Circle(r) {
    this.r = r;
}
Circle.PI = 3.14159;
Circle.prototype.area = function() {
    return Circle.PI * this.r * this.r;
}

var c = new Circle(10.0);
alert(c.area());
