console.log("This is my first TS code...");
let NumVar:number = 23.87;
console.log("Number variable value is:", NumVar);
console.log(`Number variable value is: ${NumVar}`);
/*NumVar = "jkhadhsakd";*/
var boolVar : boolean = true;
console.log(boolVar);
let str:string = "This is the string variable value";
console.log(str);
nm:function addno(x:number, y:number):number{
    return x+y;
}
console.log(addno(10,20));
let n:number = addno(20,30);
console.log(n);
let l:number[] = [2,3,4,5,43,4534];
console.log(l);
let myList:Array<boolean> = [true, true, false, false];
console.log(myList);
let dataPkt:[string, number, string, boolean] = ["127.0.0.1", 34, "192.168.121.115", true];
dataPkt = ["skjhdksaj",77, "kjfhskd", false];
console.log(dataPkt);
enum month {jan=1, feb, mar, apr, may, jun, jul, aug, sep, pct, nov, dec};
let m:month = month.aug;
console.log(m);
var myAnyVAr:any = 78;
console.log(myAnyVAr);
myAnyVAr = "xlx;axksa";
console.log(myAnyVAr);
//let obj = function create(obj:Object|null):void ;
let obj: {key1:number, key2:string} = {key1:21, key2:"Value of Key2"};
console.log(obj);
//obj = {key1:33, key2:"sndaks", key3: 2021};
class compNum{
    real:number;
    img:number;
    constructor(x:number, y: number){
        this.real = x;
        this.img = y;
    }
    addno(c:compNum){
        var result:compNum = new compNum(0,0);
        result.real = c.real + this.real;
        result.img = c.img + this.img;
        return result;
    }
    printComp(){
        console.log(this.real,"+",this.img,"i");
    }
}
let obj1:compNum = new compNum(23,4);
let obj2:compNum = new compNum(12,6);
obj1.real = 98;
obj1.img = 55;
obj1.addno(obj2).printComp();
class compNumwithMultiply extends compNum{
    constructor(x:number, y:number){
        super(x,y);
    }
    compMultiply(c:compNum){
        let result:compNum = new compNum(0,0);
        result.real = (this.real * c.real) - (this.img * c.img);
        result.img = (this.real * c.img) + (this.img * c.real);
        return result;
    }
}
var obj3:compNumwithMultiply = new compNumwithMultiply(3,6);
var obj4:compNumwithMultiply = new compNumwithMultiply(4,5);
obj3.compMultiply(obj4).printComp();
if(toString.call("[1,2,3,4]")==="[object String]")
    console.log("True");
else
    console.log("False");
let str1:number[] = [1,2,3,4]
console.log(str1.join());
let arr:number[] = [23, 56, 878, 343, 234];
console.log(arr.slice(0));