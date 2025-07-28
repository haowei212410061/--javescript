/**
 * typescript 類型的主要目的
 * 1. 使用類型分析代碼是否有錯誤
 * 2. 類型可以了解哪些值與變量有關
 *
 * 類型是一個標籤 描述了一個值的屬性和方法
 * 經過推論的變數就會只固定接收該型別下的任何值(固定性)
 */


/**typescript 基礎類型*/
let valu: string = "white";
let valu1: number = 20;
let valu2: boolean = true;
let createboolean: Boolean = new Boolean(); // 返回一個boolean對象
let createByNewBoolean: boolean = Boolean(1); //直接調用boolean返回一個boolean類型
let valu3: number = 133557453535242425522; //要指定bigint型別 結尾要加上n
let valu4: symbol = Symbol("description"); //代表一個唯一的常量值

/**延遲性指派 */
let delayUnsign: number | undefined; //變數在位指派值的時候皆為undefined 所以要加上undefined型別避免報錯
console.log(delayUnsign)
delayUnsign = 12;

/**
 * number:二進制
 * 使用前導0 與小寫或大寫字母'b'
 */
let bin: 0b100;
let anotherBin: number = 0b100;

/**
 * number:八進制
 * 使用前導0跟字母o
 */
let octal: number = 0o10;

/**
 * number:十進制
 * 使用前導0 跟 一個小寫或大寫字母'x'
 * 0x之後的數字在'1234567890abcdef'範圍內
 */
let haxadecimal: number = 0xa;

/**
 * string類型
 * 支持用``來包圍字符的模板字符串
 */
let firstName: string = "hello";
let title: string = "早安";
let descript: string = `I'm ${firstName}, ${title}`;
/**output: I'm hello,早安 */

/*資料類型：any and unknown*/
/*any:用來表示允許賦予值為任意類型*/
let valu5: any = "seven"; //要對any進行任何操作都可以因為它同時可以是任何東西
let test5: number = 20;
let value7 = false;
let number1; //未聲明的變量 未指定類型 會被識別為任意類型

let valu6: unknown; //除了讀寫以及比較之外 不能對unknown的型別變數進行任何操作
let value8 = "white";
let value9 = true;

/**
 * never類型：不包含任何值的類型
 * 不能給一個具有never類型的變量賦予值
 * 通常情況下never類型來表示一個總是拋出錯誤的函數的返回類型
 */
function reiseError(message: string): never {
    throw new Error(message);
}
/**無限循環的函數表達式 返回類型也是never類型*/
let loop = function forever() {
    while (true) {
        console.log("hello");
    }
};

/**
 * 對象類型
 * 是指函數 數組 類 等等
 */

/**
 * void類型：表示根本不存在任何類型
 * 使用void類型作為不返回值的函數的返回類型
 *
 * 將void類型作為不返回任何值的函數或方法的返回類型可以提高代碼的清晰度
 */
function alertName(name: string): void {
    alert(`My name is ${name}`);
}
let unusable: void = undefined;

function log(message): void {
    console.log(message);
}

//資料類型：Null and Undefined
//Null and Undefined 是所有類型的子類型 也就是undefined類型的變量 可以賦予值給number類型的變量
let u: undefined = undefined;
let n: null = null;

let test23: number | undefined = undefined;
let num: number | undefined = u;

//類型推論：若在定義的時候沒有賦予值 不管之後有沒有賦予值 都會被推斷成any類型
let myFavoriteNumber = "seven";
//myFavoriteNumber = 7; =>這行會報錯

//聯合類型：表示取值可以為多種類型的一種
let testnumber: string | number;
testnumber = "seven";
testnumber = 7;

/*
訪問聯合類型的屬性或方法
function failgetLength(something: string | number): number {
  return something.length; //會報錯 因為length不是string and number的共有屬性
}
*/

function RightGetLength(something: string | number): string {
    //第二個string表明回傳的資料類型為string
    return something.toString(); //訪問string and number的共有屬性是沒問題的
}

let number22: string | number;
number22 = "eight"; //這行被推斷成string 訪問length不會報錯
console.log(number22.length);
number22 = 8;
//console.log(number22.length); 這行會報錯


/*類型斷言：可以用來手動指定一個值的類型*/
/*語法：1.值 as 類型   2. <類型>值*/
/*在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型 */

/*用途1:將一個聯合類型斷言為其中一個類型 */
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim: void;
}
function getName(animal: Cat | Fish) {
    return animal.name;
}

/**
 * 字符串字面量類型：定義一個只接受指定字符串字面量類型
 */

let click: "click"; //只接受字面字符串'click'
let mouseEvent: "click" | "dbclick" | "mouseup" | "mousedown";
mouseEvent = "click";
mouseEvent = "dbclick";
mouseEvent = "mouseup";
mouseEvent = "mousedown";

/**使用類型別名 */
type MouseEvent1 = "click" | "dbclick" | "mouseup" | "mousedown";
let Mouseevent2: MouseEvent1;
Mouseevent2 = "click";
Mouseevent2 = "dbclick";
Mouseevent2 = "mouseup";
Mouseevent2 = "mousedown";
let anotherEvent: MouseEvent1;

/**
 * object typescript
 * object類型表示所有不再基本類型中的值
 */

/**聲明一個變量來保存一個對象的實例 */
let employee: object;

employee = {
    firstName: "john",
    lastName: "Doe",
    age: 25,
    jobtitle: "developer",
};

/**使用Object.freeze 定義常數物件 讓整個物件為ReadOnly狀態*/
const freezeObj = Object.freeze({ foo: 123, bar: "string" })

/**明確指定object對象的屬性 */
let employee1: {
    first: string;
    last: string;
    age: number;
    jobtitle: string;
};

/**將上述兩種方法結合 */
let employee2: {
    first: string;
    last: string;
    age: number;
    jobtitle: string;
} = {
    first: "amy",
    last: "lin",
    age: 24,
    jobtitle: "good morning",
};

/**
 * object vs Object
 * typescript還有一種類型是Object
 * Object類型描述了所有對象的功能
 * Object類型具有可以被任何對象訪問的toString and valueOf()方法
 */

/**============================================================== */

/* 陣列類型
 * 一旦定義了一個特定類型的陣列 typescript將禁止向陣列添加不兼容的數據類型
 */
const arrayName: string[] = []//聲明一個字符串陣列
/**添加多個字符串 */
arrayName[0] = "john";
arrayName[1] = "amy";

/**也可以用陣列的方法：push */
arrayName.push("john");

//代表這個陣列可以存放兩種不同類型的資料型態
const multiplyDataType: (number | string)[] = ["1", 1, "2", 2]

/*不允許出現多種類型 */
let fibonacci: number[] = [1, 2, 3, 4, 5];
//let testlist: number[] = [1, 2, 3, 4, 5, "b"]; 這行會報錯

let testlist: number[] = [1, 2, 3];
//testlist.push("b"); 會報錯 定義數組時限制添加近數組的資料類型為number

/*陣列泛型 */
let list1: Array<number> = [1, 2, 4, 5, 6];

/*用接口表示數組 */
interface NumberArray {
    [index: number]: number; //只要索引的類型是數字時 值的類型必須是數字
}

/*類數組 */
function sum() {
    //let args: number[] = arguments;
} //會報錯 例如：arguments

/*上例中 arguments實際上是一個類數組 不能用普通的數組方式來描述 要用接口 */
/*約束了這個類數組有length and callee這兩個屬性 */
function sum1() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
/*any在數組的應用 */
let list11: any[] = ["a", 55, { website: "http://google.com" }];

/**========================================================================= */
/*
 * 函數類型組成：參數和返回值類型
 * 指定類型：(parameter:type,parameter:type) => type
 * 函數參數的類型 也可以在函數體內用於類型檢查
 * 當一個函數有返回類型時 typescript編譯器會檢查每一個return語句是否與返回類型兼容
 * 以確保返回值符合要求
 */
function functionName(x: number, y: number): number {
    return x + y;
} //定義參數的數據類型 以及回傳的數據類型

/**
 * 函數沒有返回值：void
 */
function sayhello(message: string): void {
    console.log(`I want to say ${message}`);
}

/**
 * 空值會阻止函數內部的代碼返回一個值
 * 阻止調用代碼將函數的結果分配給一個變量
 */
function addnumber(a: number, b: number) {
    return a + b;
}

/*函數的表達式 */
/*手動給mySum添加類型*/
/* => 用來表示函數的定義 左邊是輸入類型 需要用括號刮起來 右邊是輸出類型*/
let mySum: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};

/**函式型別註記的四種宣告方式 */
let addition: (a: number, b: number) => number = function (a, b) {
    return a + b
}

let addition1 = function (a: number, b: number): number {
    return a + b
}

function addition2(a: number, b: number): number {
    return a + b
}

let addition3 = function (a, b) {
    return a + b
} as (a: number, b: number) => number


//就算沒有寫return的類型 typescript也會推論出這個函數返回的資料型態
function returnNumber() {
    return 43
}

//像是這種沒有回傳值的函數 typescript在編譯的時候 如果在函式內沒有看到return的敘述式 會判定這個函式的輸出型別為void
function sayHello() {
    console.log("hello")
}
//結果會如同上一個sayHello function一樣 輸出型別都是void 都是無意義的
function noReturnFunc() {
    return
}

/**
 * 使一個函數的參數變成一個可選參數
 * 使一個函數的參數變成一個可選項 在該名稱後使用'?'
 * 可選參數必須連續性的被宣告在函數參數的末端 如果有多個參數 必須將可選參數的位置放在最後一個
 */

function multiply(a: number, b: number, c?: number): number {
    if (typeof c != "undefined") {
        //檢查參數是否初始化
        return a * b * c;
    }
    return a * b;
}

function increment(input1: number, input2?: number): number {
    return input1 + (input2 ? input2 : input1)
}

function increment1(input1: number, input2?: number): number {
    //if input2 === null or input === undefined 則指派數字1
    const value = input2 ?? 1
    return input1 + value
}

//使用預設參數 如果input2 === null or undefined 則input2 = 1
function increment2(input1: number, input2: number = 1) {
    return input1 + input2
}

/**
 * 默認參數：在調用函數時沒有傳入參數 函數將對省略的參數採取默認的初始化值
 */

function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); //只傳入price參數 默認discount = 0.05

/**範例2 */
function getDay(
    year: number = new Date().getFullYear(),
    month: number
): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
            else day = 28;
            break;
        default:
            throw Error("Invalid month");
    }
    return day;
} //默認參數：（year: number = new Date().getFullYear()）

/**
 * rest參數：函數接受指定類型的零個或多個參數
 * rest參數出現在參數列表的最後
 * rest參數的類型是陣列類型
 * 聲明一個rest參數 使用...作為前綴
 * function functionName(...rest:type[]){......}
 */

/**
 * getTotal可以傳入多個參數 並且計算加總
 */
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => (total += num));
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

/**
 * 函數重載：建立一個函數的參數類型和結果類型之間的關係
 */

function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

/**
 * 使用聯合類型定義函數參數和結果的類型範圍
 * 但未能描述當參數為一個數字時返回一個數字 當參數為字符串時返回一個字符串
 */
function addfunction(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return 0
}

/**
 * 向add()函數添加了兩個重載
 * 第一個重載告訴編譯器 當參數是數字時 函數應該返回一個數字
 * 第二個重載告訴編譯器 當參數是字符串 函數應該返回一個字符串
 *
 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

/**
 * 帶有可選參數的函數重載
 * 當重載一個函數時 必須保證必選參數的數量相同 如果一個重載有比另一個更多的參數
 * 必須將額外的參數設置為可選項
 */

/**
 * 範例
 * sum()函數接受兩個或三個數字 第三個參數是可選的
 * 若不設置可選 將會出現錯誤
 */
function sum2(a: number, b: number): number;
function sum2(a: number, b: number, c: number): number;
function sum2(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

/*重載：允許一個函數接受不同數量或類型的參數時 做出不同的處理 */
/*重複定義了多次reverse函數 前幾次都是函數定義 最後一次是函數實現 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    } else if (typeof x === "string") {
        return x.split("").reverse().join();
    }
}


/*===================================================================*/
//型別化名(Type alias)
type UserInfo = {
    name: string,
    age: number,
    interest: string[]
}
const userinfo: UserInfo = {
    name: "john",
    age: 20,
    interest: ['apple', 'banana']
}


interface UserInfo1 {
    name: string;
    age?: number;//添加問號 代表這個屬性可以被忽略
    readonly arr: string[]; //添加一個唯讀屬性:代表這個屬性只能讀取 不能覆寫
}

let userinfo1: UserInfo1 = {
    name: 'john',
    age: 20,
    arr: ['a', 'b']
};

delete userinfo1.age;

type PersonalInfo = {
    readonly name: string;
    readonly age: number;
    readonly interest: string[];
}

//宣告一個classMate的json物件內的屬性都為唯讀屬性
let ClassMateInfo: Readonly<PersonalInfo> = {
    name: "Max",
    age: 18,
    interest: ["basketball", 'videoGame']
}

/**範例:在react中統一管理狀態以及操作狀態
 */

type NewItem = {
    type: "NEW_ITEM"
    payload: { title: string }
}
type RemoveItem = {
    type: "REMOVE_ITEM"
    payload: { id: number }
}

type CompleteItem = {
    type: "COMPLETE_ITEM"
    payload: { id: number }
}
type UndoItem = {
    type: "UNDO_ITEM"
    payload: { id: number }
}

type Action = (NewItem | RemoveItem | CompleteItem | UndoItem)

const CompleteAction: Action = {
    type: 'COMPLETE_ITEM',
    payload: { id: 1 }
}

//用統一的狀態管理函式 處理不同的動作(action)
function dispatch(action:Action){
    switch(action.type){
        case "NEW_ITEM":
            console.log("add new item")
            break;
        case "REMOVE_ITEM":
            console.log("remove old item")
            break;
        case "COMPLETE_ITEM":
            console.log("complete item")
            break;
        case "UNDO_ITEM":
            console.log("undo item")
            break
        
    }
}