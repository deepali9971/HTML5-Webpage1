var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("This is my first TS code...");
var NumVar = 23.87;
console.log("Number variable value is:", NumVar);
console.log("Number variable value is: " + NumVar);
/*NumVar = "jkhadhsakd";*/
var boolVar = true;
console.log(boolVar);
var str = "This is the string variable value";
console.log(str);
nm: function addno(x, y) {
    return x + y;
}
console.log(addno(10, 20));
var n = addno(20, 30);
console.log(n);
var l = [2, 3, 4, 5, 43, 4534];
console.log(l);
var myList = [true, true, false, false];
console.log(myList);
var dataPkt = ["127.0.0.1", 34, "192.168.121.115", true];
dataPkt = ["skjhdksaj", 77, "kjfhskd", false];
console.log(dataPkt);
var month;
(function (month) {
    month[month["jan"] = 1] = "jan";
    month[month["feb"] = 2] = "feb";
    month[month["mar"] = 3] = "mar";
    month[month["apr"] = 4] = "apr";
    month[month["may"] = 5] = "may";
    month[month["jun"] = 6] = "jun";
    month[month["jul"] = 7] = "jul";
    month[month["aug"] = 8] = "aug";
    month[month["sep"] = 9] = "sep";
    month[month["pct"] = 10] = "pct";
    month[month["nov"] = 11] = "nov";
    month[month["dec"] = 12] = "dec";
})(month || (month = {}));
;
var m = month.aug;
console.log(m);
var myAnyVAr = 78;
console.log(myAnyVAr);
myAnyVAr = "xlx;axksa";
console.log(myAnyVAr);
//let obj = function create(obj:Object|null):void ;
var obj = { key1: 21, key2: "Value of Key2" };
console.log(obj);
//obj = {key1:33, key2:"sndaks", key3: 2021};
var compNum = /** @class */ (function () {
    function compNum(x, y) {
        this.real = x;
        this.img = y;
    }
    compNum.prototype.addno = function (c) {
        var result = new compNum(0, 0);
        result.real = c.real + this.real;
        result.img = c.img + this.img;
        return result;
    };
    compNum.prototype.printComp = function () {
        console.log(this.real, "+", this.img, "i");
    };
    return compNum;
}());
var obj1 = new compNum(23, 4);
var obj2 = new compNum(12, 6);
obj1.real = 98;
obj1.img = 55;
obj1.addno(obj2).printComp();
var compNumwithMultiply = /** @class */ (function (_super) {
    __extends(compNumwithMultiply, _super);
    function compNumwithMultiply(x, y) {
        return _super.call(this, x, y) || this;
    }
    compNumwithMultiply.prototype.compMultiply = function (c) {
        var result = new compNum(0, 0);
        result.real = (this.real * c.real) - (this.img * c.img);
        result.img = (this.real * c.img) + (this.img * c.real);
        return result;
    };
    return compNumwithMultiply;
}(compNum));
var obj3 = new compNumwithMultiply(3, 6);
var obj4 = new compNumwithMultiply(4, 5);
obj3.compMultiply(obj4).printComp();
if (toString.call("[1,2,3,4]") === "[object String]")
    console.log("True");
else
    console.log("False");
var str1 = [1, 2, 3, 4];
console.log(str1.join());
var arr = [23, 56, 878, 343, 234];
console.log(arr.slice(0));
