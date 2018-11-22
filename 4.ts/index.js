var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var XiaoJieJie2 = /** @class */ (function () {
    function XiaoJieJie2(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie2.prototype.sayHello = function () {
        console.log('小哥哥好');
    };
    XiaoJieJie2.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return XiaoJieJie2;
}());
var jiejie2 = new XiaoJieJie2('女', '热巴', 22);
var Xjj = /** @class */ (function (_super) {
    __extends(Xjj, _super);
    function Xjj(sex, name, age, color) {
        var _this = _super.call(this, sex, name, age) || this;
        _this.x = color;
        return _this;
    }
    return Xjj;
}(XiaoJieJie2));
var a = new Xjj("x", "a", 11, "a");
var z = { name: "zz", age: 1 };
console.log(z);
var xz;
(function (xz) {
    var xx = /** @class */ (function () {
        function xx() {
        }
        return xx;
    }());
    xz.xx = xx;
})(xz || (xz = {}));
var hqy1 = new xz.xx();
console.log(xz)
var xxz;
(function (xxz) {
    var xx = /** @class */ (function () {
        function xx() {
        }
        return xx;
    }());
})(xxz || (xxz = {}));
