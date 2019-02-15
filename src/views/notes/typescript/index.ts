// @ts-ignore
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`;
//list泛型
let list: Array<number> = [1, 2, 3];


interface UserInfo{
    userName:string,
    pwd:string,
    productCode?:number,
}

function login(userInfo:UserInfo):{result:String}{
    console.log(`姓名：${userInfo.userName}，密码：${userInfo.pwd},产品码：${userInfo.productCode}`)
    return {result:'01'};
}

let param = {userName:"陈阳",pwd:"123456",productCod:1};
login(param).result;

//方法接口
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source, subString) {
    let result = source.search(subString);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

/** 定义类接口的属性及方法 */
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date):void;
}

class timeClass implements ClockInterface{
    currentTime: Date;
    constructor(time:Date){
        this.currentTime = time;
    }
    setTime(newTime:Date){
        this.currentTime = newTime;
    }
}

let timeObj = new timeClass(new Date());


//----------------------------------------------------
let add  : (num:number)=>number=function(num:number):number{return 1}

let myAdd: (x: number, y: number) => number =
        function(x: number, y: number): number { return x + y; };

